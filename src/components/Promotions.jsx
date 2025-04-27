import React from 'react';
import { ArrowRight } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: "Forfait 60 Go à 25DT",
    description: "Profitez d'internet en illimité et des appels vers tous les opérateurs.",
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Fibre optique 200Mbps",
    description: "Internet ultra-rapide pour votre domicile avec installation gratuite.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Internet",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Samsung Galaxy S23",
    description: "Obtenez le dernier Galaxy avec 30% de réduction sur votre forfait.",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Smartphone",
    color: "bg-purple-500",
  }
];

export const Promotions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Promotions & Actualités</h2>
          <a 
            href="#" 
            className="text-[#E60000] font-medium flex items-center hover:underline"
          >
            Voir tout <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map(promo => (
            <div 
              key={promo.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className={`absolute top-4 left-4 ${promo.color} text-white px-3 py-1 text-sm font-medium rounded-full`}>
                  {promo.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <a 
                  href="#" 
                  className="text-[#E60000] font-medium flex items-center hover:underline"
                >
                  En savoir plus <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};