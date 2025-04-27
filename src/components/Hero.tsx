import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Forfait hebdo 10 Go",
    description: "Internet sans limites pour toute la semaine!",
    buttonText: "Découvrir",
    image: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-[#E60000]",
  },
  {
    id: 2,
    title: "Fibre optique 100Mbps",
    description: "Internet ultra rapide pour votre domicile",
    buttonText: "En savoir plus",
    image: "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-[#E60000]",
  },
  {
    id: 3,
    title: "Nouveaux smartphones 5G",
    description: "Découvrez notre sélection à prix irrésistibles",
    buttonText: "Voir les offres",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-[#E60000]",
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[500px] md:h-[600px]">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="relative min-w-full h-full flex"
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
            
            <div className="relative container mx-auto px-4 flex items-center">
              <div className="text-white max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">{slide.description}</p>
                <button className={`${slide.color} hover:bg-opacity-90 px-8 py-4 rounded-full text-white font-medium transition-all transform hover:scale-105 text-lg`}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/40 transition-colors"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/40 transition-colors"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};