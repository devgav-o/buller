import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../mockData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he'); // Default to Hebrew
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    setDirection(language === 'he' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};
