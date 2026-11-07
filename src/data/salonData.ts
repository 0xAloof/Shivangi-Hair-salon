import { ServiceItem, FaceShapeGuide, ReviewItem } from '../types';

export const SALON_INFO = {
  name: "Shivangi Hair Salon",
  headline: "Precision Grooming. Built for the Modern Gentleman.",
  subHeadline: "Haircuts, beard detailing, and grooming in Bhopal.",
  tagline: "The Art of Modern Precision",
  phone: "+91 9575830421",
  rawPhone: "919575830421",
  whatsAppUrl: "https://wa.me/919575830421",
  instagramHandle: "@shivangihairsalon.in",
  instagramUrl: "https://www.instagram.com/shivangihairsalon.in/",
  facebookUrl: "https://www.facebook.com/people/Shivangi-Hair-Salon/61594677009353/?rdid=rYcbsxiBq3xAj4fr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GM1K42WCV%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio",
  address: "7897+5X4, Bhensakhedi Road, near The Fitness Planet, Bhopal, MP 462030",
  plusCode: "7897+5X4 Bhopal",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7897%2B5X4,+Bhensakhedi+Road,+near+The+Fitness+Planet,+Bhopal,+MP+462030",
  schedule: {
    days: "Mon, Wed – Sun (Tuesday Closed)",
    hours: "8:30 AM – 9:30 PM",
    closedDay: "Tuesday",
  },
  rating: 4.9,
  reviewCount: 148,
  establishedYear: 2018,
};

export const TRUST_SIGNALS = [
  { icon: 'star', label: '4.9 Google Rating', sub: '148+ Verified Bhopal Reviews' },
  { icon: 'uv', label: 'UV Sterilized Tools', sub: 'Hospital-grade autoclaves' },
  { icon: 'blade', label: 'Fresh Blades', sub: '100% single-use Japanese steel' },
  { icon: 'walkin', label: 'Walk-ins Welcome', sub: 'Pre-bookings prioritized' },
];

export const SERVICES: ServiceItem[] = [
  // Hair Architecture
  {
    id: "sig-cut",
    name: "Signature Haircut & Precision Fade",
    category: "hair",
    durationMinutes: 45,
    priceMin: 350,
    priceMax: 450,
    shortDesc: "Face-structure guided scissor architecture, low or skin drop fade, scalp wash, and matte clay finish.",
    inclusions: [
      "Face-shape consultation",
      "Sterilized shear work & micro-clipper taper",
      "Botanical scalp wash",
      "Blow-dry & matte texture wax styling"
    ],
    popular: true,
  },
  {
    id: "executive-scissor",
    name: "Classic Executive Scissor Cut",
    category: "hair",
    durationMinutes: 40,
    priceMin: 300,
    priceMax: 400,
    shortDesc: "Handcrafted pure shear layering, clean sideburn taper, neck razor line, and natural pomade finish.",
    inclusions: [
      "Head anatomy consultation",
      "Point cutting & shear-over-comb texturing",
      "Neckline hot foam razor detail",
      "Rosemary cooling scalp tonic"
    ],
  },
  {
    id: "tattoo-line",
    name: "Tattoo Razor Line & Hair Art Cut",
    category: "hair",
    durationMinutes: 50,
    priceMin: 500,
    priceMax: 700,
    shortDesc: "Geometric razor parting, neckline etching, hairline detail, and custom straight-blade hair art lines.",
    inclusions: [
      "Custom stencil / freehand geometry design",
      "High-precision straight razor carving",
      "Antiseptic skin mist",
      "Full perimeter transition fade"
    ],
    popular: true,
  },

  // Beard Craft
  {
    id: "beard-detail",
    name: "Beard Detailing & Razor Line",
    category: "beard",
    durationMinutes: 30,
    priceMin: 200,
    priceMax: 300,
    shortDesc: "Straight razor outline, neckline taper, herbal hot towel hydration, and organic argan conditioning beard oil.",
    inclusions: [
      "Hot towel eucalyptus steam prep",
      "Single-use Japanese straight razor contouring",
      "Mustache scissor detailing & cheek graduation",
      "Cooling alum block & organic beard elixir"
    ],
    popular: true,
  },
  {
    id: "royal-shave",
    name: "Traditional Hot Towel Straight Razor Shave",
    category: "beard",
    durationMinutes: 35,
    priceMin: 250,
    priceMax: 350,
    shortDesc: "Triple hot towel relaxation with badger brush lathering, two-pass straight blade precision, and cold compress.",
    inclusions: [
      "Pre-shave essential oil application",
      "Warm whipped sandalwood lather",
      "Two-pass sterile straight razor finish",
      "Ice-cold witch hazel compress & aftershave balm"
    ],
  },

  // Spa Rituals
  {
    id: "scalp-spa",
    name: "Revitalizing Scalp & Hair Care Spa",
    category: "spa",
    durationMinutes: 40,
    priceMin: 600,
    priceMax: 800,
    shortDesc: "Deep detoxifying scalp therapy with micro-circulation massage, herbal steam infusion, and root strengthening serum.",
    inclusions: [
      "Micro-camera hair & scalp diagnostic",
      "Warm essential oil acupressure massage (20 mins)",
      "Hydrating steam oxygenation bath",
      "Cold-water pore closure & tonic mist"
    ],
    popular: true,
  },
  {
    id: "charcoal-detox",
    name: "Express Charcoal Face Detox & Clean-up",
    category: "spa",
    durationMinutes: 25,
    priceMin: 300,
    priceMax: 400,
    shortDesc: "Active bamboo charcoal scrub to extract pollution and dead skin cells, followed by a cool hydrating mist.",
    inclusions: [
      "Herbal facial cleanse & warm steam",
      "Gentle ultrasonic exfoliation",
      "Cooling aloe vera & mint soothing mask"
    ],
  },
  {
    id: "royal-experience",
    name: "The Royal Grooming Experience (Complete Package)",
    category: "spa",
    durationMinutes: 90,
    priceMin: 1200,
    priceMax: 1500,
    shortDesc: "The complete studio service: Signature Cut, Razor Beard Detail, Scalp Spa Therapy, and Express Face Charcoal Clean-up.",
    inclusions: [
      "All 4 core services included",
      "Extended 25-minute neck & shoulder massage",
      "Complimentary beverage & hair care consultation",
      "Priority chair reservation"
    ],
    popular: true,
  }
];

