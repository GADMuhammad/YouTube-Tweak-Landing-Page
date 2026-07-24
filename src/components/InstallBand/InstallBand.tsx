import { useTranslation } from 'react-i18next';
import { Plus, GithubLogo } from '@phosphor-icons/react';
import styles from './InstallBand.module.css';

const CHROME_URL = '#';
const GITHUB_URL = 'https://github.com/GADMuhammad/Youtube-Tweak';

interface InstallBandProps {
  title: string;
  sub: string;
}

export default function InstallBand({ title, sub }: InstallBandProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.band}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.sub}>{sub}</p>
      <div className={styles.ctas}>
        <a href={CHROME_URL} className={styles.ctaPrimary}>
          <Plus size={16} weight="bold" />
          <span>{t('cta.addFree')}</span>
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
          <GithubLogo size={16} weight="bold" />
          <span>{t('cta.github')}</span>
        </a>
      </div>
    </div>
  );
}
