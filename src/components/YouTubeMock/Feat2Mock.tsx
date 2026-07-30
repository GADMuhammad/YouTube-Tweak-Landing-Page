import { useTranslation } from 'react-i18next';
import { MagnifyingGlass, ArrowElbowDownLeft } from '@phosphor-icons/react';
import BrowserChrome from './BrowserChrome';
import styles from './Feat2Mock.module.css';

export default function Feat2Mock() {
  const { t } = useTranslation();
  const suggestions = t('feat2.mock.suggestions', { returnObjects: true }) as string[];

  return (
    <BrowserChrome>
      <div className={styles.body}>
        <div className={styles.searchRow}>
          <MagnifyingGlass size={16} weight="bold" className={styles.searchIcon} />
          <span className={styles.query}>
            {t('feat2.mock.query')}
            <span className={styles.caret} />
          </span>
          <span className={styles.enterKey}>
            <ArrowElbowDownLeft size={13} weight="bold" />
          </span>
        </div>

        <div className={styles.list}>
          {suggestions.map((s, i) => (
            <div className={styles.row} key={i}>
              <MagnifyingGlass size={14} weight="regular" className={styles.rowIcon} />
              <span className={styles.rowText}>{s}</span>
              <span className={styles.shortcut}>⌘{i + 1}</span>
            </div>
          ))}
        </div>

        <div className={styles.caption}>{t('feat2.mock.caption')}</div>
      </div>
    </BrowserChrome>
  );
}
