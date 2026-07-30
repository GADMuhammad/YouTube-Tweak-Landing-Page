import { useTranslation } from 'react-i18next';
import { HandPalm, MagnifyingGlass } from '@phosphor-icons/react';
import type { Lang } from '../../App';
import styles from './QuickSearchPopup.module.css';

export default function QuickSearchPopup({ lang }: { lang: Lang }) {
  const { t } = useTranslation();
  const innerDir = lang === 'ar' ? 'rtl' : undefined;
  const suggestions = t('feat2.mock.suggestions', { returnObjects: true }) as string[];

  return (
    <div className={styles.popup} dir="ltr">
      <div className={styles.header} dir={innerDir}>
        <div className={styles.logo}>
          <HandPalm size={12} weight="bold" color="#fff" />
        </div>
        <span className={styles.wordmark}>{t('meta.extName')}</span>
      </div>

      <div className={styles.tabbar} dir={innerDir}>
        <span className={[styles.tab, styles.tabActive].join(' ')}>{t('popup.tabs.quickSearch')}</span>
        <span className={styles.tab}>{t('popup.tabs.date')}</span>
        <span className={styles.tab}>{t('popup.tabs.scroll')}</span>
      </div>

      <div className={styles.card} dir={innerDir}>
        <div className={styles.searchRow}>
          <MagnifyingGlass size={14} weight="bold" className={styles.searchIcon} />
          <span className={styles.query}>{t('feat2.mock.query')}</span>
        </div>

        <div className={styles.list}>
          {suggestions.map((s, i) => (
            <div className={styles.row} key={i}>
              <MagnifyingGlass size={13} weight="regular" className={styles.rowIcon} />
              <span className={styles.rowText}>{s}</span>
              <span className={styles.shortcut}>⌘{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
