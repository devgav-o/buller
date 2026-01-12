import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#58432a] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              {t('heroTitle')}
            </h3>
            <p className="text-[#d4af6e]">
              {t('footerText')}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-[#d4af6e]/30"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-[#e0c86c]">
            <p>© {currentYear} Buller Deli. {t('footerRights')}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
