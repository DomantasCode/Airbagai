import React from 'react';
import { Car, Search, Wrench, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Car size={32} />,
      title: '1. Atvykimas',
      text: 'Atvykstate į servisą Klaipėdoje su automobiliu ARBA atsiunčiate nuimtą detalę kurjeriu.'
    },
    {
      icon: <Search size={32} />,
      title: '2. Apžiūra',
      text: 'Meistras įvertina pažeidimus, atlieka diagnostiką ir suderina tikslią darbų kainą.'
    },
    {
      icon: <Wrench size={32} />,
      title: '3. Remontas',
      text: 'Profesionalus atkūrimas mūsų ceche naudojant originalias medžiagas ir technologijas.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: '4. Rezultatas',
      text: 'Atsiimate sutvarkytą automobilį ar detalę. Suteikiame garantiją atliktiems darbams.'
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-16 md:py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <div>
             <span className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Kaip mes dirbame</span>
             <h2 className="text-3xl md:text-4xl font-black uppercase">Remonto Procesas</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-zinc-800 z-0"></div>
              )}
              
              {/* Connector - Mobile (Vertical Line) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute left-8 top-20 bottom-[-24px] w-[2px] bg-zinc-800 z-0"></div>
              )}
              
              <div className="relative z-10 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition-colors duration-300 h-full flex flex-row md:flex-col items-start md:items-start gap-4 md:gap-0">
                <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center text-white md:mb-6 shrink-0 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-lg z-10 border border-zinc-700 md:border-transparent">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 uppercase">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};