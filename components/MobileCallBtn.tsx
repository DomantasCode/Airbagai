import React from 'react';
import { Phone } from 'lucide-react';

export const MobileCallBtn: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isFooterVisible, setIsFooterVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        // Hide button when footer is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.querySelector('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (footer) observer.unobserve(footer);
        };
    }, []);

    if (!isVisible || isFooterVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden w-full px-6 max-w-sm transition-opacity duration-300">
            <a
                href="tel:+37067000800"
                className="flex items-center justify-center gap-3 bg-red-600 text-white w-full py-4 rounded-full shadow-xl shadow-red-900/40 font-bold uppercase tracking-wider transition-transform active:scale-95"
            >
                <Phone size={20} className="fill-white" />
                <span>+370 670 00800</span>
            </a>
        </div>
    );
};