export interface QuizOption {
  id: string;
  label: string;
  description: string;
}

export const QUIZ_QUESTIONS = {
  faceShapes: [
    { id: 'square', label: 'Square Jawline', description: 'Bold angular jaw, wide cheekbones & uniform forehead width' },
    { id: 'oval', label: 'Oval Silhouette', description: 'Balanced symmetry, forehead slightly wider than rounded jaw' },
    { id: 'round', label: 'Round Contour', description: 'Soft curved angles with cheekbones matching face length' },
    { id: 'diamond', label: 'Diamond / Angular', description: 'Prominent wide cheekbones with narrow chin and temples' },
  ],
  hairTypes: [
    { id: 'straight', label: 'Straight & Fine', description: 'Grows flat, benefits from textured volume & matte finish' },
    { id: 'wavy', label: 'Wavy / Medium Thick', description: 'Natural movement, holds textured layers & slick tapers' },
    { id: 'coarse', label: 'Curly or Coarse', description: 'High density, looks sharp with low/mid skin fades' },
    { id: 'receding', label: 'High Forehead / Receding', description: 'Engineered crops and textured micro-fringes' },
  ],
  vibes: [
    { id: 'executive', label: 'Sharp Executive', description: 'Polished, clean scissor taper, office & boardroom ready' },
    { id: 'streetwear', label: 'Textured Modern', description: 'Drop fade, choppy French crop, effortless matte texture' },
    { id: 'classic', label: 'Classic Gentleman', description: 'Side part, slick comb-over, sculpted beard line' },
    { id: 'edgy', label: 'Artisan Razor Edge', description: 'Skin fade with geometric razor parting & sharp goatee' },
  ]
};

export interface RecommendationResult {
  title: string;
  fadeType: string;
  beardAdvice: string;
  stylingTip: string;
  matchScore: string;
}

