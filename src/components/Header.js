import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
    const { t, toggleLanguage, language, direction } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const logoUrl = 'logo.png';
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#f5eed8]/95 backdrop-blur-sm shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <div
                        style={{ height: 50 }}
                        className='flex items-center cursor-pointer -translate-y-2'
                        onClick={() => scrollToSection('home')}
                    >
                        <img
                            src={logoUrl}
                            alt='Buller Deli Logo'
                            className='h-24 w-24 object-contain'
                        />
                        {/* <span className='text-2xl font-bold text-[#58432a] mr-3 ml-3'>
                            {language === 'he' ? 'בולר' : 'Buller'}
                        </span> */}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center space-x-8 rtl:space-x-reverse'>
                        <button
                            onClick={() => scrollToSection('home')}
                            className=' text-[#58432a] hover:text-[#7a5a3a] transition-colors duration-200 font-medium'
                        >
                            {t('home')}
                        </button>
                        <button
                            onClick={() => scrollToSection('menu')}
                            className='text-[#58432a] hover:text-[#7a5a3a] transition-colors duration-200 font-medium'
                        >
                            {t('menu')}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className='text-[#58432a] hover:text-[#7a5a3a] transition-colors duration-200 font-medium'
                        >
                            {t('about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className='text-[#58432a] hover:text-[#7a5a3a] transition-colors duration-200 font-medium'
                        >
                            {t('gallery')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='text-[#58432a] hover:text-[#7a5a3a] transition-colors duration-200 font-medium'
                        >
                            {t('contact')}
                        </button>

                        {/* Language Toggle */}
                        <Button
                            onClick={toggleLanguage}
                            variant='outline'
                            size='sm'
                            className='border-[#58432a] text-[#58432a] hover:bg-[#58432a] hover:text-white transition-all duration-200'
                        >
                            <Globe className='w-4 h-4 mr-2 ml-2' />
                            {language === 'he' ? 'EN' : 'עב'}
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden flex items-center gap-2'>
                        <Button
                            onClick={toggleLanguage}
                            variant='ghost'
                            size='sm'
                            className='text-[#58432a]'
                        >
                            <Globe className='w-5 h-5' />
                        </Button>
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className='text-[#58432a] p-2'
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden bg-[#f5eed8] border-t border-[#d4af6e] py-4 space-y-3'>
                        <button
                            onClick={() => scrollToSection('home')}
                            className='block w-full text-left px-4 py-2 text-[#58432a] hover:bg-[#e0c86c]/20 transition-colors duration-200'
                        >
                            {t('home')}
                        </button>
                        <button
                            onClick={() => scrollToSection('menu')}
                            className='block w-full text-left px-4 py-2 text-[#58432a] hover:bg-[#e0c86c]/20 transition-colors duration-200'
                        >
                            {t('menu')}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className='block w-full text-left px-4 py-2 text-[#58432a] hover:bg-[#e0c86c]/20 transition-colors duration-200'
                        >
                            {t('about')}
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className='block w-full text-left px-4 py-2 text-[#58432a] hover:bg-[#e0c86c]/20 transition-colors duration-200'
                        >
                            {t('gallery')}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='block w-full text-left px-4 py-2 text-[#58432a] hover:bg-[#e0c86c]/20 transition-colors duration-200'
                        >
                            {t('contact')}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
