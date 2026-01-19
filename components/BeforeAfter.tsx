import React from 'react';
import { SectionId } from '../types';

export const BeforeAfter: React.FC = () => {
  const examples = [
    {
      title: "PRIETAISŲ SKYDELIS",
      desc: "Panelės ir vairo oro pagalvės atstatymas",
      before: "/assets/dashboard-before.jpg",
      after: "/assets/dashboard-after.jpg"
    },
    {
      title: "UŽUOLAIDINĖ PAGALVĖ",
      desc: "Stogo apmušalo ir užuolaidinės pagalvės remontas",
      before: "/assets/interior-before.jpg",
      after: "/assets/interior-after.jpg"
    },
    {
      title: "QASHQAI PANELĖ",
      desc: "Nissan Qashqai panelės ir vairo atstatymas",
      before: "/assets/qashqai-before.jpg",
      after: "/assets/qashqai-after.jpg"
    },
    {
      title: "CITROEN SALONAS",
      desc: "Citroen DS3 panelės ir salono remontas",
      before: "/assets/citroen-before.jpg",
      after: "/assets/citroen-after.jpg"
    }
  ];

  return (
    <section id={SectionId.BEFORE_AFTER} className="py-16 md:py-24 bg-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Mūsų Darbai</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase">Rezultatų Galerija</h2>
          <div className="w-16 md:w-24 h-1.5 bg-zinc-900 mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-0">
          {examples.map((item, index) => (
            <div key={index} className="flex flex-col shadow-xl md:shadow-2xl rounded-2xl overflow-hidden bg-white group">

              {/* Top Image - Before */}
              <div className="relative h-40 md:h-48 w-full border-b-2 border-white">
                <img src={item.before} alt="Prieš" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />

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
              <div className="p-4 bg-white text-center">
                <h3 className="font-bold text-zinc-900 text-xs md:text-sm uppercase">{item.title}</h3>
                <p className="text-zinc-500 text-[10px] md:text-xs mt-1">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};