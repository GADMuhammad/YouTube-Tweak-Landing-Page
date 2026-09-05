import type { Icon } from '@phosphor-icons/react';
import styles from './Benefits.module.css';

export interface BenefitItem {
  icon: Icon;
  title: string;
  body: string;
}

interface BenefitsProps {
  kicker: string;
  items: BenefitItem[];
  columns?: 3 | 4;
}

export default function Benefits({ kicker, items, columns = 3 }: BenefitsProps) {
  return (
    <div className={`${styles.section} reveal`}>
      <span className={styles.kicker}>{kicker}</span>
      <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="reveal-item">
              <Icon size={26} weight="fill" className={styles.icon} />
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemBody}>{item.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
