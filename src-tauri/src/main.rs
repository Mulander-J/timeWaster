// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use chrono::{Datelike, Utc, TimeZone,Local};

const  DAY_SECONDS: i32 = 24*60*60;

#[tauri::command]
fn greet(prefix: &str) -> String {
  let time =  Local::now();
  format!("{} {}", prefix, time.format("%Y-%m-%d %H:%M:%S"))
}

#[tauri::command]
fn ask_year() -> f64 {
  let now = Utc::now();
  let (is_common_era, year )= now.year_ce();
  let start =  Utc.with_ymd_and_hms(year as i32, 01, 01, 0, 0, 0).unwrap();
  let tol =  if is_common_era { DAY_SECONDS * 365 } else { DAY_SECONDS * 366 };
  let pass = now - start;
  // println!("tol {}; pass {}", tol, pass);
  pass.num_seconds() as f64 / tol as f64
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet,ask_year])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
