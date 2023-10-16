mod tui;

use std::time::{Duration, Instant};

use color_eyre::eyre::{eyre, Result};
// use futures::{FutureExt, StreamExt};
use itertools::Itertools;
use ratatui::{backend::CrosstermBackend as Backend, prelude::*, widgets::*};
use strum::EnumIs;
use tui_big_text::BigText;

pub type Frame<'a> = ratatui::Frame<'a, Backend<std::io::Stderr>>;

#[tokio::main]
async fn main() -> Result<()> {
  let mut app = StopwatchApp::default();
  app.run().await
}

#[derive(Debug, Default, Clone, Copy, PartialEq, Eq, EnumIs)]
enum AppState {
  #[default]
  Stopped,
  Running,
  Quitting,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Message {
  StartOrSplit,
  Stop,
  Tick,
  Quit,
}

#[derive(Debug, Clone, PartialEq)]
struct StopwatchApp {
  state: AppState,
  splits: Vec<Instant>,
  start_time: Instant,
  frames: u32,
  fps: f64,
}

impl Default for StopwatchApp {
  fn default() -> Self {
    Self::new()
  }
}

impl StopwatchApp {
  fn new() -> Self {
    Self {
      start_time: Instant::now(),
      frames: Default::default(),
      fps: Default::default(),
      splits: Default::default(),
      state: Default::default(),
    }
  }

  async fn run(&mut self) -> Result<()> {
    let mut tui = tui::Tui::new()?;
    tui.enter()?;
    while !self.state.is_quitting() {
      tui.draw(|f| self.ui(f).expect("Unexpected error during drawing"))?;
      let event = tui.event_rx.recv().await.ok_or(eyre!("Unable to get event"))?;
      // let event = tui.next().await.ok_or(eyre!("Unable to get event"))?; // blocks until next event
      let message = self.handle_event(event)?;
      self.update(message)?;
    }
    tui.exit()?;
    Ok(())
  }

  fn handle_event(&self, event: tui::Event) -> Result<Message> {
    let msg = match event {
      tui::Event::Key(key) => {
        match key.code {
          crossterm::event::KeyCode::Char('q') => Message::Quit,
          crossterm::event::KeyCode::Char(' ') => Message::StartOrSplit,
          crossterm::event::KeyCode::Char('s') | crossterm::event::KeyCode::Enter => Message::Stop,
          _ => Message::Tick,
        }
      },
      _ => Message::Tick,
    };
    Ok(msg)
  }

  fn update(&mut self, message: Message) -> Result<()> {
    match message {
      Message::StartOrSplit => self.start_or_split(),
      Message::Stop => self.stop(),
      Message::Tick => self.tick(),
      Message::Quit => self.quit(),
    }
    Ok(())
  }

  fn start_or_split(&mut self) {
    if self.state.is_stopped() {
      self.start();
    } else {
      self.record_split();
    }
  }

  fn stop(&mut self) {
    self.record_split();
    self.state = AppState::Stopped;
  }

  fn tick(&mut self) {
    self.frames += 1;
    let now = Instant::now();
    let elapsed = (now - self.start_time).as_secs_f64();
    if elapsed >= 1.0 {
      self.fps = self.frames as f64 / elapsed;
      self.start_time = now;
      self.frames = 0;
    }
  }

  fn quit(&mut self) {
    self.state = AppState::Quitting
  }

  fn start(&mut self) {
    self.splits.clear();
    self.state = AppState::Running;
    self.record_split();
  }

  fn record_split(&mut self) {
    if !self.state.is_running() {
      return;
    }
    self.splits.push(Instant::now());
  }

  fn elapsed(&mut self) -> Duration {
    if self.state.is_running() {
      self.splits.first().map_or(Duration::ZERO, Instant::elapsed)
    } else {
      // last - first or 0 if there are no splits
      let now = Instant::now();
      let first = *self.splits.first().unwrap_or(&now);
      let last = *self.splits.last().unwrap_or(&now);
      last - first
    }
  }

  fn ui(&mut self, f: &mut Frame) -> Result<()> {
    let layout = self.layout(f.size());
    f.render_widget(Paragraph::new("Stopwatch Example"), layout[0]);
    f.render_widget(self.fps_paragraph(), layout[1]);
    f.render_widget(self.timer_paragraph(), layout[2]);
    f.render_widget(Paragraph::new("Splits:"), layout[3]);
    f.render_widget(self.splits_paragraph(), layout[4]);
    f.render_widget(self.help_paragraph(), layout[5]);
    Ok(())
  }

  fn fps_paragraph(&mut self) -> Paragraph<'_> {
    let fps = format!("{:.2} fps", self.fps);
    Paragraph::new(fps).style(Style::new().dim()).alignment(Alignment::Right)
  }

  fn timer_paragraph(&mut self) -> BigText<'_> {
    let style = if self.state.is_running() { Style::new().green() } else { Style::new().red() };
    let elapsed = self.elapsed();
    let duration = self.format_duration(elapsed);
    let lines = vec![duration.into()];
    tui_big_text::BigTextBuilder::default().lines(lines).style(style).build().unwrap()
  }

  /// Renders the splits as a list of lines.
  ///
  /// ```text
  /// #01 -- 00:00.693 -- 00:00.693
  /// #02 -- 00:00.719 -- 00:01.413
  /// ```
  fn splits_paragraph(&mut self) -> Paragraph<'_> {
    let start = *self.splits.first().unwrap_or(&Instant::now());
    let mut splits = self
      .splits
      .iter()
      .copied()
      .tuple_windows()
      .enumerate()
      .map(|(index, (prev, current))| self.format_split(index, start, prev, current))
      .collect::<Vec<_>>();
    splits.reverse();
    Paragraph::new(splits)
  }

  fn help_paragraph(&mut self) -> Paragraph<'_> {
    let space_action = if self.state.is_stopped() { "start" } else { "split" };
    let help_text =
      Line::from(vec!["space ".into(), space_action.dim(), " enter ".into(), "stop".dim(), " q ".into(), "quit".dim()]);
    Paragraph::new(help_text).gray()
  }

  fn layout(&self, area: Rect) -> Vec<Rect> {
    let layout = Layout::default()
      .direction(Direction::Vertical)
      .constraints(vec![
        Constraint::Length(2), // top bar
        Constraint::Length(8), // timer
        Constraint::Length(1), // splits header
        Constraint::Min(0),    // splits
        Constraint::Length(1), // help
      ])
      .split(area);
    let top_layout = Layout::default()
      .direction(Direction::Horizontal)
      .constraints(vec![
        Constraint::Length(20), // title
        Constraint::Min(0),     // fps counter
      ])
      .split(layout[0]);

    // return a new vec with the top_layout rects and then rest of layout
    top_layout[..].iter().chain(layout[1..].iter()).copied().collect()
  }

  fn format_split<'a>(&self, index: usize, start: Instant, previous: Instant, current: Instant) -> Line<'a> {
    let split = self.format_duration(current - previous);
    let elapsed = self.format_duration(current - start);
    Line::from(vec![
      format!("#{:02} -- ", index + 1).into(),
      Span::styled(split, Style::new().yellow()),
      " -- ".into(),
      Span::styled(elapsed, Style::new()),
    ])
  }

  fn format_duration(&self, duration: Duration) -> String {
    format!("{:02}:{:02}.{:03}", duration.as_secs() / 60, duration.as_secs() % 60, duration.subsec_millis())
  }
}