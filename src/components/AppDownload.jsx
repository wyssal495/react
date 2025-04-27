import React from 'react';
import { Apple, Play } from 'lucide-react';


export const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#E60000] to-[#FF4D4D] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Téléchargez l'application Ooredoo
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Gérez votre compte, payez vos factures et profitez de nombreux services exclusifs, où que vous soyez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
                aria-label="Télécharger sur l'App Store"
              >
                <Apple size={24} className="mr-2" />
                <div>
                  <div className="text-xs">Télécharger sur</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
                aria-label="Disponible sur Google Play"
              >
                <Play size={24} className="mr-2" />
                <div>
                  <div className="text-xs">Disponible sur</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Application mobile Ooredoo" 
                className="relative z-10 max-w-[300px] rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};