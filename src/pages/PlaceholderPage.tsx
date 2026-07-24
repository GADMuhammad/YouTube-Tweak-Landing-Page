import { useTranslation } from 'react-i18next';
import { Sparkle } from '@phosphor-icons/react';
import styles from './PlaceholderPage.module.css';

export default function PlaceholderPage({ feat }: { feat: 2 | 3 }) {
  const { t } = useTranslation();

  return (
    <div className={styles.section}>
      <span className={styles.tag}>
        <Sparkle size={14} weight="bold" />
        {t(`features.${feat}.tab`)}
      </span>
      <h2 className={styles.title}>{t(`features.${feat}.title`)}</h2>
      <p className={styles.body}>{t('placeholder.body')}</p>
    </div>
  );
}
