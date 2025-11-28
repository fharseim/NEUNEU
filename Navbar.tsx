import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-bg/90 backdrop-blur-md border-b border-luxury-border py-4'
            : 'bg-transparent border-b border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo - Mix blend difference ensures visibility on both light and dark backgrounds (like Hero image) */}
          <a href="#" className="font-serif text-2xl tracking-[0.1em] text-luxury-text z-50 relative uppercase mix-blend-difference text-white">
            KOHLHOFF PROJEKTE
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-300 mix-blend-difference'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-luxury-text mix-blend-difference text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-luxury-bg z-40 flex flex-col items-center justify-center transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-4xl text-luxury-text hover:text-luxury-gold hover:italic transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;