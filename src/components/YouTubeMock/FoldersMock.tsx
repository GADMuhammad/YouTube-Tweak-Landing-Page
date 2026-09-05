import { useTranslation } from 'react-i18next';
import { X, LockSimple } from '@phosphor-icons/react';
import type { Lang } from '../../App';
import styles from './FoldersMock.module.css';

export default function FoldersMock({ lang }: { lang: Lang }) {
  const { t } = useTranslation();

  return (
    <div className={styles.card} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>{t('feat3.foldersMock.title')}</div>
          <div className={styles.subtitle}>{t('feat3.foldersMock.subtitle')}</div>
        </div>
        <X size={15} weight="bold" className={styles.close} />
      </div>

      <div className={styles.divider} />

      <div className={styles.signInLabel}>
        <LockSimple size={12} weight="bold" />
        {t('feat3.foldersMock.signIn')}
      </div>

      <label className={styles.fieldLabel}>{t('feat3.foldersMock.accountLabel')}</label>
      <div className={styles.accountField}>{t('feat3.foldersMock.accountValue')}</div>
      <div className={styles.accountHint}>{t('feat3.foldersMock.accountHint')}</div>

      <label className={styles.fieldLabel}>{t('feat3.foldersMock.passwordLabel')}</label>
      <div className={styles.passwordField} />

      <div className={styles.forgotRow}>
        <span className={styles.forgot}>{t('feat3.foldersMock.forgot')}</span>
      </div>

      <button type="button" className={styles.signInBtn}>
        {t('feat3.foldersMock.signInBtn')}
      </button>
    </div>
  );
}
