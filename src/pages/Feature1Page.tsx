import { useTranslation } from 'react-i18next';
import { ClockCountdown, CalendarX, Scales, CalendarCheck, SlidersHorizontal, MoonStars, Translate } from '@phosphor-icons/react';
import Hero from '../components/Hero/Hero';
import Feat1Mock from '../components/YouTubeMock/Feat1Mock';
import Problem from '../components/Problem/Problem';
import DatePopupSection from '../components/HowItWorks/DatePopupSection';
import Benefits from '../components/Benefits/Benefits';
import InstallBand from '../components/InstallBand/InstallBand';
import { getVideos } from '../data/videos';
import type { Lang } from '../App';

export default function Feature1Page({ lang }: { lang: Lang }) {
  const { t } = useTranslation();
  const videos = getVideos(lang);
  const dateVid = videos[0];

  const problemIcons = [ClockCountdown, CalendarX, Scales];
  const problemItems = (t('feat1.problem.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: problemIcons[i] }),
  );

  const points = t('feat1.how.points', { returnObjects: true }) as { icon: string; title: string; body: string }[];

  const benefitIcons = [CalendarCheck, SlidersHorizontal, MoonStars, Translate];
  const benefitItems = (t('feat1.benefits.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: benefitIcons[i] }),
  );

  return (
    <>
      <Hero title={t('features.1.title')} sub={t('features.1.sub')} mock={<Feat1Mock video={dateVid} />} />
      <Problem kicker={t('feat1.problem.kicker')} title={t('feat1.problem.title')} items={problemItems} />
      <DatePopupSection
        lang={lang}
        kicker={t('feat1.how.kicker')}
        title={t('feat1.how.title')}
        body={t('feat1.how.body')}
        points={points}
      />
      <Benefits kicker={t('feat1.benefits.kicker')} items={benefitItems} columns={4} />
      <InstallBand title={t('feat1.install.title')} sub={t('feat1.install.sub')} />
    </>
  );
}
