import { Moon, Sun } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { to: '/', label: 'Showcase', end: true },
  { to: '/craftsman', label: 'Craftsman', end: false },
  { to: '/menu', label: 'Menu', end: false },
  { to: '/salon', label: 'Salon', end: false },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F4EF]/80 dark:bg-[#070709]/80 backdrop-blur-md transition-colors duration-300 border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Original Logo (Exact @logo.jpg, zero CSS filters) */}
        <Link 
          to="/" 
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Shivangi Hair Salon Home"
        >
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-black shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Shivangi Hair Salon Men's Premium Grooming Logo" 
              className="w-full h-full object-cover"
              style={{ filter: 'none' }}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <span className="font-display text-sm sm:text-lg font-bold tracking-wider text-[#141414] dark:text-[#F6F4EF]">
            Shivangi Hair Salon
          </span>
        </Link>

        {/* Center: Minimalist Route Navigation (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#141414] dark:text-[#F6F4EF] after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[1.5px] after:bg-[#C5A059]'
                    : 'text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F6F4EF]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Crisp Lucide SVG Icon Toggle (Moon / Sun) */}
        <button
          type="button"
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#141414] dark:text-[#F6F4EF]"
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

      {/* Mobile Route Strip */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden flex items-center justify-around px-3 py-2 border-t border-[#C5A059]/15 text-[10px] font-bold uppercase tracking-[0.18em]"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-2.5 py-1 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#C5A059] bg-[#C5A059]/10'
                  : 'text-[#635E54] dark:text-[#A6A095] hover:text-[#141414] dark:hover:text-[#F6F4EF]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
