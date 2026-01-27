import React from 'react';
import { SectionId } from '../types';
import { Layers, Disc, Zap, Armchair, Shield, Settings } from 'lucide-react';



const AirbagIconRed = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
    >
        {/* Large Airbag Circle */}
        <circle cx="35" cy="35" r="22" />

        {/* Head Circle */}
        <circle cx="72" cy="28" r="14" />

        {/* Body (Legs) */}
        <path d="M18 90 
             c -3 3 -8 3 -11 0 
             s -3 -8 0 -11 
             l 35 -35 
             l 14 14 
             z" />

        {/* Body (Torso) - separated by diagonal gap */}
        <path d="M68 50 
             l 15 -2 
             c 8 0 12 5 12 12 
             l -2 15 
             l -21 21 
             l -14 -14 
             z" />

        {/* Seatbelt (The Gap) is implicit by the separation of the two body parts. 
         Wait, typically the body is one piece involved with a line. 
         Let's try a simpler approach closer to the provided PNG.
         The PNG has:
         - Big circle
         - Small circle
         - A "Chair/Body" shape that is cut by a diagonal line in the middle.
     */}
    </svg>
);


import { FadeIn } from './animations/FadeIn';

export const Services: React.FC = () => {
    return (
        <section id={SectionId.SERVICES} className="py-16 md:py-24 bg-zinc-50">
            <div className="container mx-auto px-6">

                <FadeIn direction="up">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16">
                        <div className="text-center md:text-left w-full">
                            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase tracking-tight">Paslaugų Katalogas</h2>
                            <div className="h-1.5 w-24 bg-red-600 mt-4 mx-auto md:mx-0"></div>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

                    {/* Main Large Card - Airbags */}
                    <FadeIn delay={100} className="md:col-span-2 h-full">
                        <div className="bg-zinc-900 rounded-3xl p-6 md:p-10 relative overflow-hidden group h-full flex flex-col justify-between shadow-xl">
                            <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none translate-y-[215px] min-[400px]:translate-y-[185px] translate-x-[2px] md:translate-y-0 md:translate-x-0">
                                <Shield size={150} className="md:w-[280px] md:h-[280px] text-white" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                                    Pagrindinė veikla
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4">Automobilių saugos oro pagalvių remontas</h3>
                                <p className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 max-w-lg">
                                    Remontuojame saugos diržus, keleivio, vairo, stogines, bei kitas saugos pagalves.
                                </p>
                            </div>
                            <div className="relative z-10">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 md:gap-y-4 md:gap-x-8 text-zinc-300 font-medium text-sm md:text-base max-w-lg">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Vairo pagalvės</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Keleivio pagalvės</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Stoginės pagalvės</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Kitos saugos pagalvės</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Dashboards & SRS Systems - Split Layout on Desktop / Separate Cards on Mobile */}
                    <FadeIn delay={200} className="flex flex-col gap-4 md:gap-0 h-full">
                        <div className="flex flex-col gap-4 md:gap-0 h-full md:bg-zinc-900 md:rounded-3xl md:shadow-xl md:hover:shadow-2xl md:transition-shadow md:group md:overflow-hidden">

                            {/* Top Half: Dashboards */}
                            <div className="flex-1 md:p-8 flex flex-col justify-center group relative">
                                {/* Mobile Layout: Image Card */}
                                <div className="md:hidden bg-zinc-900 rounded-3xl p-6 relative overflow-hidden group shadow-xl h-[240px] flex flex-col justify-end mb-4">
                                    <div className="absolute inset-0">
                                        <img src="/assets/service-interior.jpg" alt="Interior" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 hover:scale-105 transform" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
                                            <Armchair size={20} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-wide">Interjero Detalės</h4>
                                    </div>
                                </div>

                                {/* Desktop Layout: Flex Row Icon+Title */}
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white/10 rounded-lg text-white group-hover:bg-red-600 transition-colors">
                                            <Armchair size={22} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white uppercase">Interjero Detalės</h4>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed pl-12">
                                        Odinių ir paprastų panelių remontas, salono remonto darbai, salonų siuvimas.
                                    </p>
                                </div>
                            </div>

                            {/* Separator Line (Desktop Only) */}
                            <div className="hidden md:block px-6 md:px-8">
                                <div className="h-px bg-zinc-800 w-full"></div>
                            </div>

                            {/* Bottom Half: SRS Systems */}
                            <div className="flex-1 md:p-8 flex flex-col justify-center group relative">
                                {/* Mobile Layout: Image Card */}
                                <div className="md:hidden bg-zinc-900 rounded-3xl p-6 relative overflow-hidden group shadow-xl h-[240px] flex flex-col justify-end">
                                    <div className="absolute inset-0">
                                        <img src="/assets/service-srs.jpg" alt="SRS Systems" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 hover:scale-105 transform" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
                                            <Settings size={20} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white uppercase tracking-wide">SRS Saugos Sistemos</h4>
                                    </div>
                                </div>

                                {/* Desktop Layout: Flex Row Icon+Title */}
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white/10 rounded-lg text-white group-hover:bg-red-600 transition-colors">
                                            <Settings size={22} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white uppercase">SRS Saugos Sistemos</h4>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed pl-12">
                                        Automobilio SRS modulių crash data remontas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Seatbelts - Image Card */}
                    <FadeIn delay={300} className="h-full">
                        <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 relative overflow-hidden group h-full shadow-xl hover:shadow-2xl transition-shadow min-h-[240px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <img src="/assets/service-seatbelts.png" alt="Seatbelts" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 hover:scale-105 transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
                                    <Disc size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Saugos Diržų Remontas</h4>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Diagnostics - Image Card */}
                    <FadeIn delay={400} className="h-full">
                        <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 relative overflow-hidden group h-full shadow-xl hover:shadow-2xl transition-shadow min-h-[240px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <img src="/assets/service-diagnostics.png" alt="Diagnostics" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 hover:scale-105 transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
                                    <Zap size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Diagnostika ir Perprogramavimas</h4>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Panel Repair - Image Card */}
                    <FadeIn delay={500} className="h-full">
                        <div className="bg-zinc-900 rounded-3xl p-6 md:p-8 relative overflow-hidden group h-full shadow-xl hover:shadow-2xl transition-shadow min-h-[240px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <img src="/assets/service-panels.png" alt="Panel Repair" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 hover:scale-105 transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
                                    <Layers size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Panelių Restauravimas</h4>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};