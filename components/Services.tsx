import React from 'react';
import { SectionId } from '../types';
import { Layers, Disc, Zap, Armchair, Shield, Settings } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16">
          <div className="text-center md:text-left w-full">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase tracking-tight">Paslaugų Katalogas</h2>
            <div className="h-1.5 w-24 bg-red-600 mt-4 mx-auto md:mx-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* Main Large Card - Airbags */}
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-6 md:p-10 relative overflow-hidden group h-full flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Shield size={160} className="md:w-[200px] md:h-[200px] text-white" />
            </div>
            <div className="relative z-10">
              <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                Pagrindinė veikla
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4">Oro Pagalvių Remontas</h3>
              <p className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 max-w-lg">
                Atkuriame iššovusias oro pagalves (vairo, keleivio, sėdynių, stogo). Naudojame specializuotą įrangą ir medžiagas, atitinkančias saugumo standartus.
              </p>
            </div>
            <div className="relative z-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-zinc-300 font-medium text-sm md:text-base">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Vairo pagalvės</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Keleivio pagalvės</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Užuolaidos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Kelių apsaugos</li>
              </ul>
            </div>
          </div>

          {/* Dashboards & SRS Systems - Split Layout on Desktop / Separate Cards on Mobile */}
          <div className="flex flex-col gap-4 md:gap-0 h-full md:bg-white md:rounded-3xl md:border md:border-zinc-100 md:shadow-xl md:hover:shadow-2xl md:transition-shadow md:group md:overflow-hidden">

            {/* Top Half: Dashboards */}
            <div className="flex-1 bg-white rounded-3xl border border-zinc-100 shadow-xl md:shadow-none md:rounded-none md:border-0 md:bg-transparent p-6 md:p-8 flex flex-col justify-center group">
              {/* Mobile Layout: Icon Block, Standard Flow */}
              <div className="md:hidden">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Armchair size={24} />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 uppercase mb-3">Interjero Detalės</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Vairo aptraukimas oda, plastiko virinimas, estetinio vaizdo atkūrimas ir smulkių defektų šalinimas.
                </p>
              </div>

              {/* Desktop Layout: Flex Row Icon+Title */}
              <div className="hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Armchair size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">Interjero Detalės</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed pl-12">
                  Vairo aptraukimas oda, plastiko virinimas, estetinio vaizdo atkūrimas ir smulkių defektų šalinimas.
                </p>
              </div>
            </div>

            {/* Separator Line (Desktop Only) */}
            <div className="hidden md:block px-6 md:px-8">
              <div className="h-px bg-zinc-200 w-full"></div>
            </div>

            {/* Bottom Half: SRS Systems */}
            <div className="flex-1 bg-white rounded-3xl border border-zinc-100 shadow-xl md:shadow-none md:rounded-none md:border-0 md:bg-transparent p-6 md:p-8 flex flex-col justify-center group">
              {/* Mobile Layout: Icon Block, Standard Flow */}
              <div className="md:hidden">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Settings size={24} />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 uppercase mb-3">SRS Saugos Sistemos</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Visų SRS sistemos komponentų patikra, montavimas ir derinimas.
                </p>
              </div>

              {/* Desktop Layout: Flex Row Icon+Title */}
              <div className="hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white md:bg-white border border-zinc-200 rounded-lg group-hover:border-red-600 group-hover:text-red-600 transition-colors">
                    <Settings size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">SRS Saugos Sistemos</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed pl-12">
                  Visų SRS sistemos komponentų patikra, montavimas ir derinimas.
                </p>
              </div>
            </div>
          </div>

          {/* Seatbelts */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-100 shadow-xl hover:shadow-2xl transition-shadow group h-full">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Disc size={24} />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-zinc-900 uppercase mb-3">Saugos Diržų Remontas</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Užstrigusių diržų atblokavimas, pirotechninių užtaisų keitimas, mechanizmo valymas.
            </p>
          </div>

          {/* Diagnostics & Programming */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-100 shadow-xl hover:shadow-2xl transition-shadow group h-full">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-zinc-900 uppercase mb-3">Diagnostika ir Perprogramavimas</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Profesionali elektrinių sistemų diagnostika. Nustatome sudėtingus gedimus, tikriname laidyną, adaptuojame naujus komponentus ir šaliname elektronines klaidas.
            </p>
          </div>

          {/* Interior Repair */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-100 shadow-xl hover:shadow-2xl transition-shadow group h-full">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Layers size={24} />
            </div>
            <h4 className="text-lg md:text-xl font-bold text-zinc-900 uppercase mb-3">Panelių Restauravimas</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Panelės atkūrimas po sprogimo. Atstatoma originali tekstūra, spalva ir forma.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};