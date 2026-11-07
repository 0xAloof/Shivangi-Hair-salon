import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F1E8]/85 dark:bg-[#121212]/85 backdrop-blur-md transition-colors duration-250 border-0 shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Original Logo (Exact @logo.jpg, zero CSS filters) */}
        <a 
          href="#" 
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Shivangi Hair Salon Home"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-black shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Shivangi Hair Salon Men's Premium Grooming Logo" 
              className="w-full h-full object-cover"
              style={{ filter: 'none' }}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <span className="font-display text-base sm:text-lg font-bold tracking-wider text-[#141414] dark:text-[#F5F1E8]">
            Shivangi Hair Salon
          </span>
        </a>

        {/* Center: Minimalist Anchor Navigation (Editorial & Low Profile) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#635E54] dark:text-[#A6A095]">
          <a href="#showcase" className="hover:text-[#141414] dark:hover:text-[#F5F1E8] transition-colors">
            Showcase
          </a>
          <a href="#barber" className="hover:text-[#141414] dark:hover:text-[#F5F1E8] transition-colors">
            Craftsman
          </a>
          <a href="#services" className="hover:text-[#141414] dark:hover:text-[#F5F1E8] transition-colors">
            Menu
          </a>
          <a href="#location" className="hover:text-[#141414] dark:hover:text-[#F5F1E8] transition-colors">
            Studio
          </a>
        </nav>

        {/* Right: Crisp Lucide SVG Icon Toggle (Moon / Sun) - Zero emojis */}
        <button
          type="button"
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#141414] dark:text-[#F5F1E8]"
          aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4 stroke-[1.75]" />
          ) : (
            <Sun className="w-4 h-4 stroke-[1.75]" />
          )}
        </button>

      </div>
    </header>
  );
}
