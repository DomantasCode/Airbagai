import React from 'react';
import { SectionId } from '../types';
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, Facebook, Instagram, Wrench, ChevronRight } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = React.useState({
        cname: '',
        cemail: '',
        ctelephone: '',
        cmessage: ''
    });
    const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null, text: string }>({ type: null, text: '' });
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, text: '' });

        const data = new FormData();
        data.append('cname', formData.cname);
        data.append('cemail', formData.cemail);
        data.append('ctelephone', formData.ctelephone);
        data.append('cmessage', formData.cmessage);

        try {
            const response = await fetch('/mail.php', {
                method: 'POST',
                body: data,
            });

            // Attempt to parse JSON response. Note: mail.php relies on 'die($output)'.
            const result = await response.json();

            if (result.type === 'message') {
                setStatus({ type: 'success', text: result.text });
                setFormData({ cname: '', cemail: '', ctelephone: '', cmessage: '' });
            } else {
                setStatus({ type: 'error', text: result.text || 'Įvyko klaida siunčiant žinutę.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', text: 'Nepavyko susisiekti su serveriu. Bandykite vėliau arba skambinkite telefonu.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {status.text && (
                <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                    {status.text}
                </div>
            )}

            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Vardas</label>
                <input
                    type="text"
                    name="cname"
                    value={formData.cname}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:border-red-600 focus:bg-zinc-800 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600"
                    placeholder="Jūsų vardas"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">El. Paštas</label>
                <input
                    type="email"
                    name="cemail"
                    value={formData.cemail}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:border-red-600 focus:bg-zinc-800 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600"
                    placeholder="jusu@pastas.lt"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Telefonas</label>
                <input
                    type="tel"
                    name="ctelephone"
                    value={formData.ctelephone}
                    onChange={handleChange}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:border-red-600 focus:bg-zinc-800 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600"
                    placeholder="+370..."
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Žinutė</label>
                <textarea
                    rows={4}
                    name="cmessage"
                    value={formData.cmessage}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:border-red-600 focus:bg-zinc-800 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600 resize-none"
                    placeholder="Kuo galime padėti?"
                ></textarea>
            </div>

            <button disabled={loading} className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-3 uppercase tracking-widest text-sm mt-2 group-hover:scale-[1.02]">
                {loading ? 'Siunčiama...' : <>Siųsti Žinutę <Send size={18} /></>}
            </button>
        </form>
    );
};

