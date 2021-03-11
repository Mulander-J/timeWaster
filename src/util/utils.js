/**
 * 时间格式化
 * */
export const padLeftZero = (str)=> {
  return ('00' + str).substr(str.length);
};
export const formatDate = (date, fmt)=> {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
/**
 * 自定义时间对象
 * */
//  闰年校验
export const  isR = (date)=> {
  let y= date.getFullYear();
  let isLeap = (0===y%4) && (0===y%100) || (0===y%400);
  return isLeap ? 366 : 365;
};
export function timeWaste(date) {
  let yearTotal=isR(date)
  let dayOfYear = Math.ceil(( date - new Date(date.getFullYear().toString()))/(24*60*60*1000))+1
  let dayOfMonth = new Date(date.getFullYear(),(date.getMonth()+1),0).getDate()
  let week = date.getDay()==0?7:date.getDay();
  let good =date.getHours()<12&&date.getHours()>=4?'morning':
    date.getHours()>=12&&date.getHours()<20?'afternoon':'evening';
  let m = date.getHours()>=12?'PM':'AM'
  return {
    date: date,
    year:date.getFullYear(),
    week: week,
    week_en:date.toDateString().split(" ")[0],
    month: date.getMonth()+1,
    month_en:date.toDateString().split(" ")[1],
    day: date.getDate(),
    dayOfYear: dayOfYear,
    dayOfMonth: dayOfMonth,
    D_W: Math.ceil(100*week/7),
    D_M: Math.ceil(100*date.getDate()/dayOfMonth),
    D_Y: Math.ceil(100*dayOfYear/yearTotal),
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
    m:m,
    good:good,
    yearTotal: yearTotal
  }
};
/**
 * 时间计算
 * */
export function timeMath(dateA,dateB) {
  var timeSpan = {};
  var TotalMilliseconds = dateA.getTime() - dateB.getTime();//相差的毫秒数
  if (isNaN(TotalMilliseconds)  || TotalMilliseconds<0) {
    return null;
  }
  timeSpan.Days = parseInt(TotalMilliseconds / 1000 / 60 / 60 /24);
  timeSpan.TotalHours = parseInt(TotalMilliseconds / 1000 / 60 / 60)+'';
  timeSpan.Hours = timeSpan.TotalHours % 24;
  timeSpan.TotalMinutes = parseInt(TotalMilliseconds / 1000 / 60);
  timeSpan.Minutes = timeSpan.TotalMinutes % 60+'';
  timeSpan.TotalSeconds = parseInt(TotalMilliseconds / 1000);
  timeSpan.Seconds = timeSpan.TotalSeconds % 60;
  timeSpan.TotalMilliseconds = TotalMilliseconds;
  timeSpan.Milliseconds = TotalMilliseconds % 1000;
  return timeSpan;
};
