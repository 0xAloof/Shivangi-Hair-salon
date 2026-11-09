import { Star, CheckCircle, Quote, ShieldCheck, Sparkles, Droplets, Award } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export default function Reviews() {
  const hygieneSteps = [
    {
      index: '01',
      icon: ShieldCheck,
      title: 'UV-Cleaned Scissors & Clippers',
      detail:
        'Every scissor, clipper blade, and comb is deep-cleaned in a professional UV sanitizer cabinet after every single customer.',
    },
    {
      index: '02',
      icon: Sparkles,
      title: '100% Fresh Sealed Blade for Every Shave',
      detail:
        'We never reuse blades. A brand-new fresh single-use blade is opened right in front of your eyes before any shave or beard line-up.',
    },
    {
      index: '03',
      icon: Droplets,
      title: 'Fresh Towels & Clean Neck Strips',
      detail:
        'Fresh steamed towels and clean neck strips are used for every chair for a clean & comfortable shave.',
    },
  ];

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-transparent border-b border-stone-900/10 dark:border-white/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hygiene Promise Block — Strict h2 -> h3 heading hierarchy for 100/100 Lighthouse Accessibility */}
        <div className="rounded-2xl bg-[#EBE6DC] dark:bg-[#121214] border border-stone-900/10 dark:border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7848] dark:text-[#C5A059] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 stroke-[1.75] text-[#9A7848] dark:text-[#C5A059]" />
              <span>100% Safe & Hygienic Grooming</span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#141413] dark:text-[#F4F1EA]">
              Clean Tools & Fresh Blades for Every Customer.
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA]">
              Your skin safety comes first. Every tool is sanitized before it touches your hair or beard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hygieneSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.index}
                  className="p-5 sm:p-6 rounded-xl bg-[#F4F1EA] dark:bg-[#0B0B0C] border border-stone-900/10 dark:border-white/10 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-stone-900/10 dark:border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#9A7848] dark:text-[#C5A059]">
                      {step.index}
                    </span>
                    <Icon className="w-4 h-4 stroke-[1.75] text-[#9A7848] dark:text-[#C5A059]" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#141413] dark:text-[#F4F1EA]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer Feedback Showcase */}
        <div>
          {/* Header with 150+ Verified Bhopal Customers Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7848] dark:text-[#C5A059]">
                Real Customer Feedback
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] dark:text-[#F4F1EA] tracking-tight">
                What Bhopal Customers Say
              </h2>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] max-w-xl">
                Feedback from 150+ Verified Bhopal Customers who visit Shivangi Hair Salon for their haircuts and beard styling.
              </p>
            </div>

            {/* 150+ Verified Bhopal Customers Badge */}
            <div className="p-4 rounded-xl bg-[#EBE6DC] dark:bg-[#121214] border border-stone-900/10 dark:border-white/10 flex items-center gap-4 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[#F4F1EA] dark:bg-[#0B0B0C] border border-stone-900/10 dark:border-white/10 flex items-center justify-center text-[#9A7848] dark:text-[#C5A059]">
                <Award className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#141413] dark:text-[#F4F1EA]">
                    150+ Verified Bhopal Customers
                  </span>
                </div>
                <p className="text-[11px] text-[#57534E] dark:text-[#A1A1AA]">
                  Verified Salon Regular · Bhopal
                </p>
              </div>
            </div>
          </div>

          {/* 4 Reviews Cards with <h3> reviewer name tags for Lighthouse 100/100 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl bg-[#EBE6DC] dark:bg-[#121214] border border-stone-900/10 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300"
              >
                <div className="space-y-4">
                  {/* Client header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F4F1EA] dark:bg-[#18181B] text-[#141413] dark:text-[#C5A059] font-bold font-display flex items-center justify-center border border-stone-900/10 dark:border-white/10">
                        {rev.clientName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-[#141413] dark:text-[#F4F1EA]">
                          {rev.clientName}
                        </h3>
                        <p className="text-[11px] text-[#57534E] dark:text-[#A1A1AA] flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-[#9A7848] dark:text-[#C5A059]" />
                          <span>{rev.badge}</span>
                          <span aria-hidden="true">·</span>
                          <span>{rev.reviewDate}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#9A7848] dark:text-[#C5A059]">
                    Service: {rev.serviceDone}
                  </p>

                  <div className="relative">
                    <Quote className="w-5 h-5 text-stone-900/10 dark:text-white/10 absolute -top-1.5 -left-1" />
                    <p className="relative z-10 text-xs sm:text-sm text-[#141413]/90 dark:text-[#F4F1EA]/90 leading-relaxed pl-4">
                      "{rev.comment}"
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-900/10 dark:border-white/10 flex items-center justify-between text-xs text-[#57534E] dark:text-[#A1A1AA]">
                  <span>Verified Salon Regular · Bhopal</span>
                  <span className="text-[#9A7848] dark:text-[#C5A059] font-semibold">150+ Verified Bhopal Customers</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
