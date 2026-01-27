import React from 'react';
import { SectionId } from '../types';
import { Facebook } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export const BeforeAfter: React.FC = () => {
  const examples = [
    {
      before: "/assets/dashboard-before.jpg",
      after: "/assets/dashboard-after.jpg"
    },
    {
      before: "/assets/interior-before.jpg",
      after: "/assets/interior-after.jpg"
    },
    {
      before: "/assets/qashqai-before.jpg",
      after: "/assets/qashqai-after.jpg"
    },
    {
      before: "/assets/citroen-before.jpg",
      after: "/assets/citroen-after.jpg"
    }
  ];

  return (
    <section id={SectionId.BEFORE_AFTER} className="py-16 md:py-24 bg-zinc-100">
      <div className="container mx-auto px-6">
        <FadeIn direction="down">
          <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Mūsų Darbai</span>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase">Rezultatų Galerija</h2>
            <div className="w-16 md:w-24 h-1.5 bg-zinc-900 mt-4 md:mt-6"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-0">
          {examples.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="flex flex-col shadow-xl md:shadow-2xl rounded-2xl overflow-hidden bg-white group">

                {/* Top Image - Before */}
                <div className="relative h-40 md:h-48 w-full border-b-2 border-white">
                  <img src={item.before} alt="Prieš" className="w-full h-full object-cover transition-all duration-500" />

                  {/* Red Badge Bottom Left */}
                  <div className="absolute bottom-0 left-0 bg-[#D81E28] text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
                    Prieš Remontą
                  </div>
                </div>

                {/* Bottom Image - After */}
                <div className="relative h-40 md:h-48 w-full">
                  <img src={item.after} alt="Po" className="w-full h-full object-cover" />

                  {/* Dark Blue/Grey Badge Top Left */}
                  <div className="absolute top-0 left-0 bg-[#2A3140] text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-[11px] font-bold tracking-widest uppercase shadow-md">
                    Po Remonto
                  </div>
                </div>

                {/* Description Footer */}


              </div>
            </FadeIn>
          ))}
        </div>


        <FadeIn delay={100} direction="up">
          <div className="mt-12 flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61570498691373"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 group w-full md:w-auto"
            >
              <Facebook size={24} className="hidden md:block group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="text-sm md:text-base text-center">Daugiau pavyzdžių Facebook'e</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section >
  );
};