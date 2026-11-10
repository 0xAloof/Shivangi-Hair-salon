import { ServiceItem, ReviewItem } from '../types';

export const SALON_INFO = {
  name: "Shivangi Hair Salon",
  headline: "Sirf Haircut Nahi, Aapka Pura Look Upgrade Karte Hain.",
  subHeadline: "Haircuts, beard detailing, and grooming in Bhopal.",
  tagline: "Sharp Cuts & Clean Grooming",
  phone: "+91 9575830421",
  rawPhone: "919575830421",
  whatsAppUrl: "https://wa.me/919575830421",
  instagramHandle: "@shivangihairsalon.in",
  instagramUrl: "https://www.instagram.com/shivangihairsalon.in/",
  facebookUrl: "https://www.facebook.com/people/Shivangi-Hair-Salon/61594677009353/?rdid=rYcbsxiBq3xAj4fr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GM1K42WCV%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio",
  address: "Near Fitness Planet, Bhensakhedi Road, Bhopal",
  plusCode: "Near Fitness Planet, Bhensakhedi Road, Bhopal",
  googleMapsUrl: "https://maps.app.goo.gl/e9NTifGQm489fwpp8",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Shivangi+Hair+Salon,+Near+Fitness+Planet,+Bhensakhedi+Road,+Bhopal&t=h&z=19&ie=UTF8&iwloc=&output=embed",
  schedule: {
    days: "Mon, Wed – Sun (Tuesday Closed)",
    hours: "8:30 AM – 9:30 PM",
    closedDay: "Tuesday",
  },
  rating: 5.0,
  reviewCount: 150,
  establishedYear: 2018,
  developer: {
    name: "Aashif Khan",
    githubUrl: "https://github.com/0xAashif",
    linkedinUrl: "https://www.linkedin.com/in/aashif-khan/",
  },
};

export const TRUST_SIGNALS = [
  { icon: 'star', label: '150+ Verified Bhopal Customers', sub: 'Verified Salon Regular · Bhopal' },
  { icon: 'uv', label: 'UV Cleaned Tools', sub: 'Sanitized after every customer' },
  { icon: 'blade', label: '100% Fresh Blades', sub: 'New blade opened in front of you' },
  { icon: 'walkin', label: 'Walk-ins Welcome', sub: 'WhatsApp bookings get priority' },
];

export const SERVICES: ServiceItem[] = [
  // Haircuts & Fades
  {
    id: "sig-cut",
    name: "Signature Haircut & Skin Fade",
    category: "hair",
    durationMinutes: 45,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Haircut styled for your face shape with a smooth skin or low fade, refreshing hair wash, and natural matte styling. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Quick face-shape & hair growth check",
      "Clean scissor cut & smooth clipper fade",
      "Refreshing shampoo hair wash",
      "Blow-dry & natural matte wax finish"
    ],
    popular: true,
  },
  {
    id: "executive-scissor",
    name: "Classic Scissor Cut & Taper",
    category: "hair",
    durationMinutes: 40,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Neat scissor haircut with clean sideburns, sharp neck line-up, and a smart everyday finish for office or daily wear. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Style check according to your hair volume",
      "Full scissor layering & side taper",
      "Warm foam neck razor clean-up",
      "Cooling hair tonic massage"
    ],
  },
  {
    id: "tattoo-line",
    name: "Sharp Razor Line & Hair Design Cut",
    category: "hair",
    durationMinutes: 50,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Clean skin fade with a sharp razor side-part or custom hair line design using a fresh straight blade. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Custom side-part or razor line design",
      "Fresh single-use straight blade detailing",
      "Soothing after-cut skin spray",
      "Smooth all-around fade blend"
    ],
    popular: true,
  },

  // Beard Trimming
  {
    id: "beard-detail",
    name: "Sharp Beard Trim & Razor Line-Up",
    category: "beard",
    durationMinutes: 30,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Crisp cheek and neck lines with a fresh blade, warm towel steam to soften hair, and nourishing beard oil. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Warm steam towel to soften beard",
      "Fresh single-use blade for sharp cheek & neck lines",
      "Mustache & jawline length balancing",
      "Cooling alum rub & non-sticky beard oil"
    ],
    popular: true,
  },
  {
    id: "royal-shave",
    name: "Hot Towel Straight Razor Shave",
    category: "beard",
    durationMinutes: 35,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Relaxing warm towel steam, rich shaving foam, and a clean & comfortable shave with a 100% fresh sealed blade. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Pre-shave softening oil",
      "Warm rich lather application",
      "Smooth shave with a fresh sealed blade",
      "Cool towel press & soothing aftershave balm"
    ],
  },

  // Scalp & Facial Care
  {
    id: "scalp-spa",
    name: "Relaxing Head Massage & Hair Spa",
    category: "spa",
    durationMinutes: 40,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Deeply relaxing 20-minute head and shoulder massage, warm hair steam, and anti-dandruff scalp wash. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Scalp dryness & dandruff check",
      "20-minute warm oil head & neck massage",
      "Gentle steam towel treatment",
      "Cool wash & hair strengthening serum"
    ],
    popular: true,
  },
  {
    id: "charcoal-detox",
    name: "Charcoal Face Clean-Up & Detan",
    category: "spa",
    durationMinutes: 25,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Removes dust, oil, and sun tan with an active charcoal scrub, warm steam, and a cooling aloe vera mask. Starts from ₹100 · Negotiable.",
    inclusions: [
      "Deep face wash & warm pore-opening steam",
      "Charcoal scrub to clear blackheads & tan",
      "Cooling aloe vera & mint face pack"
    ],
  },
  {
    id: "royal-experience",
    name: "Full Grooming Combo (Haircut + Beard + Massage + Face Clean-Up)",
    category: "spa",
    durationMinutes: 90,
    priceMin: 100,
    priceMax: 100,
    shortDesc: "Complete 90-minute makeover: Signature Haircut, Sharp Beard Line-Up, Head Massage Spa, and Charcoal Face Clean-Up. Negotiable at Salon.",
    inclusions: [
      "All 4 popular salon services included",
      "25-minute relaxing head, neck & shoulder massage",
      "Easy daily hair & beard styling tips",
      "Zero-wait priority chair booking"
    ],
    popular: true,
  }
];

