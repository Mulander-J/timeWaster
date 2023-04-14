import dateEnum from './../enums/dateEnum';
export default class TwDate extends Date {
  getDayInYear = () => {
    return (
      (Date.now() - new TwDate(new TwDate().getFullYear(), 0, 1, 0, 0, 0).getTime()) /
      (24 * 3600 * 1000)
    );
  };
  getMillSecInDay = () => {
    const y = new TwDate().getFullYear();
    const m = new TwDate().getMonth();
    const d = new TwDate().getDate();
    return Date.now() - new TwDate(y, m, d, 0, 0, 0).getTime();
  };
  getRatioYear = () => {
    return this.getDayInYear() / 365;
  };
  getRatioMonth = () => {
    const y = new TwDate().getFullYear();
    const m = new TwDate().getMonth();
    return new TwDate().getDate() / new TwDate(y, m + 1, 0).getDate();
  };
  getRatioWeek = () => {
    return (new TwDate().getDay() || 7) / 7;
  };
  getRatioDay = () => {
    return this.getMillSecInDay() / (24 * 3600 * 1000);
  };
  getWeekEn = () => {
    return dateEnum.WEEK_EN[new TwDate().getDay()];
  };
  getWeekZh = () => {
    return dateEnum.WEEK_ZH[new TwDate().getDay()];
  };
  getSeasonEn = () => {
    return dateEnum.SEASON_EN[Math.floor(new TwDate().getMonth() / 3)];
  };
  getSeasonZh = () => {
    return dateEnum.SEASON_ZH[Math.floor(new TwDate().getMonth() / 3)];
  };
}
