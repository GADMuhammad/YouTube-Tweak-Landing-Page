import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_STORAGE_KEY } from './i18n';
import Nav from './components/Nav/Nav';
import FeatureSwitcher from './components/FeatureSwitcher/FeatureSwitcher';
import Footer from './components/Footer/Footer';
import Feature0Page from './pages/Feature0Page';
import Feature1Page from './pages/Feature1Page';
import Feature2Page from './pages/Feature2Page';
import Feature3Page from './pages/Feature3Page';
import PlaceholderPage from './pages/PlaceholderPage';
import styles from './App.module.css';

export type Lang = 'en' | 'ar';

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Lang>(() => (i18n.language === 'ar' ? 'ar' : 'en'));
  const [feat, setFeat] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang, i18n]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Nav lang={lang} onToggleLang={toggleLang} />
        <FeatureSwitcher feat={feat} onSelect={setFeat} />
        {feat === 0 && <Feature0Page lang={lang} />}
        {feat === 1 && <Feature1Page lang={lang} />}
        {feat === 2 && <Feature2Page lang={lang} />}
        {feat === 3 && <Feature3Page lang={lang} />}
        {feat === 4 && <PlaceholderPage feat={feat} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
