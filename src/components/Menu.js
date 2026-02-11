import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuItems } from '../mockData';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { Leaf } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Menu = () => {
    const { t, language } = useLanguage();

    const categoryImages = {
        salty: '/category-images/salty.jpeg',
        dips: '/category-images/dips.jpeg',
        sweets: '/category-images/sweets.jpeg',
    };

    const renderMenuCategory = (category) => {
        return (
            <div key={category} className='animate-in fade-in duration-500'>
                {/* Category Image */}
                {categoryImages[category] && (
                    <div className='relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-md'>
                        <img
                            src={categoryImages[category]}
                            alt={t(category)}
                            className='w-full h-full object-cover'
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}
                {/* Category Items */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {menuItems[category].map((item, index) => (
                        <Card
                            key={`${category}-${item.id}-${index}`}
                            className='border-[#d4af6e] hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm'
                        >
                            <CardHeader>
                                <div className='flex items-start justify-between'>
                                    <div className='flex-1'>
                                        <CardTitle className='text-xl text-[#58432a] mb-2'>
                                            {item.name[language]}
                                        </CardTitle>
                                        {item.isVegan && (
                                            <Badge className='bg-green-100 text-green-700 hover:bg-green-200'>
                                                <Leaf className='w-3 h-3 mr-1 ml-1' />
                                                {t('vegan')}
                                            </Badge>
                                        )}
                                    </div>
                                    <span className='text-xl font-bold text-[#d4af6e] ml-4'>
                                        {item.price}
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-[#7a5a3a]'>
                                    {item.description[language]}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id='menu' className='py-20 bg-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-[#58432a] mb-4'>
                        {t('ourMenu')}
                    </h2>
                    <p className='text-xl text-[#7a5a3a] max-w-2xl mx-auto mb-2'>
                        {t('menuSubtitle')}
                    </p>
                    <p className='text-lg text-[#8a6a4a] max-w-3xl mx-auto'>
                        {t('menuDescription')}
                    </p>
                </div>

                <div className='max-w-5xl mx-auto'>
                    <Tabs defaultValue="salty" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-12 bg-[#fdf8f0] p-1 h-auto">
                            <TabsTrigger 
                                value="salty" 
                                className="py-3 text-lg data-[state=active]:bg-[#d4af6e] data-[state=active]:text-white"
                            >
                                {t('salty')}
                            </TabsTrigger>
                            <TabsTrigger 
                                value="dips" 
                                className="py-3 text-lg data-[state=active]:bg-[#d4af6e] data-[state=active]:text-white"
                            >
                                {t('dips')}
                            </TabsTrigger>
                            <TabsTrigger 
                                value="sweets" 
                                className="py-3 text-lg data-[state=active]:bg-[#d4af6e] data-[state=active]:text-white"
                            >
                                {t('sweets')}
                            </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="salty">
                            {renderMenuCategory('salty')}
                        </TabsContent>
                        <TabsContent value="dips">
                            {renderMenuCategory('dips')}
                        </TabsContent>
                        <TabsContent value="sweets">
                            {renderMenuCategory('sweets')}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Menu;
