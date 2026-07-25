import { useTranslation } from 'react-i18next';
import { Infinity as InfinityIcon, CheckCircle, ArrowLineDown } from '@phosphor-icons/react';
import type { Video } from '../../data/videos';
import { useReveal } from '../../hooks/useReveal';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
  kicker: string;
  title: string;
  videos: Video[];
}

export default function BeforeAfter({ kicker, title, videos }: BeforeAfterProps) {
  const { t } = useTranslation();
  const feedTop = videos.slice(0, 3);
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.section} reveal${inView ? ' in-view' : ''}`}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        <div className={`${styles.panel} reveal-left`}>
          <div className={styles.panelHeader}>
            <span className={styles.panelLabel}>
              <InfinityIcon size={17} weight="bold" className={styles.beforeIcon} />
              {t('feat0.how.before.label')}
            </span>
            <span className={styles.tagBefore}>{t('feat0.how.before.tag')}</span>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.list}>
              {feedTop.map((v, i) => (
                <VideoRow key={i} video={v} />
              ))}
            </div>
            <div className={styles.loading}>
              <span className={styles.spinner} />
              <span className={styles.loadingText}>{t('feat0.how.before.loading')}</span>
            </div>
          </div>
        </div>

        <div className={[styles.panel, styles.panelActive, 'reveal-right'].join(' ')}>
          <div className={styles.panelHeader}>
            <span className={styles.panelLabel}>
              <CheckCircle size={17} weight="fill" className={styles.afterIcon} />
              {t('feat0.how.after.label')}
            </span>
            <span className={styles.tagAfter}>{t('feat0.how.after.tag')}</span>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.list}>
              {feedTop.map((v, i) => (
                <VideoRow key={i} video={v} />
              ))}
            </div>
            <div className={styles.loading}>
              <button type="button" className={styles.loadMoreBtn}>
                <ArrowLineDown size={15} weight="bold" />
                {t('feat0.mock.loadMore')}
              </button>
              <span className={styles.loadingText}>{t('feat0.how.after.caption')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoRow({ video }: { video: Video }) {
  return (
    <div className={styles.row}>
      <div className={styles.thumbWrap}>
        <img src={video.thumb} alt="" className={styles.thumb} />
        <span className={styles.duration}>{video.duration}</span>
      </div>
      <div className={styles.rowText}>
        <div className={styles.rowTitle}>{video.title}</div>
        <div className={styles.rowChannel}>{video.channel}</div>
        <div className={styles.rowMeta}>{video.meta}</div>
      </div>
    </div>
  );
}
