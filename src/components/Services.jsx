import React from 'react';
import { Wifi, Smartphone, Monitor, Gift } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Forfaits Mobile",
    description: "Des forfaits adaptés à tous vos besoins avec data, minutes et SMS.",
    icon: Smartphone,
    buttonText: "Choisir un forfait",
    color: "bg-[#E60000]",
    popular: true,
  },
  {
    id: 2,
    title: "Internet Fixe",
    description: "Internet haut débit pour votre domicile avec installation rapide.",
    icon: Wifi,
    buttonText: "Découvrir nos offres",
    color: "bg-[#E60000]",
    popular: false,
  },
  {
    id: 3,
    title: "TV & Divertissement",
    description: "Accédez à des centaines de chaînes TV et contenus exclusifs.",
    icon: Monitor,
    buttonText: "Voir les bouquets",
    color: "bg-[#E60000]",
    popular: false,
  },
  {
    id: 4,
    title: "Offres promotionnelles",
    description: "Découvrez nos offres limitées et économisez sur nos services.",
    icon: Gift,
    buttonText: "Voir les promotions",
    color: "bg-[#E60000]",
    popular: false,
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez l'ensemble de nos solutions pour rester connecté partout et à tout moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group ${
                service.popular ? 'ring-2 ring-[#E60000]' : ''
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 -right-3 bg-[#E60000] text-white text-sm font-bold px-4 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 py-4 rounded-xl font-medium transition-colors text-lg"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};