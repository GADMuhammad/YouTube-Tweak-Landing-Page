import { MoonStars, SlidersHorizontal, Eye } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import DatePopup from '../DatePopup/DatePopup';
import type { Lang } from '../../App';
import styles from './DatePopupSection.module.css';

const POINT_ICONS: Record<string, Icon> = {
  'moon-stars': MoonStars,
  'sliders-horizontal': SlidersHorizontal,
  eye: Eye,
};

interface Point {
  icon: string;
  title: string;
  body: string;
}

interface DatePopupSectionProps {
  lang: Lang;
  kicker: string;
  title: string;
  body: string;
  points: Point[];
}

export default function DatePopupSection({ lang, kicker, title, body, points }: DatePopupSectionProps) {
  const text = (
    <div dir={lang === 'ar' ? 'rtl' : undefined}>
      <p className={styles.body}>{body}</p>
      <div className={styles.points}>
        {points.map((p, i) => {
          const Icon = POINT_ICONS[p.icon];
          return (
            <div className={styles.point} key={i}>
              {Icon && <Icon size={19} weight="fill" className={styles.pointIcon} />}
              <div>
                <div className={styles.pointTitle}>{p.title}</div>
                <div className={styles.pointBody}>{p.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const popup = <DatePopup lang={lang} />;

  return (
    <div className={styles.section}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={[styles.grid, lang === 'ar' ? styles.gridAr : ''].join(' ')}>
        {lang === 'ar' ? (
          <>
            {popup}
            {text}
          </>
        ) : (
          <>
            {text}
            {popup}
          </>
        )}
      </div>
    </div>
  );
}
