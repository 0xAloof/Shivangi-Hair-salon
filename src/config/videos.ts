export interface MacroVideoAsset {
  id: 'hero' | 'trustStrip' | 'serviceMenu';
  title: string;
  description: string;
  src: string;
  sources: string[];
}

export interface VideoSources {
  hero: string;
  trust: string;
  services: string;
  serviceMenu: string;
  trustStrip: string;
}

/**
 * Hardcoded working Supabase public video URLs as primary video src
 * so they play immediately on Vercel without needing .env variables or local /videos/*.mp4 paths.
 */
export const SUPABASE_HERO_VIDEO =
  'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/clipper-3d.mp4';
export const SUPABASE_TRUST_VIDEO =
  'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/razor-3d.mp4';
export const SUPABASE_SERVICES_VIDEO =
  'https://tsufahvimyzdlkdhqvnk.supabase.co/storage/v1/object/public/Videos/towel-3d.mp4';

export const MACRO_VIDEOS: Record<'hero' | 'trustStrip' | 'serviceMenu', MacroVideoAsset> = {
  hero: {
    id: 'hero',
    title: '3D Macro Brushed-Steel Clipper',
    description: '3D Macro Brushed-Steel Clipper rotating on dark reflective glass',
    src: SUPABASE_HERO_VIDEO,
    sources: [SUPABASE_HERO_VIDEO],
  },
  trustStrip: {
    id: 'trustStrip',
    title: 'Macro Fresh Single-Use Blade',
    description: 'Macro 100% Fresh Sealed Blade on dark slate with floating golden dust particles',
    src: SUPABASE_TRUST_VIDEO,
    sources: [SUPABASE_TRUST_VIDEO],
  },
  serviceMenu: {
    id: 'serviceMenu',
    title: 'Macro Steaming Folded Black Hot Towel',
    description: 'Macro Steaming Folded Black Hot Towel on dark wood grain',
    src: SUPABASE_SERVICES_VIDEO,
    sources: [SUPABASE_SERVICES_VIDEO],
  },
};

export const VIDEOS: VideoSources = {
  hero: SUPABASE_HERO_VIDEO,
  trust: SUPABASE_TRUST_VIDEO,
  services: SUPABASE_SERVICES_VIDEO,
  trustStrip: SUPABASE_TRUST_VIDEO,
  serviceMenu: SUPABASE_SERVICES_VIDEO,
};

export interface HeroSlideConfig {
  id: string;
  asset: MacroVideoAsset;
  videoUrl: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  shortLabel: string;
}

export const HERO_CAROUSEL_SLIDES: HeroSlideConfig[] = [
  {
    id: 'slide-clipper',
    asset: MACRO_VIDEOS.hero,
    videoUrl: VIDEOS.hero,
    eyebrow: "BHOPAL'S BEST MEN'S SALON · 150+ VERIFIED BHOPAL CUSTOMERS",
    headline: 'Sirf Haircut Nahi, Aapka Pura Look Upgrade Karte Hain.',
    subtext:
      'Har baar naye barber se baal kharab hone ka darr khatam. Aapke face shape ke hisaab se perfect Skin Fade aur Haircut — taaki salon se nikalte hi log notice karein.',
    shortLabel: '01 · PRECISION CUT',
  },
  {
    id: 'slide-razor',
    asset: MACRO_VIDEOS.trustStrip,
    videoUrl: VIDEOS.trust,
    eyebrow: '100% FRESH BLADE GUARANTEE · CLEAN & COMFORTABLE SHAVE',
    headline: 'Sharpest Beard Line-Up. Har Customer Ke Liye Naya Blade.',
    subtext:
      'Jaldi-baazi wale cuts ko bhool jaiye. UV-sanitized tools aur fresh single-use blade ke saath paayein ekdum sharp jawline aur clean beard styling.',
    shortLabel: '02 · FRESH BLADE BEARD',
  },
  {
    id: 'slide-towel',
    asset: MACRO_VIDEOS.serviceMenu,
    videoUrl: VIDEOS.services,
    eyebrow: 'VIP CHAIR EXPERIENCE · WALK-IN OR BOOK ON WHATSAPP',
    headline: '45 Minute Sukoon Ke. Thakan Mitao Aur Royal Look Paao.',
    subtext:
      'Garam towel steam, relaxing head massage aur premium grooming. Weekend par chairs jaldi full ho jaati hain — bina waiting ke abhi WhatsApp par apni chair book karein.',
    shortLabel: '03 · HOT TOWEL SPA',
  },
];
