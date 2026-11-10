import { useState } from 'react';
import { UserCheck, Sparkles, Check, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { QUIZ_QUESTIONS, computeQuizRecommendation, SALON_INFO } from '../data/salonData';
import { buildHinglishWhatsAppMessage, createWhatsAppUrl, openExternalUrl } from '../utils/booking';

export default function ConsultationQuiz() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedFace, setSelectedFace] = useState<string>('square');
  const [selectedHair, setSelectedHair] = useState<string>('straight');
  const [selectedVibe, setSelectedVibe] = useState<string>('streetwear');

  const recommendation = computeQuizRecommendation(selectedFace, selectedHair, selectedVibe);

  const faceLabel = QUIZ_QUESTIONS.faceShapes.find(f => f.id === selectedFace)?.label || selectedFace;
  const hairLabel = QUIZ_QUESTIONS.hairTypes.find(h => h.id === selectedHair)?.label || selectedHair;
  const vibeLabel = QUIZ_QUESTIONS.vibes.find(v => v.id === selectedVibe)?.label || selectedVibe;

  const handleBookLookOnWhatsApp = () => {
    const msg = buildHinglishWhatsAppMessage(recommendation.title);
    const url = createWhatsAppUrl(SALON_INFO.rawPhone, msg);
    openExternalUrl(url);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-transparent border-b border-stone-900/10 dark:border-white/10 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header — Keep main heading in English, helper text in natural Hinglish */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#9A7848] dark:text-[#C5A059]">
            <UserCheck className="w-4 h-4 text-[#9A7848] dark:text-[#C5A059]" />
            <span>3-Step Personal Haircut Guide</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] dark:text-[#F4F1EA] tracking-tight">
            "Find Your Look" Style Finder
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA]">
            Samajh nahi aa raha kaunsa haircut aap par sabse best lagega? Bas apna face shape, baalon ka texture aur daily look chunein — hum batayenge aapke liye perfect style.
          </p>
        </div>

        {/* 4 Step Circle Headers Kept in English ("1 Face Shape", "2 Hair Type", "3 Your Style", "4 Best Match") */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {[
            { num: 1, label: 'Face Shape' },
            { num: 2, label: 'Hair Type' },
            { num: 3, label: 'Your Style' },
            { num: 4, label: 'Best Match' }
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-2">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                step === item.num
                  ? 'bg-[#141413] dark:bg-[#C5A059] text-[#F4F1EA] dark:text-[#0B0B0C] shadow-sm'
                  : step > item.num
                  ? 'bg-[#9A7848] dark:bg-[#C5A059]/30 text-white dark:text-[#C5A059] border border-[#9A7848] dark:border-[#C5A059]/50'
                  : 'bg-[#EBE6DC] dark:bg-[#121214] text-[#57534E] dark:text-[#A1A1AA] border border-stone-900/10 dark:border-white/10'
              }`}>
                {step > item.num ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : item.num}
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-[#141413] dark:text-[#F4F1EA]">
                {item.label}
              </span>
              {item.num < 4 && (
                <div className="w-4 sm:w-8 h-[1px] bg-stone-900/15 dark:bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* Quiz Container Card */}
        <div className="rounded-2xl bg-[#EBE6DC] dark:bg-[#121214] border border-stone-900/10 dark:border-white/10 p-5 sm:p-10 shadow-sm">
          
          {/* Step 1: Face Shape (100% Hinglish) */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059]">
                  Step 01 / 03 · Chehre Ki Banawat
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141413] dark:text-[#F4F1EA] mt-1">
                  Aapka face shape kaisa hai?
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] mt-1">
                  Aaine mein dekh kar chunein aapka chehra inmein se kis shape ke sabse kareeb hai, taaki side fade aur top baalon ka balance ekdum sahi baithe.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.faceShapes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedFace(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-transform duration-200 cursor-pointer ${
                      selectedFace === opt.id
                        ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#F4F1EA] dark:bg-[#18181B] shadow-sm'
                        : 'border-stone-900/10 dark:border-white/10 bg-[#F4F1EA]/50 dark:bg-[#0B0B0C]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141413] dark:text-[#F4F1EA]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedFace === opt.id ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#9A7848] dark:bg-[#C5A059]' : 'border-stone-400 dark:border-zinc-600'
                      }`}>
                        {selectedFace === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A1A1AA] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="min-h-[44px] flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141413] dark:bg-[#F4F1EA] text-[#F4F1EA] dark:text-[#0B0B0C] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                >
                  <span>Aage Badhein: Hair Texture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Hair Type (100% Hinglish) */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059]">
                  Step 02 / 03 · Baalon Ka Texture
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141413] dark:text-[#F4F1EA] mt-1">
                  Apne baalon ka texture chunein
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] mt-1">
                  Aapke kudrati baal kaise hain? Isse sahi scissor layering ya clipper fade chunne mein madad milti hai.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.hairTypes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedHair(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-transform duration-200 cursor-pointer ${
                      selectedHair === opt.id
                        ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#F4F1EA] dark:bg-[#18181B] shadow-sm'
                        : 'border-stone-900/10 dark:border-white/10 bg-[#F4F1EA]/50 dark:bg-[#0B0B0C]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141413] dark:text-[#F4F1EA]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedHair === opt.id ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#9A7848] dark:bg-[#C5A059]' : 'border-stone-400 dark:border-zinc-600'
                      }`}>
                        {selectedHair === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A1A1AA] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#57534E] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#F4F1EA] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Peeche Jaayein</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="min-h-[44px] flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141413] dark:bg-[#F4F1EA] text-[#F4F1EA] dark:text-[#0B0B0C] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                >
                  <span>Aage Badhein: Daily Look</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Vibe / Style (100% Hinglish) */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059]">
                  Step 03 / 03 · Aapka Pasandida Style
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141413] dark:text-[#F4F1EA] mt-1">
                  Rozana kaisa look chahiye?
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] mt-1">
                  Apne school, college, office ya weekend routine ke hisaab se apna pasandida look chunein.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.vibes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedVibe(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-transform duration-200 cursor-pointer ${
                      selectedVibe === opt.id
                        ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#F4F1EA] dark:bg-[#18181B] shadow-sm'
                        : 'border-stone-900/10 dark:border-white/10 bg-[#F4F1EA]/50 dark:bg-[#0B0B0C]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141413] dark:text-[#F4F1EA]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedVibe === opt.id ? 'border-[#9A7848] dark:border-[#C5A059] bg-[#9A7848] dark:bg-[#C5A059]' : 'border-stone-400 dark:border-zinc-600'
                      }`}>
                        {selectedVibe === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A1A1AA] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#57534E] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#F4F1EA] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Peeche Jaayein</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="min-h-[44px] flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141413] dark:bg-[#F4F1EA] text-[#F4F1EA] dark:text-[#0B0B0C] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A059] dark:text-[#9A7848]" />
                  <span>Apna Best Look Dekhein</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Final Recommendation Box (100% Hinglish) */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-900/10 dark:border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A7848] dark:text-[#C5A059] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aapke Liye Sabse Best Cut ({recommendation.matchScore})</span>
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141413] dark:text-[#F4F1EA] mt-1">
                    {recommendation.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[44px] flex items-center gap-1.5 text-xs font-semibold text-[#57534E] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#F4F1EA] cursor-pointer self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Dobara Chunein</span>
                </button>
              </div>

              {/* Profile summary chips in Hinglish */}
              <div className="flex flex-wrap gap-2 text-xs text-[#57534E] dark:text-[#A1A1AA]">
                <span>Chehra: <strong className="text-[#141413] dark:text-[#F4F1EA]">{faceLabel}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Baal: <strong className="text-[#141413] dark:text-[#F4F1EA]">{hairLabel}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Pasand: <strong className="text-[#141413] dark:text-[#F4F1EA]">{vibeLabel}</strong></span>
              </div>

              {/* Recommendation Details Grid in Hinglish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-[#F4F1EA] dark:bg-[#0B0B0C] border border-stone-900/10 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059] block">
                    Side Fade Aur Cut Kaisa Hoga
                  </span>
                  <p className="text-sm font-semibold text-[#141413] dark:text-[#F4F1EA]">
                    {recommendation.fadeType}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F1EA] dark:bg-[#0B0B0C] border border-stone-900/10 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059] block">
                    Beard Aur Jawline Salah
                  </span>
                  <p className="text-sm font-semibold text-[#141413] dark:text-[#F4F1EA]">
                    {recommendation.beardAdvice}
                  </p>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-[#F4F1EA] dark:bg-[#0B0B0C] border border-stone-900/10 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7848] dark:text-[#C5A059] block">
                    Rozana Ghar Par Set Karne Ka Tarika
                  </span>
                  <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
                    {recommendation.stylingTip}
                  </p>
                </div>

              </div>

              {/* Circular Green WhatsApp CTA Preserved */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBookLookOnWhatsApp}
                    className="cta-circle w-11 h-11 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
                    aria-label="Yeh Look WhatsApp Par Book Karein"
                    title="Yeh Look WhatsApp Par Book Karein"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                  </button>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#141413] dark:text-[#F4F1EA]">
                      Yeh Look Book Karein
                    </span>
                    <span className="text-[11px] text-[#25D366] font-semibold">
                      Starts from ₹100 · Negotiable (WhatsApp)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[44px] px-5 py-3 rounded-xl text-xs font-semibold text-[#57534E] dark:text-[#A1A1AA] hover:text-[#141413] dark:hover:text-[#F4F1EA] border border-stone-900/10 dark:border-white/10 cursor-pointer"
                >
                  Koi Aur Style Dekhein
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
