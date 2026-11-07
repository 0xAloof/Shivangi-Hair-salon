import { Star, CheckCircle, Quote, ShieldCheck, Sparkles, Droplets } from 'lucide-react';
import { REVIEWS, SALON_INFO } from '../data/salonData';

export default function Reviews() {
  const hygieneSteps = [
    {
      icon: ShieldCheck,
      title: "Medical-Grade UV & Ultrasonic Bath",
      detail: "Every metal shear, clipper guard, and comb is cleansed in high-frequency ultrasonic baths followed by germicidal UV chamber sterilization after every single use."
    },
    {
      icon: Sparkles,
      title: "100% Fresh Japanese Blades",
      detail: "Straight razor blades are never reused. A fresh, individually wrapped Japanese feather blade is unpacked right in front of you for each client contour."
    },
    {
      icon: Droplets,
      title: "Single-Use Disposable Capes & Strips",
      detail: "Fresh hygienic neck collars and sterilized disposable salon capes ensure zero hair or product transfer between gentlemen."
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F5F1E8] dark:bg-[#121212] border-b border-[#E2DACB] dark:border-[#262626] scroll-mt-20 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hygiene Promise Block */}
        <div className="rounded-3xl bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] p-8 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>The Shivangi Hygiene Standard</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141414] dark:text-[#F5F1E8]">
              Cleanliness Standards. Fresh Steel for Every Chair.
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4742] dark:text-[#A6A095]">
              Every metal shear, clipper guard, and comb is cleansed in ultrasonic baths followed by UV chamber sterilization after every single use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hygieneSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F5F1E8] dark:bg-[#121212] border border-[#E2DACB] dark:border-[#262626] space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1E1E1E] border border-[#D5C9B3] dark:border-[#262626] flex items-center justify-center text-[#25D366]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#141414] dark:text-[#F5F1E8]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#635E54] dark:text-[#A6A095] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Google Reviews Showcase */}
        <div>
          {/* Header with Google 4.9 Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B8973E] dark:text-[#D4AF37]">
                Verified Social Proof
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141414] dark:text-[#F5F1E8] tracking-tight">
                What Bhopal Clients Say
              </h2>
              <p className="text-sm text-[#4A4742] dark:text-[#A6A095] max-w-xl">
                Google reviews from clients who make Shivangi Hair Salon their trusted barber studio.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] flex items-center gap-4 shadow-sm shrink-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-bold text-lg text-blue-600 shadow-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl font-bold text-[#141414] dark:text-[#F5F1E8]">
                    {SALON_INFO.rating}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#635E54] dark:text-[#A6A095]">
                  {SALON_INFO.reviewCount}+ Verified Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* 4 Reviews Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  {/* Client header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#EDE6D8] dark:bg-[#262626] text-[#141414] dark:text-[#D4AF37] font-bold font-display flex items-center justify-center border border-[#D5C9B3] dark:border-[#262626]">
                        {rev.clientName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-[#141414] dark:text-[#F5F1E8]">
                          {rev.clientName}
                        </h4>
                        <p className="text-[11px] text-[#635E54] dark:text-[#A6A095] flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-[#25D366]" />
                          <span>{rev.badge}</span>
                          <span aria-hidden="true">·</span>
                          <span>{rev.reviewDate}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#8C6D23] dark:text-[#D4AF37]">
                    Service: {rev.serviceDone}
                  </p>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-[#E2DACB] dark:text-[#262626] absolute -top-2 -left-1" />
                    <p className="relative z-10 text-xs sm:text-sm text-[#3D3A35] dark:text-[#A6A095] leading-relaxed pl-3 italic">
                      "{rev.comment}"
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EAE3D4] dark:border-[#262626] flex items-center justify-between text-xs text-[#635E54] dark:text-[#A6A095]">
                  <span>Verified Google Business Review</span>
                  <span className="text-[#25D366] font-medium">Bhopal Studio</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
