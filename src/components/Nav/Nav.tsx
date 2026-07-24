import { useTranslation } from 'react-i18next';
import { HandPalm, Translate, Plus } from '@phosphor-icons/react';
import type { Lang } from '../../App';
import styles from './Nav.module.css';

interface NavProps {
  lang: Lang;
  onToggleLang: () => void;
}

const CHROME_URL = '#';

export default function Nav({ onToggleLang }: NavProps) {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <HandPalm size={18} weight="bold" color="#fff" />
        </div>
        <span className={styles.wordmark}>{t('meta.extName')}</span>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.langBtn} onClick={onToggleLang}>
          <Translate size={15} weight="bold" className={styles.langIcon} />
          {t('nav.otherLangLabel')}
        </button>
        <a href={CHROME_URL} className={styles.chromeBtn}>
          <Plus size={15} weight="bold" />
          {t('nav.addToChrome')}
        </a>
      </div>
    </nav>
  );
}
