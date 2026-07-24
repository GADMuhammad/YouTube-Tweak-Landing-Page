import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

export const LANG_STORAGE_KEY = 'yt-tweak-lang';

function getInitialLang(): 'en' | 'ar' {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  return stored === 'ar' || stored === 'en' ? stored : 'en';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getInitialLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
