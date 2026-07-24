import { useTranslation } from 'react-i18next';
import { ClockCountdown, CalendarCheck, ArrowDown } from '@phosphor-icons/react';
import type { Video } from '../../data/videos';
import BrowserChrome from './BrowserChrome';
import styles from './Feat1Mock.module.css';

interface Feat1MockProps {
  video: Video;
}

export default function Feat1Mock({ video }: Feat1MockProps) {
  const { t } = useTranslation();

  return (
    <BrowserChrome>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.thumbWrap}>
            <img src={video.thumb} alt="" className={styles.thumb} />
            <span className={styles.duration}>{video.duration}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.badgeRelative}>
              <ClockCountdown size={12} weight="bold" />
              {t('feat1.mock.relativeDate')}
            </div>
            <div className={styles.title}>{video.title}</div>
            <div className={styles.meta}>
              {t('feat1.mock.views')} · <span className={styles.metaValue}>{t('feat1.mock.relativeValue')}</span>
            </div>
          </div>
        </div>

        <div className={styles.arrow}>
          <ArrowDown size={18} weight="bold" />
        </div>

        <div className={[styles.row, styles.rowActive].join(' ')}>
          <div className={styles.thumbWrap}>
            <img src={video.thumb} alt="" className={styles.thumb} />
            <span className={styles.duration}>{video.duration}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.badgeActual}>
              <CalendarCheck size={12} weight="bold" />
              {t('feat1.mock.actualDate')}
            </div>
            <div className={styles.title}>{video.title}</div>
            <div className={styles.meta}>
              {t('feat1.mock.views')} · <span className={styles.metaValueActive}>{t('feat1.mock.actualValue')}</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}
