import { useState } from 'react';
import { Clock, Check, Plus, Minus } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { VIDEOS } from '../config/videos';
import { ServiceItem } from '../types';
import { createWhatsAppUrl, openExternalUrl } from '../utils/booking';

interface ServiceMenuProps {
  onSelectServiceModal?: (serviceId: string) => void;
}

export default function ServiceMenu({}: ServiceMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'hair' | 'beard' | 'spa'>('hair');
  const [selectedIds, setSelectedIds] = useState<string[]>(['sig-cut']);
  const [expandedDetailsId, setExpandedDetailsId] = useState<string | null>(null);

  const categories: { id: 'hair' | 'beard' | 'spa'; label: string }[] = [
    { id: 'hair', label: 'Haircuts & Fades' },
    { id: 'beard', label: 'Beard Trimming' },
    { id: 'spa', label: 'Scalp & Facial Care' },
  ];

  const currentServices = SERVICES.filter((s) => s.category === activeCategory);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBookSingleOnWhatsApp = (service: ServiceItem) => {
    const msg = [
      `*APPOINTMENT INQUIRY - SHIVANGI HAIR SALON*`,
      `Hello Master Barber, I would like to book the following service at your Bhopal studio:`,
      `Service: ${service.name} (${service.durationMinutes} Mins)`,
      `Pricing: Consultation Required`,
      `Studio: Bhensakhedi Road, near The Fitness Planet`,
      `Please confirm current chair availability.`
    ].join('\n');
    const url = createWhatsAppUrl(SALON_INFO.rawPhone, msg);
    openExternalUrl(url);
  };

  const selectedItems = SERVICES.filter((s) => selectedIds.includes(s.id));
  const totalDuration = selectedItems.reduce((acc, s) => acc + s.durationMinutes, 0);

  const handleBookSelectionOnWhatsApp = () => {
    if (selectedItems.length === 0) return;
    const itemsList = selectedItems
      .map((s) => `• ${s.name} (${s.durationMinutes} mins)`)
      .join('\n');
    const msg = [
      `*CUSTOM GROOMING PLAN - SHIVANGI HAIR SALON*`,
      `Hello Master Barber, I configured my session:`,
      itemsList,
      ``,
      `Estimated Duration: ~${totalDuration} Mins`,
      `Pricing: Consultation Required`,
      `Studio: Bhensakhedi Road, Bhopal`,
      `Please confirm chair availability.`
    ].join('\n');
    const url = createWhatsAppUrl(SALON_INFO.rawPhone, msg);
    openExternalUrl(url);
  };

  return (
    <section 
      id="services" 
      className="relative py-20 sm:py-28 bg-[#121212] border-b border-[#222222] scroll-mt-20 overflow-hidden transition-colors duration-250"
    >
      {/* Background Video with solid #121212 fallback */}
      <div className="absolute inset-0 w-full h-full bg-[#121212] pointer-events-none">
        <video
          src={VIDEOS.serviceMenu}
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-full object-cover object-center bg-[#121212] opacity-25"
        />
        <div className="absolute inset-0 bg-[#121212]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Service Menu
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F5F1E8] tracking-tight">
              Precision Services
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A095] max-w-xl">
              Dedicated chair appointments. Each session includes cranial analysis, single-use sterilized instruments, and hot-towel preparation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex p-1 rounded-xl bg-[#161616] border border-[#262626] shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#F5F1E8] text-[#121212] shadow-sm'
                    : 'text-[#A6A095] hover:text-[#F5F1E8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stark, Clean Table Layout */}
        <div className="rounded-2xl border border-[#262626] bg-[#161616]/90 backdrop-blur-sm overflow-hidden shadow-sm">
          
          {/* Table Header Row (Desktop) */}
          <div className="hidden md:grid md:grid-cols-12 px-6 py-4 border-b border-[#262626] text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] bg-[#1A1A1A]">
            <div className="col-span-6">Service Specification</div>
            <div className="col-span-2 text-center">Duration</div>
            <div className="col-span-2 text-right">Assessment</div>
            <div className="col-span-2 text-right">Reserve (WhatsApp)</div>
          </div>

          {/* Service Rows */}
          <div className="divide-y divide-[#262626]">
            {currentServices.map((service) => {
              const isSelected = selectedIds.includes(service.id);
              const isExpanded = expandedDetailsId === service.id;

              return (
                <div
                  key={service.id}
                  className={`p-5 sm:p-6 transition-colors duration-150 ${
                    isSelected
                      ? 'bg-[#25D366]/10'
                      : 'hover:bg-[#1C1C1C]'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Col 1: Service Name & Description (6 cols) */}
                    <div className="md:col-span-6 space-y-1.5">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <button
                          type="button"
                          onClick={() => toggleSelect(service.id)}
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                            isSelected
                              ? 'bg-[#25D366] border-[#25D366] text-white'
                              : 'border-[#444444] bg-transparent'
                          }`}
                          aria-label={`Select ${service.name} for calculation`}
                          title="Select Service"
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>

                        <h3 className="font-display text-base sm:text-lg font-bold text-[#F5F1E8]">
                          {service.name}
                        </h3>

                        {service.popular && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-[#D4AF37] border border-amber-500/30">
                            Signature
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#A6A095] leading-relaxed pl-7">
                        {service.shortDesc}
                      </p>

                      {/* Expand Inclusions toggle */}
                      <button
                        type="button"
                        onClick={() => setExpandedDetailsId(isExpanded ? null : service.id)}
                        className="text-[11px] font-semibold text-[#D4AF37] hover:underline pl-7 cursor-pointer inline-flex items-center gap-1 pt-1"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                        {isExpanded ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 pl-7 pt-2 border-t border-[#262626]">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#A6A095]">
                            {service.inclusions.map((inc, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Col 2: Duration (2 cols) */}
                    <div className="md:col-span-2 flex md:justify-center items-center gap-1.5 text-xs text-[#A6A095] pl-7 md:pl-0">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="font-mono font-medium">{service.durationMinutes} Mins</span>
                    </div>

                    {/* Col 3: Price Purged - Consultation Required (2 cols) */}
                    <div className="md:col-span-2 flex md:justify-end items-center pl-7 md:pl-0">
                      <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
                        Consultation Required
                      </span>
                    </div>

                    {/* Col 4: Scaled-down Circular Green WhatsApp Action (44px) */}
                    <div className="md:col-span-2 flex justify-end items-center pl-7 md:pl-0">
                      <button
                        type="button"
                        onClick={() => handleBookSingleOnWhatsApp(service)}
                        className="cta-circle w-11 h-11 bg-[#25D366] text-white hover:bg-[#20BA59] shadow-md cursor-pointer flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
                        aria-label={`Book ${service.name} on WhatsApp`}
                        title={`Book ${service.name} via WhatsApp`}
                      >
                        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Minimalist Session Planner Strip */}
        <div className="mt-8 rounded-2xl bg-[#161616]/90 border border-[#262626] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Session Selection
            </span>
            <p className="font-display text-sm sm:text-base font-bold text-[#F5F1E8]">
              {selectedItems.length} Service{selectedItems.length === 1 ? '' : 's'} Selected
            </p>
            <p className="text-[11px] text-[#A6A095] max-w-md">
              {selectedItems.map((s) => s.name).join(' + ') || 'Select services above to bundle your chair session.'}
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-right">
              <span className="text-[10px] text-[#A6A095] uppercase tracking-wider block font-semibold">
                Est. Duration
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-[#F5F1E8]">
                ~{totalDuration} Mins
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-[#A6A095] uppercase tracking-wider block font-semibold">
                Pricing
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Consultation Required
              </span>
            </div>

            {/* Circular Green WhatsApp CTA for selection (44px) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleBookSelectionOnWhatsApp}
                disabled={selectedItems.length === 0}
                className="cta-circle w-11 h-11 bg-[#25D366] text-white shadow-lg hover:bg-[#20BA59] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0 focus:outline-none"
                aria-label="Send selection to WhatsApp"
                title="Inquire via WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
