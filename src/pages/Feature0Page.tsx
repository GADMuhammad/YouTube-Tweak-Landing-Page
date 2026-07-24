import { useTranslation } from 'react-i18next';
import { HourglassMedium, CursorClick, CheckCircle } from '@phosphor-icons/react';
import Hero from '../components/Hero/Hero';
import Feat0Mock from '../components/YouTubeMock/Feat0Mock';
import Problem from '../components/Problem/Problem';
import BeforeAfter from '../components/HowItWorks/BeforeAfter';
import Benefits from '../components/Benefits/Benefits';
import InstallBand from '../components/InstallBand/InstallBand';
import { getVideos } from '../data/videos';
import type { Lang } from '../App';

export default function Feature0Page({ lang }: { lang: Lang }) {
  const { t } = useTranslation();
  const videos = getVideos(lang);

  const problemItems = (t('feat0.problem.stats', { returnObjects: true }) as { figure: string; title: string; body: string }[]);
  const benefitIcons = [HourglassMedium, CursorClick, CheckCircle];
  const benefitItems = (t('feat0.benefits.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: benefitIcons[i] }),
  );

  return (
    <>
      <Hero title={t('features.0.title')} sub={t('features.0.sub')} mock={<Feat0Mock videos={videos} />} />
      <Problem kicker={t('feat0.problem.kicker')} title={t('feat0.problem.title')} items={problemItems} />
      <BeforeAfter kicker={t('feat0.how.kicker')} title={t('feat0.how.title')} videos={videos} />
      <Benefits kicker={t('feat0.benefits.kicker')} items={benefitItems} columns={3} />
      <InstallBand title={t('feat0.install.title')} sub={t('feat0.install.sub')} />
    </>
  );
}
