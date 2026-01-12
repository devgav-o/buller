import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuItems } from '../mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf } from 'lucide-react';

const Menu = () => {
  const { t, language } = useLanguage();

  const renderMenuCategory = (category, title) => {
    return (
      <div key={category} className="mb-12">
        <h3 className="text-2xl font-bold text-[#58432a] mb-6">{t(category)}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[category].map((item) => (
            <Card key={item.id} className="border-[#d4af6e] hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-[#58432a] mb-2">
                      {item.name[language]}
                    </CardTitle>
                    {item.isVegan && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                        <Leaf className="w-3 h-3 mr-1 ml-1" />
                        {t('vegan')}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xl font-bold text-[#d4af6e] ml-4">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7a5a3a]">
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
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#58432a] mb-4">
            {t('ourMenu')}
          </h2>
          <p className="text-xl text-[#7a5a3a] max-w-2xl mx-auto mb-2">
            {t('menuSubtitle')}
          </p>
          <p className="text-lg text-[#8a6a4a] max-w-3xl mx-auto">
            {t('menuDescription')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {renderMenuCategory('sandwiches')}
          {renderMenuCategory('vegan')}
          {renderMenuCategory('sides')}
          {renderMenuCategory('drinks')}
        </div>
      </div>
    </section>
  );
};

export default Menu;
