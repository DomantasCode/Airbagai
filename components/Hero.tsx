import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

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
          <FadeIn delay={100} direction="down">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-[2px] w-8 md:w-12 bg-red-600"></div>
              <span className="text-zinc-400 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm">Profesionalus Servisas Klaipėdoje</span>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 pr-8">
              Oro Pagalvių ir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 pb-2 pr-4">Interjero detalių Remontas</span>
            </h1>
          </FadeIn>

          <FadeIn delay={400} direction="up">
            <p className="text-lg md:text-xl text-zinc-300 font-light mb-8 md:mb-10 max-w-xl md:max-w-2xl leading-relaxed">
              Profesionalus saugos sistemų atkūrimas ir estetinė interjero restauracija.
              <br className="hidden md:block" />
              <span>Viskas, ko reikia Jūsų automobiliui po įvykio.</span>
            </p>
          </FadeIn>

          <FadeIn delay={600} direction="up">
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-6 md:gap-x-8 text-sm text-white font-bold uppercase tracking-wider mb-8 md:mb-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-red-500 shrink-0" size={18} />
                <span>Oro Pagalvių Atkūrimas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-red-500 shrink-0" size={18} />
                <span>Interjero Restauravimas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-red-500 shrink-0" size={18} />
                <span>SRS Programavimas</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={800} direction="up">
            <a
              href="tel:+37067000800"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex md:hidden items-center justify-center gap-2 shadow-lg shadow-red-900/40 group"
            >
              <Phone size={18} className="fill-white group-hover:animate-pulse" />
              Skambinti
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};