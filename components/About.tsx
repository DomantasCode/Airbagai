import React from 'react';
import { SectionId } from '../types';
import { Shield, Clock, Users, Star } from 'lucide-react';

import { FadeIn } from './animations/FadeIn';

export const About: React.FC = () => {
    return (
        <section id={SectionId.ABOUT} className="py-16 md:py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-red-900/50 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <FadeIn direction="right" className="flex-1">
                        <span className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Apie Mus</span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
                            Jūsų saugumą <span className="text-red-600">ir interjerą</span> atkuriame kaip sau.
                        </h2>

                        <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
                            <p>
                                <strong className="text-white">AIRBAG CENTRAS</strong> – tai komanda, kuri specializuojasi automobilio saugos sistemų atkūrime ir interjero restauracijoje.
                            </p>
                            <p>
                                Mes ne tik remontuojame <strong className="text-white">oro pagalves</strong>, <strong className="text-white">saugos diržus</strong> ar <strong className="text-white">SRS modulius</strong>, bet ir pasirūpiname estetiniu automobilio vaizdu – nuo <strong className="text-white">panelių restauravimo</strong> iki <strong className="text-white">salonų siuvimo</strong>.
                            </p>
                            <p>
                                Kiekvienas darbas atliekamas su precizišku tikslumu, kad jūsų automobilis būtų ne tik gražus, bet ir maksimaliai saugus kelyje.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Visual/Image Side (Optional, or just decorative elements) */}
                    <FadeIn direction="left" delay={200} className="flex-1 w-full relative">
                        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group">
                            {/* Placeholder for an image, or use one of the existing ones */}
                            <img
                                src="/assets/about-ferrari.jpg"
                                alt="Airbag Centras Workshop"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                                    <div className="flex items-center gap-3 text-white">
                                        <Star className="fill-red-600 text-red-600 animate-pulse" size={24} />
                                        <div>
                                            <p className="font-bold text-sm uppercase tracking-wide">Dėmesys detalėms</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section >
    );
};
