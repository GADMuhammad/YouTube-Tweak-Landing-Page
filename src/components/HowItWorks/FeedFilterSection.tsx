import { Funnel, MonitorPlay, Lightning } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import Feat3Mock from '../YouTubeMock/Feat3Mock';
import type { Video } from '../../data/videos';
import type { Lang } from '../../App';
import { useReveal } from '../../hooks/useReveal';
import styles from './FeedFilterSection.module.css';

const POINT_ICONS: Record<string, Icon> = {
  funnel: Funnel,
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
  videos: Video[];
}

export default function FeedFilterSection({ lang, kicker, title, body, points, videos }: FeedFilterSectionProps) {
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

  const mock = <Feat3Mock videos={videos} lang={lang} />;
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.section} reveal${inView ? ' in-view' : ''}`}>
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
