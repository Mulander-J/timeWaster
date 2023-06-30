class DateBase {
  year!: u32;
  month!: u8;
  natMonth!:u8; // nature month
  date!: u8;
  day!: u8;
  week!: string;
  season!: string;
  hour!: u8;
  minute!: u8;
  second!: u8;
  milliSecond!: u32;
}

class TimeExtend {
  yearLen!: u16; // total days of year
  seasonLen!: u8; // total days of season
  monthLen!: u8; // total days of month
  dayOfYear!: f32;
  dayOfSeason!: u8;
  secOfDay!: f32;
}

class CalcRes {
  isLeap!: boolean;
  m_season!: f32 // month/season
  m_y!: f32; // month/year
  d_y!: f32; // date/year
  d_m!: f32; // date/month
  d_w!: f32; // date/week
  h_d!: f32; // hour/day
  min_h!: f32; // minute/hour
  s_min!: f32; // second/minute
  s_d!: f32; // second/day
}

class TimeCalc {
  times!: string[];
  base!: DateBase;
  extend!: TimeExtend;
  calc!: CalcRes;
}

const _isLeap = (date: u64) : boolean => {
  let y=  new Date(date).getUTCFullYear();
  let isLeap = (0===y%4) && (0===y%100) || (0===y%400);
  return isLeap ? true : false;
}
const _getMonthLength = (y: i32, m:i32) :i32 => {
  return new Date(Date.UTC(y,m+1,0,0,0,0,0)).getUTCDate()
}
const _getSeasonCalc = (y:i32, m: i32, d: i32) :u8[] => {
  const firstMonth = i32(Math.ceil(m / 3) * 3)
  const currentMonth = m % 3
  const monthTols = [
    _getMonthLength(y, firstMonth),
    _getMonthLength(y, firstMonth + 1),
    _getMonthLength(y, firstMonth + 2)
  ]
  let tol = 0
  let res = 0
  for (let i = 0; i < 3; i++) {
    tol+= monthTols[i];
    if(i<currentMonth) res+= monthTols[i];
    else res+=d;
  }
  return [<u8>tol, <u8>res]
}
const _getWeekDay = (day: u8) :string => {
  switch(day) {
    case 0:
      return 'sunday';
    case 1:
      return 'monday';
    case 2:
      return 'tuesday';
    case 3:
      return 'wednesday';
    case 4:
      return 'thursday';
    case 5:
      return 'friday';
    case 6:
      return 'saturday';
    default:
      return '';  
  }
}
const _getSeason = (m: u8) :string => {
  if (m>=10) return 'winter';
  if (m>=7) return 'autaum';
  if (m>=4) return 'summer';
  return 'spring'
}

export function calc(_time: u64, _tz: i8) : TimeCalc {
  const offset = _tz * 3600000;
  const _timeUtc = _time || Date.now();
  const _timeLocal = _timeUtc - offset;
  //  define date instance
  const _ins = new Date(_timeLocal);
  //  define vars
  const year = _ins.getUTCFullYear();
  const month = <u8>_ins.getUTCMonth();
  const natMonth = month + 1;
  const date = <u8>_ins.getUTCDate();
  const day = <u8>_ins.getUTCDay();
  const hour = <u8>_ins.getUTCHours();
  const minute = <u8>_ins.getUTCMinutes();
  const second = <u8>_ins.getUTCSeconds();
  // define calc vars 
  const isLeap = _isLeap(_timeLocal);
  const week = _getWeekDay(day);
  const season = _getSeason(natMonth);
  const yearLen :u16 = isLeap ? 366 : 365;
  const monthLen = <u8>_getMonthLength(year, month);
  const seasonCalc = _getSeasonCalc(year, month, date);
  const seasonLen = seasonCalc[0];
  const dayOfSeason = seasonCalc[1];
  const dayOfYear = f32((_timeLocal - Date.UTC(year,0,0,0,0,0,0)))/(24*60*60*1000) + 1;
  const secOfDay = <f32>hour*3600+<f32>minute*60+second;

  return {
    times: [_timeUtc.toString(), _timeLocal.toString()],
    base: {
      // YYYY/DD/MM/W
      year, month, natMonth, date, 
      // week
      day, week, season,
      // h:m:s
      hour, minute, second,
      // ss
      milliSecond: _ins.getUTCMilliseconds(),
    },
    extend: {
      yearLen, monthLen, seasonLen,
      dayOfYear, secOfDay, dayOfSeason
    },
    calc: {
      isLeap,
      m_season: <f32>dayOfSeason / seasonLen,
      m_y: <f32>natMonth / 12,
      d_y: <f32>dayOfYear / yearLen,
      d_m: <f32>date / monthLen,
      d_w:  day ===0 ? 1 : (<f32>day / 7),
      h_d: <f32>hour / 24,
      min_h: <f32>minute / 60,
      s_d: secOfDay / (60*60*24),
      s_min: <f32>second / 60,
    }
  };
}
