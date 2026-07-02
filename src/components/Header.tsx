import { useState } from 'react';
import {
  Search, Bell, Grid3X3, Moon, Sun, Globe, ChevronDown,
  User, Menu, X,
} from 'lucide-react';
import { navItems } from '../data/mockData';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-navy text-sm leading-tight">Corporate Secretary</div>
              <div className="text-xs text-text-secondary">Public Relation & Media Monitoring</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto scrollbar-thin">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-2 text-xs font-medium text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative hidden sm:block">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
            </button>
            <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors hidden sm:block">
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={toggleDark}
              className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors hidden sm:block"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors hidden md:block">
              <Globe size={18} />
            </button>
            <div className="hidden md:flex items-center gap-2 pl-2 border-l border-border ml-1">
              <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div className="hidden lg:block">
                <div className="text-xs font-semibold text-navy">Admin CS</div>
                <div className="text-[10px] text-text-secondary">Corporate Secretary</div>
              </div>
              <ChevronDown size={14} className="text-text-secondary" />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-text-secondary xl:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Enterprise Search – Keyword, Media, Topic, Sentiment..."
                className="flex-1 min-w-[200px] px-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <select className="px-3 py-2.5 border border-border rounded-xl text-sm text-text-secondary">
                <option>Semua Kategori</option>
                <option>Corporate News</option>
                <option>Press Release</option>
              </select>
              <select className="px-3 py-2.5 border border-border rounded-xl text-sm text-text-secondary">
                <option>Semua Sentimen</option>
                <option>Positif</option>
                <option>Netral</option>
                <option>Negatif</option>
              </select>
              <button className="btn-primary text-sm py-2.5">Cari</button>
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="xl:hidden pb-4 border-t border-border pt-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-2 text-sm text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
