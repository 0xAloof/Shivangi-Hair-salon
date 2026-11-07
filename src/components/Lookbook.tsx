import { useState } from 'react';
import { Eye, ArrowRight, X } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './BrandIcons';
import { LOOKBOOK_ITEMS, SALON_INFO } from '../data/salonData';

interface LookbookProps {
  onSelectStyle: (styleName: string) => void;
}

export default function Lookbook({ onSelectStyle }: LookbookProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const categories = ['All', 'Skin Fade', 'Beard Detailing', 'Hot Towel Shave', 'Sanctuary'];

  const filteredItems = activeCategory === 'All'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#EDE6D8] dark:bg-[#121212] border-b border-[#D5C9B3] dark:border-[#262626] scroll-mt-20 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B8973E] dark:bg-[#D4AF37]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B8973E] dark:text-[#D4AF37]">
                Visual Proof & Gallery
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#141414] dark:text-[#F5F1E8] tracking-tight">
              Precision Cuts & Razor Detailing
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4742] dark:text-[#A6A095] max-w-xl">
              Authentic chair captures: low drop tapers, razor cheek lines, hot-towel skin prep, and hair architecture in Bhopal.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#141414] dark:bg-[#262626] text-white dark:text-[#F5F1E8] shadow-sm border border-neutral-700'
                    : 'text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F5F1E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                
                {/* Category tag */}
                <div className="absolute top-3 left-3 text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700">
                  {item.category}
                </div>

                {/* Quick preview */}
                <button
                  type="button"
                  onClick={() => setPreviewImage(item.image)}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label={`Preview ${item.title}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#141414] dark:text-[#F5F1E8]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#4A4742] dark:text-[#A6A095] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE3D4] dark:border-[#262626] flex items-center justify-between">
                  <span className="text-[11px] text-[#635E54] dark:text-[#A6A095]">Bhopal Studio</span>
                  <button
                    type="button"
                    onClick={() => onSelectStyle(item.title)}
                    className="flex items-center gap-1 text-xs font-bold text-[#B8973E] dark:text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    <span>Request This Cut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Spotlight: Official Facebook & Instagram 44px Circular Buttons */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] max-w-xl mx-auto flex flex-col items-center text-center space-y-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141414] dark:text-[#F5F1E8]">
              Studio Portfolios & Daily Reels
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4742] dark:text-[#A6A095] max-w-md">
              Follow our daily haircut reels, straight razor beard detailing, and chair captures in Bhopal.
            </p>
          </div>

          {/* Strict Circular Brand Buttons, 44px, Icon-Only inside the circle */}
          <div className="pt-2 flex items-center justify-center gap-6">
            
            {/* Facebook 44px CTA */}
            <div className="flex flex-col items-center gap-2">
              <a
                href={SALON_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-circle w-11 h-11 bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/40"
                aria-label="Follow Shivangi Hair Salon on Facebook"
                title="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-white shrink-0" />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1877F2] dark:text-blue-400">
                Facebook
              </span>
            </div>

            {/* Instagram 44px CTA */}
            <div className="flex flex-col items-center gap-2">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-circle w-11 h-11 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white shadow-md flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-500/40"
                aria-label="Follow Shivangi Hair Salon on Instagram"
                title="Follow on Instagram @shivangihairsalon.in"
              >
                <InstagramIcon className="w-5 h-5 text-white shrink-0" />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dc2743] dark:text-rose-400">
                Instagram
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
          role="dialog"
          aria-label="Image preview"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
