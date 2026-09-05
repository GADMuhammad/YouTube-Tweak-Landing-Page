import type { Icon } from '@phosphor-icons/react';
import styles from './Problem.module.css';

export interface ProblemItem {
  figure?: string;
  icon?: Icon;
  title: string;
  body: string;
}

interface ProblemProps {
  kicker: string;
  title: string;
  items: ProblemItem[];
}

export default function Problem({ kicker, title, items }: ProblemProps) {
  return (
    <div className={`${styles.section} reveal`}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="reveal-item">
              {item.figure && <div className={styles.figure}>{item.figure}</div>}
              {Icon && <Icon size={30} weight="bold" className={styles.icon} />}
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemBody}>{item.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
