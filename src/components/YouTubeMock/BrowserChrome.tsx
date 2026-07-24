import type { ReactNode } from 'react';
import { LockSimple } from '@phosphor-icons/react';
import styles from './BrowserChrome.module.css';

export default function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className={styles.frame}>
      <div className={styles.titlebar} dir="ltr">
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.address}>
          <LockSimple size={11} weight="bold" />
          youtube.com
        </div>
      </div>
      {children}
    </div>
  );
}