export interface QuizOption {
  id: string;
  label: string;
  description: string;
}

/**
 * 100% Hinglish Quiz Questions, Option Labels & Descriptions for "Find Your Look" Style Finder.
 */
export const QUIZ_QUESTIONS = {
  faceShapes: [
    { id: 'square', label: 'Chakor / Strong Jawline', description: 'Chauda matha aur sharp, strong jawline — faded sides ke saath killer lagta hai' },
    { id: 'oval', label: 'Oval / Balanced Chehra', description: 'Sahi lambai aur halka gol chin — is face cut par har haircut suit karta hai' },
    { id: 'round', label: 'Gol Chehra (Round Face)', description: 'Bhare hue gaal aur soft chin — side fade aur upar volume se chehra lamba lagta hai' },
    { id: 'diamond', label: 'Sharp Cheekbones / Angular', description: 'Sharp cheekbones aur patla chin — medium taper aur textured top best jachta hai' },
  ],
  hairTypes: [
    { id: 'straight', label: 'Seedhe aur Silky Baal', description: 'Jaldi baith jaate hain — textured crop aur matte wax volume ke saath mast lagte hain' },
    { id: 'wavy', label: 'Halke Wavy / Medium Thick', description: 'Natural wave jo side part, crop aur skin fade ko aasani se hold karta hai' },
    { id: 'coarse', label: 'Ghane ya Curly Baal', description: 'Bhari volume — short faded sides ke saath ekdum saaf aur sharp dikhte hain' },
    { id: 'receding', label: 'Halke Patle Baal / Broad Forehead', description: 'Smart short crop ya neat taper jisse baal ghane aur bhare-bhare dikhein' },
  ],
  vibes: [
    { id: 'executive', label: 'Clean Office & Formal Look', description: 'Neat scissor cut aur saaf sides jo poore hafte bina mehnat ke sharp dikhein' },
    { id: 'streetwear', label: 'Trendy Skin Fade & Crop', description: 'Sides mein sharp drop fade aur upar stylish textured volume' },
    { id: 'classic', label: 'Classic Gentleman Look', description: 'Clean side part ke saath sharp beard aur fresh blade line-up' },
    { id: 'edgy', label: 'Bold Razor Line & High Fade', description: 'High zero fade ke saath crisp razor parting aur sharp beard edges' },
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
  _face: string,
  _hair: string,
  vibe: string
): RecommendationResult {
  if (vibe === 'streetwear') {
    return {
      title: 'Textured Crop + Low Drop Skin Fade',
      fadeType: 'Sides mein clean low-to-mid skin fade aur peeche sharp neck line-up',
      beardAdvice: 'Halki neat beard ke saath gaalon par crisp fresh-blade razor line',
      stylingTip: 'Sukhe baalon mein thoda sa matte hair powder ya clay ungliyon se lagayein.',
      matchScore: '98% Perfect Match',
    };
  }

  if (vibe === 'executive') {
    return {
      title: 'Smart Scissor Cut + Clean Low Taper',
      fadeType: 'Kaan aur gardan ke paas neat scissor taper — bilkul natural aur decent',
      beardAdvice: 'Sideburns se smoothly blend ki hui well-trimmed office beard',
      stylingTip: 'Towel-dry baalon mein halki hair cream lagakar ek side neat comb karein.',
      matchScore: '96% Perfect Match',
    };
  }

  if (vibe === 'edgy') {
    return {
      title: 'High Zero Skin Fade + Sharp Razor Line',
      fadeType: 'High zero skin fade ke saath side mein crisp single-use blade parting',
      beardAdvice: 'Sharp angular beard ya goatee jiske edges ekdum razor-sharp hon',
      stylingTip: 'Top volume ko din bhar set rakhne ke liye strong-hold matte clay use karein.',
      matchScore: '97% Perfect Match',
    };
  }

  // default / classic
  return {
    title: 'Classic Side Part + Smooth Taper Fade',
    fadeType: 'Medium taper fade jo sides mein natural fullness aur royal look banaye rakhe',
    beardAdvice: 'Full beard ke saath garam towel steam aur fresh blade neck clean-up',
    stylingTip: 'Halka blow-dry karke medium-hold styling paste se clean finish dein.',
    matchScore: '99% Perfect Match',
  };
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Rohit Sharma",
    rating: 5,
    reviewDate: "2 weeks ago",
    serviceDone: "Signature Haircut & Beard Shaping",
    comment: "Incredible attention to detail. The master barber actually checks your face shape and hair growth before picking up a clipper. Best salon experience in Bhopal.",
    badge: "Verified Salon Regular · Bhopal",
  },
  {
    id: "rev-2",
    clientName: "Anil",
    rating: 5,
    reviewDate: "1 month ago",
    serviceDone: "Skin Drop Fade & Hot Towel Beard Line-Up",
    comment: "Best fade and razor beard line-up on Bhensakhedi Road. The warm towel steam and fresh blade finish are unmatched anywhere near The Fitness Planet.",
    badge: "Verified Salon Regular · Bhopal",
  },
  {
    id: "rev-3",
    clientName: "Mannu",
    rating: 5,
    reviewDate: "3 weeks ago",
    serviceDone: "Head Massage Spa & Classic Cut",
    comment: "Super clean salon, UV-cleaned tools, fresh blades, and zero rush. You get full attention for 45 minutes and walk out looking sharp every time.",
    badge: "Verified Salon Regular · Bhopal",
  },
  {
    id: "rev-4",
    clientName: "Raju Bhai",
    rating: 5,
    reviewDate: "2 months ago",
    serviceDone: "Full Grooming Combo",
    comment: "Shivangi Hair Salon is the best around Bhopal. Clean & comfortable shave every single time with a fresh single-use blade. Book on WhatsApp before coming on weekends!",
    badge: "Verified Salon Regular · Bhopal",
  }
];

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Skin Fade' | 'Beard Detailing' | 'Hot Towel Shave' | 'Salon';
  desc: string;
  locationTag: string;
  image: string;
  imageClassName?: string;
  isSalonPhoto?: boolean;
}

