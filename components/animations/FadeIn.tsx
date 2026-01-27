import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    fullWidth?: boolean;
    once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    duration = 700,
    direction = 'up',
    className = '',
    fullWidth = false,
    once = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && domRef.current) observer.unobserve(domRef.current);
                } else if (!once) {
                    setIsVisible(false);
                }
            });
        }, { threshold: 0.1 });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, [once]);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(40px)';
                case 'down': return 'translateY(-40px)';
                case 'left': return 'translateX(40px)';
                case 'right': return 'translateX(-40px)';
                default: return 'none';
            }
        }
        return 'translate(0, 0)';
    };

    return (
        <div
            ref={domRef}
            className={`${className} ${fullWidth ? 'w-full' : ''}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1), transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
                transitionDelay: `${delay}ms`,
                willChange: 'opacity, transform'
            }}
        >
            {children}
        </div>
    );
};
