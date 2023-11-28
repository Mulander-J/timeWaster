use std::env;
use dotenv::dotenv;
use anyhow::Result;
use chrono::{Datelike, Local, TimeZone};
use crossterm::{
    event::{self, Event::Key, KeyCode::Char},
    execute,
    terminal::{disable_raw_mode, enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen},
};
use ratatui::{
    prelude::{
        Alignment, Color, Constraint, CrosstermBackend, Direction, Layout, Rect, Style, Terminal,
    },
    widgets::{block, Block, BorderType, Borders, Padding, Paragraph},
};

pub type Frame<'a> = ratatui::Frame<'a, CrosstermBackend<std::io::Stderr>>;

fn startup() -> Result<()> {
    enable_raw_mode()?;
    execute!(std::io::stderr(), EnterAlternateScreen)?;
    Ok(())
}

fn shutdown() -> Result<()> {
    execute!(std::io::stderr(), LeaveAlternateScreen)?;
    disable_raw_mode()?;
    Ok(())
}

// App state
struct App {
    should_image: bool,
    should_quit: bool,
}

pub enum DateKey {
    Year,
    Month,
    Day,
}

const DAY_SECONDS: i64 = 24 * 60 * 60;

fn calc_percent(key: DateKey) -> f64 {
    let now = Local::now();
    let tol: i64;
    let pass: i64;

    match key {
        DateKey::Day => {
            let start = Local
                .with_ymd_and_hms(now.year(), now.month(), now.day(), 0, 0, 0)
                .unwrap();
            pass = (now - start).num_seconds();
            tol = DAY_SECONDS;
        }
        DateKey::Month => {
            let start = Local
                .with_ymd_and_hms(now.year(), now.month(), 1, 0, 0, 0)
                .unwrap();
            let is_dec = now.month() == 12;
            let end = Local
                .with_ymd_and_hms(
                    now.year() + (if is_dec { 1 } else { 0 }),
                    if is_dec { 1 } else { now.month() + 1 },
                    1,
                    0,
                    0,
                    0,
                )
                .unwrap();
            // let end = start.checked_add_months(Months::new(1)).unwrap();
            pass = (now - start).num_seconds();
            tol = (end - start).num_seconds();
        }
        DateKey::Year => {
            let (is_common_era, year) = now.year_ce();
            let start = Local
                .with_ymd_and_hms(year as i32, 01, 01, 0, 0, 0)
                .unwrap();
            tol = if is_common_era {
                DAY_SECONDS * 365
            } else {
                DAY_SECONDS * 366
            };
            pass = (now - start).num_seconds();
        }
    }

    100 as f64 * pass as f64 / tol as f64
}

fn centered_rect(r: Rect, percent_x: u16, percent_y: u16) -> Rect {
    let popup_layout = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Percentage((100 - percent_y) / 2),
            Constraint::Percentage(percent_y),
            Constraint::Percentage((100 - percent_y) / 2),
        ])
        .split(r);

    Layout::default()
        .direction(Direction::Horizontal)
        .constraints([
            Constraint::Percentage((100 - percent_x) / 2),
            Constraint::Percentage(percent_x),
            Constraint::Percentage((100 - percent_x) / 2),
        ])
        .split(popup_layout[1])[1]
}

// App ui render function
// &mut self, f: &mut Frame
fn ui(app: &App, f: &mut Frame<'_>) {
    // setup layout
    let layout = Layout::default()
        .direction(Direction::Vertical)
        .constraints(vec![
            Constraint::Length(4),
            Constraint::Min(20),
            Constraint::Length(3),
        ])
        .split(f.size());
    let time = Local::now();
    // UI-Header
    f.render_widget(
        Paragraph::new(format!(
            "Now: {}\nYear Passed {:.4}%;Month Passed {:.4}%;Day Passed {:.4}%;",
            time.format("%Y-%m-%d %H:%M:%S"),
            calc_percent(DateKey::Year),
            calc_percent(DateKey::Month),
            calc_percent(DateKey::Day)
        ))
        .alignment(Alignment::Center)
        .block(
            Block::default()
                .title(block::Title::from("By @Mulander-J").alignment(Alignment::Left))
                .title(block::Title::from("TimeWaster").alignment(Alignment::Center))
                .title(block::Title::from("Powered with ratatui").alignment(Alignment::Right))
                .borders(Borders::TOP.union(Borders::BOTTOM))
                .border_type(BorderType::Double)
                .border_style(Style::default().fg(Color::Magenta)),
        ),
        layout[0],
    );
    if app.should_image {
        // UI-ActionSheets
        f.render_widget(
            Paragraph::new(env::var("USAGI_ASCII").unwrap())
            .alignment(Alignment::Center)
            .style(Style::default().fg(Color::White).bg(Color::Black))
            .block(
                Block::default()
                    // .title("When Passed")
                    .borders(Borders::ALL)
                    .padding(Padding::horizontal(1))
                    .border_type(BorderType::Rounded)
                    .border_style(Style::default().fg(Color::LightYellow)),
            ),
            // layout[1]
            centered_rect(layout[1], 50, 100),
        );
    }
    // UI-Footer
    f.render_widget(
        Paragraph::new("Press \"q\" to quit; Press \"c\" to chiikawa.")
            .alignment(Alignment::Center)
            .block(
                Block::default()
                    .title("Hints")
                    .title_alignment(Alignment::Center)
                    .borders(Borders::ALL)
                    .border_style(Style::default().fg(Color::Cyan)),
            ),
        layout[2],
    );
}

// App update function
fn update(app: &mut App) -> Result<()> {
    if event::poll(std::time::Duration::from_millis(250))? {
        if let Key(key) = event::read()? {
            if key.kind == event::KeyEventKind::Press {
                match key.code {
                    Char('c') => app.should_image = !app.should_image,
                    Char('q') => app.should_quit = true,
                    _ => {}
                }
            }
        }
    }
    Ok(())
}

fn run() -> Result<()> {
    // ratatui terminal
    let mut t = Terminal::new(CrosstermBackend::new(std::io::stderr()))?;

    // application state
    let mut app = App {
        should_image: false,
        should_quit: false,
    };

    loop {
        // application update
        update(&mut app)?;

        // application render
        t.draw(|f| {
            ui(&app, f);
        })?;

        // application exit
        if app.should_quit {
            break;
        }
    }

    Ok(())
}

fn main() -> Result<()> {
    dotenv().ok();
    // setup terminal
    startup()?;

    let result = run();

    // teardown terminal before unwrapping Result of app run
    shutdown()?;

    result?;

    Ok(())
}
