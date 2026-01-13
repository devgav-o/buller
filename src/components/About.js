import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Store, HeartHandshake, Wheat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Wheat,
            title: t('freshIngredients'),
            description: t('freshIngredientsDesc'),
        },
        {
            icon: HeartHandshake,
            title: t('madeWithLove'),
            description: t('madeWithLoveDesc'),
        },
        {
            icon: Store,
            title: t('localBusiness'),
            description: t('localBusinessDesc'),
        },
    ];

    return (
        <section
            id='about'
            className='py-20 bg-gradient-to-br from-[#f5eed8] to-[#f0e5c8]'
        >
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-[#58432a] mb-4'>
                        {t('aboutUs')}
                    </h2>
                    <p className='text-2xl text-[#7a5a3a] font-medium mb-8'>
                        {t('aboutTitle')}
                    </p>
                </div>

                <div className='max-w-4xl mx-auto'>
                    <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12 shadow-lg'>
                        <p className='text-lg text-[#58432a] leading-relaxed mb-6'>
                            {t('aboutText1')}
                        </p>
                        <p className='text-lg text-[#58432a] leading-relaxed'>
                            {t('aboutText2')}
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className='border-[#d4af6e] bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105'
                            >
                                <CardHeader className='text-center'>
                                    <div className='w-16 h-16 bg-[#e0c86c]/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                                        <feature.icon className='w-8 h-8 text-[#d4af6e]' />
                                    </div>
                                    <CardTitle className='text-xl text-[#58432a]'>
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <p className='text-[#7a5a3a]'>
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