export const Contact: React.FC = () => {
    const scrollTo = (id: SectionId) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer id={SectionId.CONTACT} className="bg-white pt-12 md:pt-16 relative border-t border-zinc-100">

            {/* --- WHITE SECTION: Contact Cards, Form, Map --- */}
            <div className="container mx-auto px-6 relative z-10 pb-16 md:pb-24">

                <FadeIn direction="down">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">Susisiekite su mumis</span>
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase">Kontaktai ir Užklausos</h2>
                    </div>
                </FadeIn>

                {/* Contact Info Cards Grid */}
                <FadeIn delay={100}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">

                        {/* Card 1: Phone */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.1)] transition-all duration-300 group text-center border border-zinc-100/50 hover:border-red-100/50 relative overflow-hidden">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Phone size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Skambinti</h4>

                            <div className="space-y-3">
                                <a href="tel:+37067000800" className="block text-xl font-black text-zinc-900 hover:text-red-600 transition-colors">
                                    +370 670 00800
                                </a>
                                <div className="w-8 h-px bg-zinc-200 mx-auto"></div>
                                <a href="tel:+37064041777" className="block text-xl font-black text-zinc-900 hover:text-red-600 transition-colors">
                                    +370 640 41777
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Viber */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.1)] transition-all duration-300 group text-center border border-zinc-100/50 hover:border-red-100/50 relative overflow-hidden">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <MessageSquare size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Viber / WhatsApp</h4>

                            <div className="flex flex-col items-center">
                                <p className="text-xl font-black text-zinc-900 mb-2">+370 670 00800</p>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wide">
                                    <Send size={10} />
                                    Siųskite nuotraukas
                                </span>
                            </div>
                        </div>

                        {/* Card 3: Email */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.1)] transition-all duration-300 group text-center border border-zinc-100/50 hover:border-red-100/50 relative overflow-hidden">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Mail size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">El. Paštas</h4>

                            <div className="flex flex-col items-center">
                                <a href="mailto:airbagucentras@gmail.com" className="text-lg font-bold text-zinc-900 hover:text-red-600 transition-colors break-all mb-2">
                                    airbagucentras<br />@gmail.com
                                </a>
                                <p className="text-xs text-zinc-400 font-medium">Atsakome per 24 val.</p>
                            </div>
                        </div>

                        {/* Card 4: Location */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.1)] transition-all duration-300 group text-center border border-zinc-100/50 hover:border-red-100/50 relative overflow-hidden">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <MapPin size={32} className="text-red-600" />
                            </div>
                            <h4 className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Adresas</h4>

                            <div className="flex flex-col items-center">
                                <p className="text-xl font-black text-zinc-900 mb-1">Šilutės pl. 101B</p>
                                <p className="text-sm text-zinc-500 mb-4">Klaipėda, Lietuva</p>
                                <a href="https://maps.google.com/?q=Šilutės+pl.+101B,+Klaipėda" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-red-600 uppercase tracking-wider hover:text-red-700 hover:underline">
                                    Rodyti žemėlapyje
                                </a>
                            </div>
                        </div>

                    </div>
                </FadeIn>

                {/* Main Content Area: Form + Map */}
                <FadeIn delay={200} className="w-full">
                    <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl">

                        {/* Contact Form - Now Dark & Premium */}
                        <div className="lg:w-5/12 order-2 lg:order-1 bg-zinc-900 p-8 md:p-12 relative overflow-hidden group">
                            {/* Background effects */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-black text-white uppercase mb-2">
                                        Rašyti Užklausą
                                    </h3>
                                    <p className="text-zinc-400 text-sm">Užpildykite formą ir mes susisieksime su jumis.</p>
                                    <div className="h-1 w-20 bg-red-600 mt-4"></div>
                                </div>

                                <ContactForm />
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="lg:w-7/12 min-h-[350px] md:min-h-[600px] bg-zinc-100 relative order-1 lg:order-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.835773245455!2d21.1618053!3d55.7001423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4db64132104e1%3A0xc39281c5f35d648!2s%C5%A0ilut%C4%97s%20pl.%20101B%2C%2095112%20Klaip%C4%97da!5e0!3m2!1sen!2slt!4v1709900000000!5m2!1sen!2slt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            {/* Working Hours Overlay - Light Theme - Attached to corner to hide map controls */}
                            <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-tr-3xl border-t border-r border-zinc-200 shadow-2xl max-w-[260px] md:max-w-sm z-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="text-red-600" size={24} />
                                    <h4 className="text-zinc-900 font-bold uppercase text-xs tracking-widest">Darbo Laikas</h4>
                                </div>
                                <ul className="text-sm text-zinc-600 space-y-2 font-medium">
                                    <li className="flex justify-between gap-6 md:gap-12 border-b border-zinc-100 pb-1.5"><span>I-V</span> <span className="text-zinc-900 font-bold">08:00 - 17:00</span></li>
                                    <li className="flex justify-between gap-6 md:gap-12 pt-1"><span>VI-VII</span> <span className="text-red-600 font-bold">Nedirbame</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* --- DARK "SERIOUS" FOOTER SECTION --- */}
            <div className="bg-zinc-950 text-white pt-12 md:pt-16 pb-6 border-t border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-6 border-b border-zinc-800 pb-8">

                        {/* Column 1: Brand & Socials */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">
                                    <Wrench size={20} />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-xl font-black uppercase tracking-tight">Airbag<span className="text-red-600">Centras</span></span>
                                    <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-1">Saugos Sistemos</span>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Aukščiausios kokybės SRS sistemų remontas, panelių restauravimas ir programavimas. Saugumas yra mūsų prioritetas.
                            </p>

                            <div className="flex gap-4 pt-2">
                                <a href="https://www.facebook.com/profile.php?id=61570498691373" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2] transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.instagram.com/airbagucentras/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#E4405F] hover:bg-[#E4405F] transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Navigation */}
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">Navigacija</h4>
                            <ul className="space-y-3 md:space-y-4">
                                <li>
                                    <button onClick={() => scrollTo(SectionId.SERVICES)} className="text-zinc-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Paslaugos
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollTo(SectionId.ABOUT)} className="text-zinc-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Apie mus
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollTo(SectionId.BEFORE_AFTER)} className="text-zinc-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Darbai
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollTo(SectionId.DELIVERY)} className="text-zinc-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Dalių pristatymas
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contacts Short */}
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">Kontaktai</h4>
                            <ul className="space-y-3 md:space-y-4 text-sm text-zinc-400">
                                <li className="flex gap-3">
                                    <MapPin size={18} className="text-red-600 shrink-0" />
                                    <span>Šilutės pl. 101B, Klaipėda</span>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <Phone size={18} className="text-red-600 shrink-0" />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-zinc-400 hover:text-red-500 transition-colors cursor-pointer">+370 670 00800</span>
                                        <span className="text-zinc-400 hover:text-red-500 transition-colors cursor-pointer">+370 640 41777</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Mail size={18} className="text-red-600 shrink-0" />
                                    <span className="hover:text-red-500 transition-colors cursor-pointer">airbagucentras@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Work Hours */}
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">Darbo Laikas</h4>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span>Pirmadienis</span> <span>08:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span>Antradienis</span> <span>08:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span>Trečiadienis</span> <span>08:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span>Ketvirtadienis</span> <span>08:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span>Penktadienis</span> <span>08:00 - 17:00</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-medium uppercase tracking-wider text-center gap-4">
                        <p>© 2026 UAB „AVR PROJEKTAI“.</p>
                        <a href="https://www.mozetech.lt" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                            Svetainę kūrė: MozeTech
                        </a>
                    </div>
                </div>
            </div >
        </footer >
    );
};