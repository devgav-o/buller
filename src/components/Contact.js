import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f5eed8] to-[#f0e5c8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#58432a] mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-xl text-[#7a5a3a]">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location Card */}
          <Card className="border-[#d4af6e] bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-[#e0c86c]/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#d4af6e]" />
              </div>
              <CardTitle className="text-2xl text-[#58432a]">
                {t('visitUs')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#7a5a3a] text-lg">
                {t('address')}
              </p>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="border-[#d4af6e] bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-[#e0c86c]/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#d4af6e]" />
              </div>
              <CardTitle className="text-2xl text-[#58432a]">
                {t('openingHours')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#7a5a3a] mb-2">{t('weekdays')}</p>
              <p className="text-[#7a5a3a]">{t('weekends')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Order Delivery Section */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-[#58432a] mb-4">
              {t('orderDelivery')}
            </h3>
            <p className="text-lg text-[#7a5a3a] mb-6">
              {t('available10bis')}
            </p>
            <Button
              onClick={() => window.open('https://www.10bis.co.il/next/en/restaurants/menu/delivery/5302/new-deli', '_blank')}
              className="bg-[#d4af6e] hover:bg-[#c49e5d] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2 ml-2" />
              {t('orderNow')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
