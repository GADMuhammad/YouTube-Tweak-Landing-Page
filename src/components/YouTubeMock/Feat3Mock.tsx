import { useTranslation } from 'react-i18next';
import type { Video } from '../../data/videos';
import type { Lang } from '../../App';
import BrowserChrome from './BrowserChrome';
import styles from './Feat3Mock.module.css';

interface Feat3MockProps {
  videos: Video[];
  lang: Lang;
}

export default function Feat3Mock({ videos, lang }: Feat3MockProps) {
  const { t } = useTranslation();
  const feedTop = videos.slice(0, 4);

  return (
    <BrowserChrome>
      <div className={styles.body} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className={styles.pillRow}>
          <div className={styles.pills}>
            <span className={[styles.pill, styles.pillActive].join(' ')}>{t('feat3.mock.videosTab')}</span>
            <span className={styles.pill}>{t('feat3.mock.shortsTab')}</span>
          </div>
          <span className={styles.allSubs}>{t('feat3.mock.allSubs')}</span>
        </div>

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

        <div className={styles.caption}>{t('feat3.mock.caption')}</div>
      </div>
    </BrowserChrome>
  );
}
