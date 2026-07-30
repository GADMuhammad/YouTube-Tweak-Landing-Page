import { useTranslation } from 'react-i18next';
import { SignOut, ArrowsClockwise, MagnetStraight, MagnifyingGlass, Lightning, Keyboard, CursorClick } from '@phosphor-icons/react';
import Hero from '../components/Hero/Hero';
import Feat2Mock from '../components/YouTubeMock/Feat2Mock';
import Problem from '../components/Problem/Problem';
import QuickSearchSection from '../components/HowItWorks/QuickSearchSection';
import Benefits from '../components/Benefits/Benefits';
import InstallBand from '../components/InstallBand/InstallBand';
import type { Lang } from '../App';

export default function Feature2Page({ lang }: { lang: Lang }) {
  const { t } = useTranslation();

  const problemIcons = [SignOut, ArrowsClockwise, MagnetStraight];
  const problemItems = (t('feat2.problem.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: problemIcons[i] }),
  );

  const points = t('feat2.how.points', { returnObjects: true }) as { icon: string; title: string; body: string }[];

  const benefitIcons = [MagnifyingGlass, Lightning, Keyboard, CursorClick];
  const benefitItems = (t('feat2.benefits.items', { returnObjects: true }) as { title: string; body: string }[]).map(
    (item, i) => ({ ...item, icon: benefitIcons[i] }),
  );

  return (
    <>
      <Hero title={t('features.2.title')} sub={t('features.2.sub')} mock={<Feat2Mock />} />
      <Problem kicker={t('feat2.problem.kicker')} title={t('feat2.problem.title')} items={problemItems} />
      <QuickSearchSection
        lang={lang}
        kicker={t('feat2.how.kicker')}
        title={t('feat2.how.title')}
        body={t('feat2.how.body')}
        points={points}
      />
      <Benefits kicker={t('feat2.benefits.kicker')} items={benefitItems} columns={4} />
      <InstallBand title={t('feat2.install.title')} sub={t('feat2.install.sub')} />
    </>
  );
}
