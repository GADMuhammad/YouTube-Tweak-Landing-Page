import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { HandPalm, Plus, GithubLogo } from "@phosphor-icons/react";
import styles from "./Hero.module.css";

const CHROME_URL = "https://chromewebstore.google.com/detail/youtube-tweak/oboblbfbeolffgmhmgkjaaamelcmncoi";
const GITHUB_URL = "https://github.com/GADMuhammad/Youtube-Tweak";

interface HeroProps {
  title: string;
  sub: string;
  mock: ReactNode;
  wideText?: boolean;
}

export default function Hero({ title, sub, mock, wideText }: HeroProps) {
  const { t } = useTranslation();

  return (
    <div className={[styles.hero, wideText ? styles.heroWide : ""].join(" ")}>
      <div className={styles.text}>
        <div className={styles.badge}>
          <HandPalm size={13} weight="fill" className={styles.badgeIcon} />
          {t("badge.chromeExtension")}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
        <div className={styles.ctas}>
          <a href={CHROME_URL} target="_blank" rel="noreferrer" className={styles.ctaPrimary}>
            <Plus size={16} weight="bold" />
            <span>{t("cta.addFree")}</span>
          </a>
          {/* <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
            <GithubLogo size={16} weight="bold" />
            <span>{t("cta.github")}</span>
          </a> */}
        </div>
      </div>
      <div className={styles.mock}>{mock}</div>
    </div>
  );
}
