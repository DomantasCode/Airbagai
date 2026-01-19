import React from 'react';
import { SectionId } from '../types';
import { Phone, Package, Globe, Truck } from 'lucide-react';

export const Delivery: React.FC = () => {
  return (
    <section id={SectionId.DELIVERY} className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden border-t border-zinc-800">
      
      {/* Subtle Static Background to indicate Global reach without being flashy */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
            alt="World Map" 
            className="w-full h-full object-cover invert"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Header + General Info */}
          <div className="space-y-6 md:space-y-8">
             {/* Header moved here for alignment */}
             <div>
                <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm block mb-2 md:mb-3">Logistika</span>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
                  Dalių Pristatymas
                </h2>
                <div className="w-16 md:w-24 h-1.5 bg-red-600 mt-4 md:mt-6"></div>
             </div>

             <div className="prose prose-invert">
                <p className="text-lg md:text-2xl text-zinc-200 font-light leading-snug">
                  Dalis pristatome Lietuvoje, Baltijos šalyse ir visoje Europoje.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-4">
                  Suremontuotas dalis siunčiame ne tik vietinėje rinkoje, bet ir į kitas Europos šalis. Bendradarbiaujame su tarptautiniais logistikos partneriais, kad užtikrintume greitą detalių grąžinimą.
                </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                   <div className="bg-zinc-800 p-3 rounded-xl text-red-500 shrink-0">
                      <Truck size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-sm">Tarptautinis Siuntimas</h4>
                   </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                   <div className="bg-zinc-800 p-3 rounded-xl text-red-500 shrink-0">
                      <Package size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-sm">Saugus Pakavimas</h4>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Baltics Card (Clean, Professional Style) */}
          <div className="relative pt-2">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden group">
               
               {/* Decorative background icon */}
               <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4">
                  <Globe size={150} className="md:w-[200px] md:h-[200px]" />
               </div>

               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                     <div className="bg-red-600 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                        Baltijos Šalys
                     </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-zinc-900 uppercase mb-3 md:mb-4">
                     Į Latviją, Estiją
                  </h3>
                  
                  <p className="text-zinc-500 text-sm md:text-base mb-6 md:mb-8 border-l-2 border-red-600 pl-4">
                     Susisiekite dėl detalių pristatymo tiesiogiai žemiau nurodytu telefonu.
                  </p>

                  <a 
                    href="tel:+37129222572" 
                    className="flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-2xl transition-all group-hover:shadow-lg group-hover:shadow-red-600/20"
                  >
                     <div className="px-4 py-2 md:px-6 md:py-4">
                        <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1">Skambinti</span>
                        <span className="text-xl md:text-3xl font-bold font-mono">+371 292 22572</span>
                     </div>
                     <div className="bg-red-600 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white shrink-0">
                        <Phone size={24} className="md:w-[28px] md:h-[28px]" />
                     </div>
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};