export function computeQuizRecommendation(
  face: string,
  hair: string,
  vibe: string
): RecommendationResult {
  if (vibe === 'streetwear') {
    return {
      title: 'French Textured Crop with Drop Skin Fade',
      fadeType: 'Low-to-Mid Drop Skin Fade with razor nape outline',
      beardAdvice: 'Trimmed 3mm stubble with razor-sharp cheek line',
      stylingTip: 'Matte texture styling powder on damp hair with finger separation.',
      matchScore: '98% Geometric Match',
    };
  }

  if (vibe === 'executive') {
    return {
      title: 'Executive Low Taper with Scissor-Sculpted Crown',
      fadeType: 'Low Scissor Taper with zero-bulk temple transition',
      beardAdvice: 'Full classic corporate beard faded smoothly into sideburns',
      stylingTip: 'Water-soluble light sheen pomade blown back with round brush.',
      matchScore: '96% Geometric Match',
    };
  }

  if (vibe === 'edgy') {
    return {
      title: 'High Razor Skin Fade with Geometric Hair Art Line',
      fadeType: 'High Bald Fade with surgically clean parting groove',
      beardAdvice: 'Crisp straight-edge angular goatee with detached mustache',
      stylingTip: 'Strong hold matte clay to keep crown defined all day.',
      matchScore: '97% Geometric Match',
    };
  }

  // default / classic
  return {
    title: 'Modern Classic Side Part with Taper Fade',
    fadeType: 'Mid Taper Fade preserving weight on the parietal ridge',
    beardAdvice: 'Natural cheek graduation with hot towel straight razor neck clean-up',
    stylingTip: 'Texturizing sea salt spray followed by medium-hold paste.',
    matchScore: '99% Geometric Match',
  };
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Aashif Khan",
    rating: 5,
    reviewDate: "2 weeks ago",
    serviceDone: "Signature Haircut & Beard Shaping",
    comment: "Incredible attention to detail. The master barber actually takes time to analyze your face structure and hair growth direction before picking up a clipper. Best grooming experience in Bhopal.",
    badge: "Verified Regular",
  },
  {
    id: "rev-2",
    clientName: "Anil",
    rating: 5,
    reviewDate: "1 month ago",
    serviceDone: "Skin Drop Fade & Hot Towel Razor Detail",
    comment: "Best fade and razor beard line-up in Bhensakhedi. The eucalyptus hot towel ritual and straight razor precision are completely unmatched anywhere near The Fitness Planet.",
    badge: "Verified Local Guide",
  },
  {
    id: "rev-3",
    clientName: "Mannu",
    rating: 5,
    reviewDate: "3 weeks ago",
    serviceDone: "Scalp Spa & Executive Cut",
    comment: "Clean, hygienic, premium equipment, fresh disposable capes, and zero rush. Truly a masterclass in modern men's grooming. You get full undivided attention for 45 minutes.",
    badge: "Verified Client",
  },
  {
    id: "rev-4",
    clientName: "Raju Bhai",
    rating: 5,
    reviewDate: "2 months ago",
    serviceDone: "The Royal Grooming Experience",
    comment: "Shivangi Salon is the gold standard around Bhopal. Precision razor cuts every single time with zero irritation. Book in advance on WhatsApp because chairs fill up fast!",
    badge: "Verified Client",
  }
];

export const LOOKBOOK_ITEMS = [
  {
    id: "look-1",
    title: "Precision Textured Crop & Drop Fade",
    category: "Skin Fade",
    desc: "Structured French crop with matte micro-texture and skin-drop perimeter.",
    image: "/crop_fade.jpg",
  },
  {
    id: "look-2",
    title: "Razor-Etched Beard Architecture",
    category: "Beard Detailing",
    desc: "Straight-razor cheek gradient with hot towel conditioning and chin symmetry.",
    image: "/beard_sculpt.jpg",
  },
  {
    id: "look-3",
    title: "Hot Towel Straight Razor Detailing",
    category: "Hot Towel Shave",
    desc: "Precise straight razor detailing with balanced weight distribution.",
    image: "/razor_shave.jpg",
  },
  {
    id: "look-4",
    title: "Studio Sanctuary Interior",
    category: "Studio",
    desc: "Matte obsidian studio equipped with autoclave sanitizers.",
    image: "/interior_luxury.jpg",
  }
];

export interface ShowcaseSlide {
  id: string;
  title: string;
  tag: string;
  image: string;
}

export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "slide-1",
    title: "Shivangi Studio Station",
    tag: "Studio Ambience",
    image: "/salon_station.jpg",
  },
  {
    id: "slide-2",
    title: "Dedicated Barber Chairs",
    tag: "Sanctuary",
    image: "/salon_chair.jpg",
  },
  {
    id: "slide-3",
    title: "The Master Craftsman",
    tag: "Lead Barber",
    image: "/barber.jpg",
  },
  {
    id: "slide-4",
    title: "Drop Fade & Textured Crop",
    tag: "Hair Architecture",
    image: "/crop_fade.jpg",
  },
  {
    id: "slide-5",
    title: "Razor-Etched Beard Silhouette",
    tag: "Beard Craft",
    image: "/beard_sculpt.jpg",
  },
  {
    id: "slide-6",
    title: "Hot Towel Straight Razor Ritual",
    tag: "Spa Ritual",
    image: "/razor_shave.jpg",
  },
  {
    id: "slide-7",
    title: "Precision Sanctuary Interior",
    tag: "Bhopal Studio",
    image: "/interior_luxury.jpg",
  },
  {
    id: "slide-8",
    title: "Geometric Hair Art & Parting",
    tag: "Tattoo Razor Lines",
    image: "/src/assets/images/hero_barber_craft_1794039371325.jpg",
  },
  {
    id: "slide-9",
    title: "Pure Shear Scissor Layering",
    tag: "Master Craft",
    image: "/src/assets/images/barber_portrait_master_1794039371557.jpg",
  },
];
