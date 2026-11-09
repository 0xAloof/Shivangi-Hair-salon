import {
  Phone,
  MapPin,
  Star,
  Sparkles,
  Scissors,
  ClipboardList,
  Github,
  Linkedin,
  Code2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './BrandIcons';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenWhatsApp: () => void;
}

export default function Footer({ onOpenWhatsApp }: FooterProps) {
  return (
    <footer className="bg-transparent backdrop-blur-sm border-t border-stone-900/10 dark:border-white/10 text-[#57534E] dark:text-[#A1A1AA] text-xs py-16 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col with Logo (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-stone-900/10 dark:border-white/15 bg-black shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Shivangi Hair Salon Logo" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'none' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-[#141413] dark:text-[#F4F1EA]">
                SHIVANGI <span className="gold-gradient-text">HAIR SALON</span>
              </span>
            </div>
            
            <p className="text-xs text-[#57534E] dark:text-[#A1A1AA] max-w-sm leading-relaxed">
              Bhopal's trusted men's hair & beard salon. Sharp skin fades, clean beard line-ups, and relaxing hot towel shaves with 100% fresh blades.
            </p>

            <div className="flex items-center gap-1.5 text-[#9A7848] dark:text-[#C5A059]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-[#141413] dark:text-[#F4F1EA] font-bold">150+ Verified Bhopal Customers</span>
              <span className="text-[#57534E] dark:text-[#A1A1AA]">· Verified Salon Regular · Bhopal</span>
            </div>
          </div>

          {/* Navigation Links with Lucide Icons Before Each Heading (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#141413] dark:text-[#F4F1EA]">
              Salon Navigation
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 hover:text-[#141413] dark:hover:text-[#F4F1EA] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
                  <span>Showcase</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/craftsman"
                  className="inline-flex items-center gap-2 hover:text-[#141413] dark:hover:text-[#F4F1EA] transition-colors"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
                  <span>Craftsman</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 hover:text-[#141413] dark:hover:text-[#F4F1EA] transition-colors"
                >
                  <ClipboardList className="w-3.5 h-3.5 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
                  <span>Service Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/salon"
                  className="inline-flex items-center gap-2 hover:text-[#141413] dark:hover:text-[#F4F1EA] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
                  <span>Salon & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Strict Circular CTAs (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#141413] dark:text-[#F4F1EA]">
              Direct Salon Channels
            </p>
            <div className="space-y-2 text-xs text-[#57534E] dark:text-[#A1A1AA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#9A7848] dark:text-[#C5A059] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:underline font-semibold font-mono text-[#141413] dark:text-[#F4F1EA]">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="text-[11px] text-[#57534E] dark:text-[#A1A1AA]">
                Mon, Wed–Sun: 8:30 AM – 9:30 PM <span className="text-[#9A7848] dark:text-[#C5A059] font-bold">(Tuesday Closed)</span>
              </div>
            </div>

            {/* Strict Color Coded Action Buttons (PERFECT CIRCLES, 44px, Icon-Only inside, zero text - Preserved 100%) */}
            <div className="pt-2 flex items-center gap-3 sm:gap-4 flex-wrap">
              
              {/* 1. Call Black 44px */}
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="cta-circle w-11 h-11 btn-call text-white shadow-sm flex items-center justify-center shrink-0 focus:outline-none"
                aria-label={`Call salon at ${SALON_INFO.phone}`}
                title="Call Salon"
              >
                <Phone className="w-5 h-5 shrink-0" />
              </a>

              {/* 2. WhatsApp Green 44px */}
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="cta-circle w-11 h-11 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-sm flex items-center justify-center shrink-0 cursor-pointer focus:outline-none"
                aria-label="Direct WhatsApp booking"
                title="Book on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              </button>

              {/* 3. Facebook Blue 44px */}
              <a
                href={SALON_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-circle w-11 h-11 bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-sm flex items-center justify-center shrink-0 focus:outline-none"
                aria-label="Visit Facebook Page"
                title="Follow on Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-white shrink-0" />
              </a>

              {/* 4. Instagram 44px */}
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-circle w-11 h-11 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white shadow-sm flex items-center justify-center shrink-0 focus:outline-none"
                aria-label="Visit Instagram @shivangihairsalon.in"
                title="Follow on Instagram @shivangihairsalon.in"
              >
                <InstagramIcon className="w-5 h-5 text-white shrink-0" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Left Copyright | Center "Developed by Aashif Khan" with GitHub & LinkedIn | Right Address */}
        <div className="pt-8 border-t border-stone-900/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-[11px] text-[#57534E] dark:text-[#A1A1AA]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Shivangi Hair Salon. All rights reserved.
          </p>

          {/* Center: Developed by Aashif Khan + GitHub & LinkedIn links */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#9A7848] dark:text-[#C5A059] shrink-0" />
              <span>Developed by</span>
              <a
                href={SALON_INFO.developer.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#141413] dark:text-[#F4F1EA] hover:text-[#9A7848] dark:hover:text-[#C5A059] underline underline-offset-4 transition-colors"
                title="Aashif Khan on LinkedIn"
              >
                {SALON_INFO.developer.name}
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5 pl-1 border-l border-stone-900/15 dark:border-white/15">
              <a
                href={SALON_INFO.developer.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aashif Khan GitHub Profile"
                title="GitHub (@0xAashif)"
                className="p-1.5 rounded-md hover:bg-stone-900/5 dark:hover:bg-white/10 text-[#141413] dark:text-[#F4F1EA] hover:text-[#9A7848] dark:hover:text-[#C5A059] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={SALON_INFO.developer.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aashif Khan LinkedIn Profile"
                title="LinkedIn (Aashif Khan)"
                className="p-1.5 rounded-md hover:bg-stone-900/5 dark:hover:bg-white/10 text-[#141413] dark:text-[#F4F1EA] hover:text-[#9A7848] dark:hover:text-[#C5A059] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </span>
          </div>

          <p className="text-center md:text-right">
            7897+5X4, Bhensakhedi Road, near The Fitness Planet, Bhopal, MP 462030
          </p>
        </div>

      </div>
    </footer>
  );
}
