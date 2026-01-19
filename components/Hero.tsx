import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById(SectionId.CONTACT);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-zinc-950 min-h-screen flex items-start md:items-center pt-32 md:pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
          alt="Professional Workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-zinc-950 z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <div className="h-[2px] w-8 md:w-12 bg-red-600"></div>
            <span className="text-zinc-400 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm">Profesionalus Servisas Klaipėdoje</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
            Remontuojame <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Oro Pagalves</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 font-light mb-8 md:mb-10 max-w-xl md:max-w-2xl leading-relaxed">
            Specializuotas automobilių saugos sistemų centras. Atkuriame gamyklinį saugumą ir estetiką.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-6 md:gap-x-8 text-sm text-white font-bold uppercase tracking-wider mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-red-500 shrink-0" size={20} />
              <span>Panelių Restauravimas</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-red-500 shrink-0" size={20} />
              <span>Saugos Diržų Remontas</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-red-500 shrink-0" size={20} />
              <span>SRS Programavimas</span>
            </div>
          </div>

          <a
            href="tel:+37067000800"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-900/40 group"
          >
            <Phone size={18} className="fill-white group-hover:animate-pulse" />
            Skambinti
          </a>
        </div>
      </div>
    </div>
  );
};