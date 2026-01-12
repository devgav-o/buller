import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5eed8] via-[#f0e5c8] to-[#e8d9b8]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#e0c86c]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#d4af6e]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#e0c86c]/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#58432a] mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-[#7a5a3a] mb-6 font-medium">
            {t('heroSubtitle')}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#8a6a4a] mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => window.open('https://www.10bis.co.il/next/en/restaurants/menu/delivery/5302/new-deli', '_blank')}
              className="bg-[#d4af6e] hover:bg-[#c49e5d] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('orderNow')}
            </Button>
            <Button
              onClick={() => scrollToSection('menu')}
              variant="outline"
              className="border-2 border-[#58432a] text-[#58432a] hover:bg-[#58432a] hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('viewMenu')}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#7a5a3a] mx-auto cursor-pointer" onClick={() => scrollToSection('menu')} />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#ffffff" fillOpacity="0.9"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