/**
 * 16 Gallery Items — Strictly 4 items per category featuring realistic Indian male client profiles
 * across all 4 age groups: Kids School Fade, College Teen Textured Crop, Young Man Skin Fade & Beard,
 * and Senior/Uncle Classic Scissor Cut.
 */
export const LOOKBOOK_ITEMS: LookbookItem[] = [
  // 1. Skin Fade (4 distinct Indian male age-group profiles)
  {
    id: "fade-1",
    title: "College Teen Textured Crop",
    category: "Skin Fade",
    desc: "College Teen Textured Crop: Trendy messy top volume with a clean low skin fade for Bhopal college students.",
    locationTag: "Bhopal Salon",
    image: "/crop_fade.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "fade-2",
    title: "Young Man Skin Fade & Beard",
    category: "Skin Fade",
    desc: "Young Man Skin Fade & Beard: Sharp zero temple fade blended smoothly into a crisp beard line-up.",
    locationTag: "Bhopal Salon",
    image: "/gallery/fade_zero_taper.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "fade-3",
    title: "Kids School Fade & Neat Side Part",
    category: "Skin Fade",
    desc: "Kids School Fade: Smart, school-approved neat taper fade and easy-comb top for young Indian boys.",
    locationTag: "Bhopal Salon",
    image: "/gallery/fade_low_drop.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "fade-4",
    title: "Senior / Uncle Classic Scissor Cut",
    category: "Skin Fade",
    desc: "Senior/Uncle Classic Scissor Cut: Dignified full-scissor haircut with neat sideburns and clean neck edges.",
    locationTag: "Bhopal Salon",
    image: "/gallery/fade_classic_sidepart.jpg",
    imageClassName: "object-cover object-center",
  },

  // 2. Beard Detailing (4 distinct Indian male profiles)
  {
    id: "beard-1",
    title: "Young Man Sharp Beard Line-Up",
    category: "Beard Detailing",
    desc: "Young Man Skin Fade & Beard: Crisp cheek and neck lines using a 100% fresh sealed blade.",
    locationTag: "Bhopal Salon",
    image: "/beard_sculpt.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "beard-2",
    title: "College Teen Stubble & Jawline Trim",
    category: "Beard Detailing",
    desc: "College Teen Textured Crop & Stubble: Light faded stubble that makes the jawline look sharp and clean.",
    locationTag: "Bhopal Salon",
    image: "/gallery/beard_full_fade.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "beard-3",
    title: "Senior / Uncle Mustache & Beard Trim",
    category: "Beard Detailing",
    desc: "Senior/Uncle Classic Scissor Cut & Beard: Balanced mustache and beard shaping for a neat, respected look.",
    locationTag: "Bhopal Salon",
    image: "/gallery/beard_jawline_trim.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "beard-4",
    title: "Groom & Wedding Royal Beard Styling",
    category: "Beard Detailing",
    desc: "Nourishing beard oil massage, warm steam prep, and precision trimmer detailing for special occasions.",
    locationTag: "Bhopal Salon",
    image: "/gallery/beard_oil_styling.jpg",
    imageClassName: "object-cover object-center",
  },

  // 3. Hot Towel Shave (4 distinct Indian male profiles)
  {
    id: "shave-1",
    title: "Senior / Uncle Hot Towel Clean Shave",
    category: "Hot Towel Shave",
    desc: "Senior/Uncle Classic Clean Shave: Warm steam towel prep followed by a clean & comfortable shave.",
    locationTag: "Bhopal Salon",
    image: "/razor_shave.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "shave-2",
    title: "Young Man Double-Towel Facial Shave",
    category: "Hot Towel Shave",
    desc: "Hot towel pore cleaning finished with a soothing cool towel press for office professionals.",
    locationTag: "Bhopal Salon",
    image: "/gallery/shave_double_towel.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "shave-3",
    title: "Close Single-Use Blade Shave",
    category: "Hot Towel Shave",
    desc: "Rich foam lather and a 100% fresh sealed blade unpacked in front of your chair.",
    locationTag: "Bhopal Salon",
    image: "/gallery/shave_feather_blade.jpg",
    imageClassName: "object-cover object-center",
  },
  {
    id: "shave-4",
    title: "College Teen Detan Steam & Neck Clean-Up",
    category: "Hot Towel Shave",
    desc: "Relaxing face steam therapy with cooling post-shave aloe vera balm for Bhopal youth.",
    locationTag: "Bhopal Salon",
    image: "/gallery/shave_face_steam.jpg",
    imageClassName: "object-cover object-center",
  },

  // 4. Salon (4 distinct images)
  {
    id: "salon-1",
    title: "Main Salon Floor & Barber Chairs",
    category: "Salon",
    desc: "Comfortable black hydraulic grooming chairs for kids, college teens, young men, and seniors in Bhopal.",
    locationTag: "Bhopal Salon",
    image: "/interior_luxury.jpg",
    imageClassName: "object-cover object-[center_15%] scale-[1.12]",
    isSalonPhoto: true,
  },
  {
    id: "salon-2",
    title: "Mirror Stations & Grooming Setup",
    category: "Salon",
    desc: "Bright mirror stations stocked with authentic hair, beard, and skin care products.",
    locationTag: "Bhopal Salon",
    image: "/gallery/salon_mirror_stations.jpg",
    imageClassName: "object-cover object-center",
    isSalonPhoto: true,
  },
  {
    id: "salon-3",
    title: "UV Tool Sanitizer & Clean Setup",
    category: "Salon",
    desc: "Professional UV sanitizer cabinet used after every single customer.",
    locationTag: "Bhopal Salon",
    image: "/gallery/salon_uv_sanitizer.jpg",
    imageClassName: "object-cover object-center",
    isSalonPhoto: true,
  },
  {
    id: "salon-4",
    title: "Pro Clippers, Scissors & Fresh Blades",
    category: "Salon",
    desc: "High-precision trimmers, scissors, and 100% fresh single-use blades.",
    locationTag: "Bhopal Salon",
    image: "/gallery/salon_pro_tools.jpg",
    imageClassName: "object-cover object-center",
    isSalonPhoto: true,
  },
];
