import { Funnel, FolderSimple, MonitorPlay, Lightning } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import FoldersMock from '../YouTubeMock/FoldersMock';
import type { Lang } from '../../App';
import styles from './FeedFilterSection.module.css';

const POINT_ICONS: Record<string, Icon> = {
  funnel: Funnel,
  'folder-simple': FolderSimple,
  'monitor-play': MonitorPlay,
  lightning: Lightning,
};

interface Point {
  icon: string;
  title: string;
  body: string;
}

interface FeedFilterSectionProps {
  lang: Lang;
  kicker: string;
  title: string;
  body: string;
  points: Point[];
}

export default function FeedFilterSection({ lang, kicker, title, body, points }: FeedFilterSectionProps) {
  const text = (
    <div dir={lang === 'ar' ? 'rtl' : undefined}>
      <p className={styles.body}>{body}</p>
      <div className={styles.points}>
        {points.map((p, i) => {
          const Icon = POINT_ICONS[p.icon];
          return (
            <div className={`${styles.point} reveal-item`} key={i}>
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

  const mock = <FoldersMock lang={lang} />;

  return (
    <div className={`${styles.section} reveal`}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={[styles.grid, lang === 'ar' ? styles.gridAr : ''].join(' ')}>
        {lang === 'ar' ? (
          <>
            {mock}
            {text}
          </>
        ) : (
          <>
            {text}
            {mock}
          </>
        )}
      </div>
    </div>
  );
}
