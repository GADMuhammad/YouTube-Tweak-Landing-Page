import {
  HandPalm,
  CalendarCheck,
  MagnifyingGlass,
  Funnel,
  EyeSlash,
  type Icon,
} from '@phosphor-icons/react';

export interface FeatureMeta {
  icon: Icon;
  disabled: boolean;
}

export const FEATURES: FeatureMeta[] = [
  { icon: HandPalm, disabled: false },
  { icon: CalendarCheck, disabled: false },
  { icon: MagnifyingGlass, disabled: false },
  { icon: Funnel, disabled: false },
  { icon: EyeSlash, disabled: true },
];
