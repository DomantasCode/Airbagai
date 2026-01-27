import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Phone, Wrench, Facebook } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-zinc-900/95 backdrop-blur-xl border-zinc-800 py-3 shadow-lg'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollTo(SectionId.HOME)}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <img
              src="/assets/logo.png"
              alt="Airbag Centras"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-black/20 backdrop-blur-md">
            {[
              { label: 'Paslaugos', id: SectionId.SERVICES },
              { label: 'Apie mus', id: SectionId.ABOUT },
              { label: 'Darbai', id: SectionId.BEFORE_AFTER },
              { label: 'Dalių pristatymas', id: SectionId.DELIVERY },
              { label: 'Kontaktai', id: SectionId.CONTACT },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="px-6 py-2 text-white hover:bg-white/10 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">

            <a
              href="https://www.facebook.com/profile.php?id=61570498691373"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-red-600 text-white rounded-xl transition-all duration-300 group"
            >
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+37067000800"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-900/30 group"
            >
              <Phone size={18} className="fill-white group-hover:animate-pulse" />
              <span>+370 670 00800</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-zinc-950 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto pb-10`}>
        <div className="flex flex-col gap-6 text-center">

          <button onClick={() => scrollTo(SectionId.SERVICES)} className="text-2xl font-black text-white uppercase tracking-wider">Paslaugos</button>
          <button onClick={() => scrollTo(SectionId.ABOUT)} className="text-2xl font-black text-white uppercase tracking-wider">Apie mus</button>
          <button onClick={() => scrollTo(SectionId.BEFORE_AFTER)} className="text-2xl font-black text-white uppercase tracking-wider">Darbai</button>
          <button onClick={() => scrollTo(SectionId.DELIVERY)} className="text-2xl font-black text-white uppercase tracking-wider">Dalių pristatymas</button>
          <button onClick={() => scrollTo(SectionId.CONTACT)} className="text-2xl font-black text-white uppercase tracking-wider">Kontaktai</button>

          <div className="mt-8 flex flex-col gap-4">
            <a href="tel:+37067000800" className="flex items-center gap-2 justify-center w-full bg-red-600 text-white py-4 rounded-xl font-bold text-xl uppercase">
              <Phone size={24} /> Skambinti
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570498691373"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-xl uppercase"
            >
              <Facebook size={24} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};