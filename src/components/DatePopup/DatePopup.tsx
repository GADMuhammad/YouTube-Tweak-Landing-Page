import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_DATE_CFG, formatSampleDate, type DateCfg } from './dateFormat';
import styles from './DatePopup.module.css';

type GroupKey = keyof DateCfg;

interface Option {
  value: string;
  label?: string;
  labelKey?: string;
  translated: boolean;
}

interface Group {
  key: GroupKey;
  labelKey: string;
  options: Option[];
}

const GROUPS: Group[] = [
  {
    key: 'calendar',
    labelKey: 'popup.groups.calendar',
    options: [
      { value: 'gregory', labelKey: 'popup.options.gregory', translated: true },
      { value: 'islamic', labelKey: 'popup.options.islamic', translated: true },
    ],
  },
  {
    key: 'weekday',
    labelKey: 'popup.groups.weekday',
    options: [
      { value: 'long', label: 'long', translated: false },
      { value: 'narrow', label: 'narrow', translated: false },
      { value: 'short', label: 'short', translated: false },
      { value: 'none', labelKey: 'popup.options.none', translated: true },
    ],
  },
  {
    key: 'day',
    labelKey: 'popup.groups.day',
    options: [
      { value: '2-digit', label: '2-digit', translated: false },
      { value: 'numeric', label: 'numeric', translated: false },
    ],
  },
  {
    key: 'month',
    labelKey: 'popup.groups.month',
    options: [
      { value: '2-digit', label: '2-digit', translated: false },
      { value: 'long', label: 'long', translated: false },
      { value: 'narrow', label: 'narrow', translated: false },
      { value: 'numeric', label: 'numeric', translated: false },
      { value: 'short', label: 'short', translated: false },
    ],
  },
  {
    key: 'year',
    labelKey: 'popup.groups.year',
    options: [
      { value: '2-digit', label: '2-digit', translated: false },
      { value: 'numeric', label: 'numeric', translated: false },
    ],
  },
];

export default function DatePopup({ lang }: { lang: 'en' | 'ar' }) {
  const { t } = useTranslation();
  const [cfg, setCfg] = useState<DateCfg>(DEFAULT_DATE_CFG);
  const innerDir = lang === 'ar' ? 'rtl' : undefined;

  const previewAr = useMemo(() => formatSampleDate(cfg, 'ar'), [cfg]);
  const previewEn = useMemo(() => formatSampleDate(cfg, 'en-GB'), [cfg]);

  return (
    <div className={styles.popup} dir="ltr">
      <div className={styles.tabbar} dir={innerDir}>
        <span className={[styles.tab, styles.tabActive].join(' ')}>{t('popup.tabs.date')}</span>
        <span className={styles.tab}>{t('popup.tabs.scroll')}</span>
        <span className={styles.tab}>{t('popup.tabs.support')}</span>
      </div>
      <div className={styles.card} dir={innerDir}>
        {GROUPS.map((group) => (
          <div key={group.key}>
            <div className={styles.groupLabel}>{t(group.labelKey)}</div>
            <div className={styles.chipRow}>
              {group.options.map((opt) => {
                const active = cfg[group.key] === opt.value;
                const label = opt.translated ? t(opt.labelKey!) : opt.label;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setCfg((c) => ({ ...c, [group.key]: opt.value }))}
                    className={[
                      styles.chip,
                      active ? styles.chipActive : '',
                      opt.translated ? styles.chipTranslated : styles.chipToken,
                    ].join(' ')}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className={styles.divider} />

        <div className={styles.previewLabel}>{t('popup.preview.label')}</div>
        <div className={styles.previewRow}>
          <span className={styles.previewTag}>{t('popup.preview.arabic')}</span>
          <span className={styles.previewValueAr}>{previewAr}</span>
        </div>
        <div className={styles.previewRow}>
          <span className={styles.previewTag}>{t('popup.preview.english')}</span>
          <span className={styles.previewValueEn} dir="ltr">
            {previewEn}
          </span>
        </div>
      </div>
    </div>
  );
}
