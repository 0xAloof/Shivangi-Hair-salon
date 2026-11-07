import { Star, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { VIDEOS } from '../config/videos';

export default function TrustStrip() {
  return (
    <section 
      aria-label="Studio Trust Signals"
      className="relative py-5 bg-[#121212] border-b border-[#262626] overflow-hidden transition-colors duration-250"
    >
      {/* Background Video with solid #121212 fallback */}
      <div className="absolute inset-0 w-full h-full bg-[#121212] pointer-events-none">
        <video
          src={VIDEOS.trustStrip}
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-full object-cover object-center bg-[#121212] opacity-25"
        />
        <div className="absolute inset-0 bg-[#121212]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          
          {/* Signal 1: 4.9 Google Rating */}
          <div className="flex items-center justify-center gap-2.5 py-1">
            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37] shrink-0" />
            <div className="text-left">
              <span className="font-bold text-xs sm:text-sm text-[#F5F1E8] block">
                4.9 / 5.0 Google Rating
              </span>
              <span className="text-[10px] text-[#A6A095] block">
                148+ Verified Bhopal Reviews
              </span>
            </div>
          </div>

          {/* Signal 2: UV Sterilized Tools */}
          <div className="flex items-center justify-center gap-2.5 py-1">
            <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
            <div className="text-left">
              <span className="font-bold text-xs sm:text-sm text-[#F5F1E8] block">
                UV Sterilized Tools
              </span>
              <span className="text-[10px] text-[#A6A095] block">
                Medical Autoclave Standards
              </span>
            </div>
          </div>

          {/* Signal 3: Fresh Blades */}
          <div className="flex items-center justify-center gap-2.5 py-1">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div className="text-left">
              <span className="font-bold text-xs sm:text-sm text-[#F5F1E8] block">
                Fresh Blades
              </span>
              <span className="text-[10px] text-[#A6A095] block">
                100% Single-use Japanese Steel
              </span>
            </div>
          </div>

          {/* Signal 4: Walk-ins Welcome */}
          <div className="flex items-center justify-center gap-2.5 py-1">
            <UserCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div className="text-left">
              <span className="font-bold text-xs sm:text-sm text-[#F5F1E8] block">
                Walk-ins Welcome
              </span>
              <span className="text-[10px] text-[#A6A095] block">
                Fast WhatsApp Priority
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
