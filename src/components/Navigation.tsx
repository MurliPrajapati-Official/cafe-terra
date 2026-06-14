import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-ivory border-b border-border-light ${
        scrolled ? 'py-4' : 'py-6 md:h-20 flex items-center'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center md:space-x-12">
          <a href="#" className="font-display text-2xl tracking-tighter uppercase font-bold text-primary">
            Basho's
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Experience', 'Menu', 'Celebrations', 'Stories'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <a 
          href="#reservation" 
          className="hidden md:inline-block px-8 py-3 border border-primary text-[11px] uppercase tracking-[0.2em] font-bold text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Reserve Now
        </a>
        
        <button className="md:hidden uppercase tracking-[0.2em] font-bold text-[11px] text-primary">
          Menu
        </button>
      </div>
    </nav>
  );
}
