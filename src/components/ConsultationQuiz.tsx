import { useState } from 'react';
import { UserCheck, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { QUIZ_QUESTIONS, computeQuizRecommendation, SALON_INFO } from '../data/salonData';
import { createWhatsAppUrl, openExternalUrl } from '../utils/booking';

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
    const msg = [
      `*CONSULTATION BOOKING - SHIVANGI HAIR SALON*`,
      `Hello Master Barber, I completed the 'Find Your Look' consultation:`,
      `*Face Shape:* ${faceLabel}`,
      `*Hair Type:* ${hairLabel}`,
      `*Desired Vibe:* ${vibeLabel}`,
      ``,
      `*Recommended Cut:* ${recommendation.title}`,
      `*Fade Type:* ${recommendation.fadeType}`,
      `*Studio Location:* Bhensakhedi Road, Bhopal`,
      `I want to book an appointment for this haircut.`
    ].join('\n');

    const url = createWhatsAppUrl(SALON_INFO.rawPhone, msg);
    openExternalUrl(url);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-transparent border-b border-[#C5A059]/20 scroll-mt-20 transition-colors duration-250">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B8973E] dark:text-[#D4AF37]">
            <UserCheck className="w-4 h-4 text-[#B8973E] dark:text-[#D4AF37]" />
            <span>Interactive 3-Step Analysis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141414] dark:text-[#F5F1E8] tracking-tight">
            "Find Your Look" Consultation
          </h2>
          <p className="text-sm text-[#4A4742] dark:text-[#A6A095]">
            Select your facial structure, hair texture, and style. We recommend the haircut and beard silhouette suited to you.
          </p>
        </div>

        {/* Step Progress Indicators */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {[
            { num: 1, label: 'Face Shape' },
            { num: 2, label: 'Hair Type' },
            { num: 3, label: 'Vibe / Style' },
            { num: 4, label: 'Tailored Result' }
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-2">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step === item.num
                  ? 'bg-[#141414] dark:bg-[#D4AF37] text-white dark:text-black shadow-md'
                  : step > item.num
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#D5C9B3] dark:bg-[#262626] text-[#635E54] dark:text-[#A6A095]'
              }`}>
                {step > item.num ? <Check className="w-4 h-4 stroke-[3]" /> : item.num}
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-[#141414] dark:text-[#F5F1E8]">
                {item.label}
              </span>
              {item.num < 4 && (
                <div className="w-4 sm:w-8 h-[2px] bg-[#D5C9B3] dark:border-[#262626] dark:bg-[#262626]" />
              )}
            </div>
          ))}
        </div>

        {/* Quiz Container Card */}
        <div className="rounded-2xl bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] p-6 sm:p-10 shadow-lg transition-all duration-300">
          
          {/* Step 1: Face Shape */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37]">
                  Step 1 of 3
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-[#F5F1E8] mt-1">
                  What is your primary face contour?
                </h3>
                <p className="text-xs sm:text-sm text-[#635E54] dark:text-[#A6A095] mt-1">
                  We balance facial proportions through strategically placed taper weight and cheek lines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.faceShapes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedFace(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedFace === opt.id
                        ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#F5F1E8] dark:bg-[#262626] shadow-md ring-2 ring-[#B8973E]/20'
                        : 'border-[#E2DACB] dark:border-[#262626] hover:border-[#B8973E] dark:hover:border-neutral-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141414] dark:text-[#F5F1E8]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedFace === opt.id ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#B8973E] dark:bg-[#D4AF37]' : 'border-neutral-400'
                      }`}>
                        {selectedFace === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#635E54] dark:text-[#A6A095] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141414] dark:bg-[#F5F1E8] text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <span>Next: Hair Type</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Hair Type */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37]">
                  Step 2 of 3
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-[#F5F1E8] mt-1">
                  How does your hair naturally behave?
                </h3>
                <p className="text-xs sm:text-sm text-[#635E54] dark:text-[#A6A095] mt-1">
                  Your hair density and wave determine whether point-cutting, texturizing, or clipper fading looks sharpest.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.hairTypes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedHair(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedHair === opt.id
                        ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#F5F1E8] dark:bg-[#262626] shadow-md ring-2 ring-[#B8973E]/20'
                        : 'border-[#E2DACB] dark:border-[#262626] hover:border-[#B8973E] dark:hover:border-neutral-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141414] dark:text-[#F5F1E8]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedHair === opt.id ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#B8973E] dark:bg-[#D4AF37]' : 'border-neutral-400'
                      }`}>
                        {selectedHair === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#635E54] dark:text-[#A6A095] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F5F1E8] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141414] dark:bg-[#F5F1E8] text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <span>Next: Preferred Vibe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Vibe / Style */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37]">
                  Step 3 of 3
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141414] dark:text-[#F5F1E8] mt-1">
                  What is your daily vibe and aesthetic?
                </h3>
                <p className="text-xs sm:text-sm text-[#635E54] dark:text-[#A6A095] mt-1">
                  Whether you spend your days in corporate meetings, creative spaces, or outdoors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUIZ_QUESTIONS.vibes.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedVibe(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedVibe === opt.id
                        ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#F5F1E8] dark:bg-[#262626] shadow-md ring-2 ring-[#B8973E]/20'
                        : 'border-[#E2DACB] dark:border-[#262626] hover:border-[#B8973E] dark:hover:border-neutral-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#141414] dark:text-[#F5F1E8]">
                        {opt.label}
                      </span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedVibe === opt.id ? 'border-[#B8973E] dark:border-[#D4AF37] bg-[#B8973E] dark:bg-[#D4AF37]' : 'border-neutral-400'
                      }`}>
                        {selectedVibe === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#635E54] dark:text-[#A6A095] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F5F1E8] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#141414] dark:bg-[#F5F1E8] text-white dark:text-black hover:opacity-90 transition-all cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Reveal Recommendation</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Tailored Output & "Book This Look" (Green #25D366) */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2DACB] dark:border-[#262626]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Your Recommended Architecture ({recommendation.matchScore})</span>
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141414] dark:text-[#F5F1E8] mt-1">
                    {recommendation.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F5F1E8] cursor-pointer self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Profile summary chips */}
              <div className="flex flex-wrap gap-2 text-xs text-[#635E54] dark:text-[#A6A095]">
                <span>Profile: <strong>{faceLabel}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Texture: <strong>{hairLabel}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Vibe: <strong>{vibeLabel}</strong></span>
              </div>

              {/* Recommendation Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-[#F5F1E8] dark:bg-[#121212] border border-[#D5C9B3] dark:border-[#262626] space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37] block">
                    Recommended Fade Geometry
                  </span>
                  <p className="text-sm font-semibold text-[#141414] dark:text-[#F5F1E8]">
                    {recommendation.fadeType}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F1E8] dark:bg-[#121212] border border-[#D5C9B3] dark:border-[#262626] space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37] block">
                    Beard Contour Advice
                  </span>
                  <p className="text-sm font-semibold text-[#141414] dark:text-[#F5F1E8]">
                    {recommendation.beardAdvice}
                  </p>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-[#F5F1E8] dark:bg-[#121212] border border-[#D5C9B3] dark:border-[#262626] space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8973E] dark:text-[#D4AF37] block">
                    Barber Styling Tip
                  </span>
                  <p className="text-xs sm:text-sm text-[#3D3A35] dark:text-[#A6A095] leading-relaxed">
                    {recommendation.stylingTip}
                  </p>
                </div>

              </div>

              {/* Circular Green WhatsApp CTA: "Book This Look" (44px) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBookLookOnWhatsApp}
                    className="cta-circle w-11 h-11 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
                    aria-label="Book This Look on WhatsApp"
                    title="Book This Look on WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                  </button>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                      Book This Look
                    </span>
                    <span className="text-[11px] text-[#25D366] font-semibold">
                      WhatsApp Pre-filled
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F5F1E8] border border-[#D5C9B3] dark:border-[#262626] cursor-pointer"
                >
                  Try Another Combination
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
