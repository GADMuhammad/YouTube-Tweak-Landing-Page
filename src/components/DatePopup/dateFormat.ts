export type Calendar = 'gregory' | 'islamic';
export type WeekdayFmt = 'long' | 'narrow' | 'short' | 'none';
export type DayFmt = '2-digit' | 'numeric';
export type MonthFmt = '2-digit' | 'long' | 'narrow' | 'numeric' | 'short';
export type YearFmt = '2-digit' | 'numeric';

export interface DateCfg {
  calendar: Calendar;
  weekday: WeekdayFmt;
  day: DayFmt;
  month: MonthFmt;
  year: YearFmt;
}

export const DEFAULT_DATE_CFG: DateCfg = {
  calendar: 'gregory',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const SAMPLE_DATE = new Date(2026, 0, 5);

export function formatSampleDate(cfg: DateCfg, locale: 'ar' | 'en-GB'): string {
  const opts: Intl.DateTimeFormatOptions = { day: cfg.day, month: cfg.month, year: cfg.year };
  if (cfg.weekday !== 'none') opts.weekday = cfg.weekday;
  const nu = locale === 'ar' ? '-nu-arab' : '';

  try {
    const dtf = new Intl.DateTimeFormat(`${locale}-u-ca-${cfg.calendar}${nu}`, opts);
    return dtf
      .formatToParts(SAMPLE_DATE)
      .map((p) => {
        if ((p.type === 'day' && cfg.day === 'numeric') || (p.type === 'month' && cfg.month === 'numeric')) {
          return p.value.replace(/^[0٠]+(?=.)/, '');
        }
        return p.value;
      })
      .join('');
  } catch {
    return '';
  }
}
