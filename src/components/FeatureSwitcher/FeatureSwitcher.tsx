import { useTranslation } from 'react-i18next';
import { LockSimple } from '@phosphor-icons/react';
import { FEATURES } from '../../data/features';
import styles from './FeatureSwitcher.module.css';

interface FeatureSwitcherProps {
  feat: 0 | 1 | 2 | 3;
  onSelect: (feat: 0 | 1 | 2 | 3) => void;
}

export default function FeatureSwitcher({ feat, onSelect }: FeatureSwitcherProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <span className={styles.kicker}>{t('switcher.kicker')}</span>
      <div className={styles.tabs}>
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          const active = i === feat;
          return (
            <button
              key={i}
              type="button"
              disabled={f.disabled}
              onClick={() => !f.disabled && onSelect(i as 0 | 1 | 2 | 3)}
              className={[
                styles.tab,
                active ? styles.active : '',
                f.disabled ? styles.disabled : '',
              ].join(' ')}
            >
              <Icon size={16} weight="bold" />
              {t(`features.${i}.tab`)}
              {f.disabled && (
                <>
                  <LockSimple size={13} weight="bold" className={styles.lock} />
                  <span className={styles.tooltip}>
                    {t('switcher.comingSoon')}
                    <span className={styles.tooltipArrow} />
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
