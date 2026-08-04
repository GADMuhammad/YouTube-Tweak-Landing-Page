import { useTranslation } from 'react-i18next';
import { Shuffle, Timer, EyeSlash, Funnel, Devices, MoonStars, Lightning } from '@phosphor-icons/react';
import Hero from '../components/Hero/Hero';
import Feat3Mock from '../components/YouTubeMock/Feat3Mock';
import Problem from '../components/Problem/Problem';
import FeedFilterSection from '../components/HowItWorks/FeedFilterSection';
import Benefits from '../components/Benefits/Benefits';
import InstallBand from '../components/InstallBand/InstallBand';
import { getVideos } from '../data/videos';
import type { Lang } from '../App';

export default function Feature3Page({ lang }: { lang: Lang }) {
  const { t } = useTranslation();
  const videos = getVideos(lang);

  const problemIcons = [Shuffle, Timer, EyeSlash];
  const problemItems = (t('feat3.problem.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: problemIcons[i] }),
  );

  const points = t('feat3.how.points', { returnObjects: true }) as { icon: string; title: string; body: string }[];

  const benefitIcons = [Funnel, Devices, MoonStars, Lightning];
  const benefitItems = (t('feat3.benefits.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: benefitIcons[i] }),
  );

  return (
    <>
      <Hero title={t('features.3.title')} sub={t('features.3.sub')} mock={<Feat3Mock videos={videos} lang={lang} />} />
      <Problem kicker={t('feat3.problem.kicker')} title={t('feat3.problem.title')} items={problemItems} />
      <FeedFilterSection
        lang={lang}
        kicker={t('feat3.how.kicker')}
        title={t('feat3.how.title')}
        body={t('feat3.how.body')}
        points={points}
        videos={videos}
      />
      <Benefits kicker={t('feat3.benefits.kicker')} items={benefitItems} columns={4} />
      <InstallBand title={t('feat3.install.title')} sub={t('feat3.install.sub')} />
    </>
  );
}
