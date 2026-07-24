import { useTranslation } from 'react-i18next';
import { HandPalm } from '@phosphor-icons/react';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <HandPalm size={12} weight="bold" color="#fff" />
        </div>
        <span className={styles.wordmark}>{t('meta.extName')}</span>
      </div>
      <span>{t('footer.tagline')}</span>
    </div>
  );
}
