import React from 'react';
import { CreditCard, RefreshCw, MessageSquare, MapPin, Smartphone, HelpCircle } from 'lucide-react';

const quickLinks = [
  {
    id: 1,
    title: "Payer ma facture",
    icon: CreditCard,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Recharger",
    icon: RefreshCw,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    title: "Contacter le service client",
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 4,
    title: "Trouver une boutique",
    icon: MapPin,
    color: "bg-red-50 text-red-600",
  },
  {
    id: 5,
    title: "Appli mobile",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: 6,
    title: "Aide & support",
    icon: HelpCircle,
    color: "bg-teal-50 text-teal-600",
  }
];

export const QuickAccess = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Accès rapide</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map(link => (
            <a 
              key={link.id}
              href="#"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className={`${link.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                <link.icon size={24} />
              </div>
              <span className="font-medium text-sm">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};