import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface Language {
    code: string;
    label: string;
}

const languages: Language[] = [
    { code: 'LT', label: 'Lietuvių' },
    { code: 'EN', label: 'English' },
    { code: 'RU', label: 'Русский' },
    { code: 'LV', label: 'Latviešu' },
    { code: 'EE', label: 'Eesti' },
    { code: 'PL', label: 'Polski' },
];

export const LanguageSelector: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(languages[0]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (mobile) {
        return (
            <div className="flex flex-col items-center w-full mt-6 pb-6 border-b border-white/10" ref={containerRef}>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest text-center mb-4">Pasirinkite Kalbą</p>
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-all w-64 justify-between group"
                    >
                        <div className="flex items-center gap-3">
                            <Globe size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                            <span className="font-bold text-sm uppercase tracking-wider">{selected.label}</span>
                        </div>
                        <ChevronDown size={16} className={`text-zinc-400 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl z-50">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setSelected(lang);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-6 py-3 text-sm font-bold transition-colors flex items-center justify-between ${selected.code === lang.code ? 'text-red-500 bg-white/5' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {lang.label}
                                    {selected.code === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/5 hover:border-white/10 transition-all group"
            >
                <Globe size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-bold text-xs uppercase tracking-wider">{selected.code}</span>
                <ChevronDown size={14} className={`text-zinc-400 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl py-2 border border-zinc-100 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                    <div className="px-4 py-2 border-b border-zinc-50 mb-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Kalba</span>
                    </div>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setSelected(lang);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm font-bold transition-colors flex items-center justify-between group ${selected.code === lang.code ? 'text-red-600 bg-red-50' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                                }`}
                        >
                            {lang.label}
                            {selected.code === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
