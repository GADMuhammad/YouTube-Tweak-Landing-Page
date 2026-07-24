export interface Video {
  title: string;
  channel: string;
  duration: string;
  meta: string;
  thumb: string;
  avatar: string;
}

export const videosEn: Video[] = [
  {
    title: 'Success Is Hard Until You Build Systems Like This',
    channel: 'Ali Abdaal',
    duration: '25:56',
    meta: '1.3M views · 19 Feb 2026',
    thumb: '/English version/vid-systems.png',
    avatar: '/English version/ali-avatar.png',
  },
  {
    title: "What we can learn from Cursor's SQLite Rust experiment",
    channel: 'Maximilian Schwarzmüller',
    duration: '32:24',
    meta: '4.1K views · 21 Jul 2026',
    thumb: '/English version/vid-future.png',
    avatar: '/English version/max-avatar.png',
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp - Promo Video',
    channel: 'Jonas Schmedtmann',
    duration: '2:56',
    meta: '38K views · 26 Jun 2019',
    thumb: '/English version/vid-node.png',
    avatar: '/English version/jonas-avatar.png',
  },
  {
    title: 'Harvard CS50 (2026) – Full Computer Science University Course',
    channel: 'freeCodeCamp.org',
    duration: '24:29:14',
    meta: '901K views · 5 Feb 2026',
    thumb: '/English version/vid-cs50.png',
    avatar: '/English version/fcc-avatar.png',
  },
  {
    title: 'Register at Zad Academy | Shaykh Assim Al-Hakeem, Shaykh Fariq Zakir Naik & Shaykh Uthman Ibn Farooq',
    channel: 'Zad Academy - English',
    duration: '2:24',
    meta: '9K views · 22 Jun 2026',
    thumb: '/English version/vid-zad.png',
    avatar: '/English version/zad-avatar.png',
  },
  {
    title: "The Ultimate Beginner's Guide to Claude Code",
    channel: 'Ali Abdaal',
    duration: '1:06:47',
    meta: '306K views · 18 Apr 2026',
    thumb: '/English version/vid-claude.png',
    avatar: '/English version/ali-avatar.png',
  },
];

export const videosAr: Video[] = [
  {
    title: 'كيف ننجو في عصر التفاهة | بودكاست مع علي محمد علي',
    channel: 'دروس أونلاين',
    duration: '3:36:45',
    meta: '٧٩٧ ألف مشاهدة · ١٢ مايو ٢٠٢٥',
    thumb: '/Arabic version/ar-vid-tafaha.png',
    avatar: '/Arabic version/ar-avatar-doroos.png',
  },
  {
    title: 'أنت لست سيئًا أو منافقًا | حول التعامل مع الذنوب والانتكاسات',
    channel: 'لطفي أحمد الطوخي',
    duration: '3:28:40',
    meta: '٨.٨ ألف مشاهدة · ٥ يناير ٢٠٢٦',
    thumb: '/Arabic version/ar-vid-zonoub.png',
    avatar: '/Arabic version/ar-avatar-toukhy.png',
  },
  {
    title: 'اسرار محدش هيقولك على Claude Code',
    channel: 'Fathy & Abusrea - فتحي و أبوسريع',
    duration: '9:33',
    meta: '٢٦ ألف مشاهدة · ١٢ يناير ٢٠٢٦',
    thumb: '/Arabic version/ar-vid-claude.png',
    avatar: '/Arabic version/ar-avatar-fathy.png',
  },
  {
    title: 'علي وكتاب - تبسيط الحياة ( التقليلية - التقلل - مينماليزم )',
    channel: 'Ali Muhammad Ali',
    duration: '20:06',
    meta: '٥٣٤ ألف مشاهدة · ٢٠ يناير ٢٠١٩',
    thumb: '/Arabic version/ar-vid-tabseet.png',
    avatar: '/Arabic version/ar-avatar-alimuhammad.png',
  },
  {
    title: 'فاهم ٨٦ | سلسلة رحلة الخلود - الموت | مع د. أحمد العربي',
    channel: 'فاهم بودكاست',
    duration: '1:54:09',
    meta: '٢٩٨ ألف مشاهدة · ١٠ يوليو ٢٠٢٦',
    thumb: '/Arabic version/ar-vid-fahem.png',
    avatar: '/Arabic version/ar-avatar-fahem.png',
  },
  {
    title: 'هم فين و إحنا فين!!',
    channel: 'Yasser Mamdouh',
    duration: '5:32',
    meta: '٢١٧ ألف مشاهدة · ١٨ مارس ٢٠٢٢',
    thumb: '/Arabic version/ar-vid-hom-v2.png',
    avatar: '/Arabic version/ar-avatar-yasser.png',
  },
];

export function getVideos(lang: 'en' | 'ar'): Video[] {
  return lang === 'ar' ? videosAr : videosEn;
}
