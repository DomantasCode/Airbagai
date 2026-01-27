import React from 'react';
import { SectionId } from '../types';
import { Phone, Package, Globe, Truck, MapPin, ExternalLink } from 'lucide-react';

export const Delivery: React.FC = () => {
   return (
      <section id={SectionId.DELIVERY} className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden border-t border-zinc-800">

         {/* Subtle Static Background */}
         <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png"
               alt="World Map"
               className="w-full h-full object-cover invert"
            />
         </div>

         <div className="container mx-auto px-6 relative z-10">

            <div className="text-center mb-16">
               <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm block mb-3">Logistika</span>
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight max-w-3xl mx-auto">
                  Dalių Pristatymas
               </h2>
               <div className="w-24 h-1.5 bg-red-600 mt-6 mx-auto"></div>
               <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
                  Bendradarbiaujame su patikimais vežėjais, todėl užtikriname sklandų dalių pristatymą visame pasaulyje.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

               {/* Lietuva */}
               <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-6 rounded-2xl hover:border-red-600/50 transition-all group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-6 -bottom-6 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                     <MapPin size={120} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-600/20 p-2.5 rounded-xl text-red-500 shadow-sm shadow-red-900/20">
                           <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase tracking-wide">Lietuva</h3>
                     </div>

                     <div className="flex-grow space-y-3">
                        {[
                           { name: 'DPD', icon: Package },
                           { name: 'Venipak', icon: Package },
                           { name: 'Autobusų siuntos', icon: Truck },
                        ].map((item, idx) => (
                           <div key={idx} className="flex items-center gap-3 bg-zinc-950/30 p-3 rounded-lg border border-zinc-800/50">
                              <item.icon size={18} className="text-red-500" />
                              <span className="font-medium text-zinc-200">{item.name}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Ispanija */}
               <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-6 rounded-2xl hover:border-red-600/50 transition-all group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-6 -bottom-6 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                     <Globe size={120} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-600/20 p-2.5 rounded-xl text-red-500 shadow-sm shadow-red-900/20">
                           <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase tracking-wide">Ispanija</h3>
                     </div>

                     <div className="flex-grow flex flex-col justify-center bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50 text-center">
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1">Kontaktas</p>
                        <p className="text-2xl font-bold text-white mb-3">Rimantė</p>
                        <a href="tel:+37062410352" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition-colors w-full">
                           <Phone size={18} />
                           <span>+370 624 10 352</span>
                        </a>
                     </div>
                  </div>
               </div>

               {/* Airija */}
               <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-6 rounded-2xl hover:border-red-600/50 transition-all group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-6 -bottom-6 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                     <Globe size={120} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-600/20 p-2.5 rounded-xl text-red-500 shadow-sm shadow-red-900/20">
                           <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase tracking-wide">Airija</h3>
                     </div>

                     <div className="flex-grow flex flex-col justify-center bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50 text-center">
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1">Vežėjas</p>
                        <p className="text-xl font-bold text-white mb-3">MV Transport</p>
                        <a href="https://mvtransport.lt/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg font-bold transition-colors w-full border border-zinc-700">
                           <span>Aplankyti svetainę</span>
                           <ExternalLink size={18} />
                        </a>
                     </div>
                  </div>
               </div>

               {/* Baltijos Šalys */}
               <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-6 rounded-2xl hover:border-red-600/50 transition-all group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute -right-6 -bottom-6 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
                     <Globe size={120} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-red-600/20 p-2.5 rounded-xl text-red-500 shadow-sm shadow-red-900/20">
                           <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase tracking-wide">Baltijos Šalys</h3>
                     </div>

                     <div className="flex-grow flex flex-col justify-center bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50 text-center">
                        <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-1">Šalys</p>
                        <p className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                           <span>Latvija</span>
                           <span className="text-red-600">•</span>
                           <span>Estija</span>
                        </p>
                        <a href="tel:+37129222572" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-bold transition-colors w-full">
                           <Phone size={18} />
                           <span>+371 292 22572</span>
                        </a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};