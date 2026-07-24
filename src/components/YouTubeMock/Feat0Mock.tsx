import { useTranslation } from 'react-i18next';
import { ArrowLineDown } from '@phosphor-icons/react';
import type { Video } from '../../data/videos';
import BrowserChrome from './BrowserChrome';
import styles from './Feat0Mock.module.css';

interface Feat0MockProps {
  videos: Video[];
}

export default function Feat0Mock({ videos }: Feat0MockProps) {
  const { t } = useTranslation();
  const feedTop = videos.slice(0, 3);

  return (
    <BrowserChrome>
      <div className={styles.body}>
        <div className={styles.grid}>
          {feedTop.map((v, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.thumbWrap}>
                <img src={v.thumb} alt="" className={styles.thumb} />
                <span className={styles.duration}>{v.duration}</span>
              </div>
              <div className={styles.title}>{v.title}</div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.loadMore}>
            <ArrowLineDown size={16} weight="bold" />
            {t('feat0.mock.loadMore')}
          </button>
          <span className={styles.caption}>{t('feat0.mock.caption')}</span>
        </div>
      </div>
    </BrowserChrome>
  );
}
