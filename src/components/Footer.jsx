import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos d'Ooredoo</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Responsabilité sociétale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investisseurs</a></li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Forfaits Mobile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Internet Fixe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services à valeur ajoutée</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Roaming international</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Offres entreprises</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Assistance</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Trouver une boutique</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guide d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Réclamations</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Ooredoo Tunisie, Siège social, 13 Rue Ibn Roched, Montplaisir, 1073 Tunis
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">96 190 190</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">service.client@ooredoo.tn</span>
              </li>
              <li className="pt-4">
                <h4 className="text-white font-medium mb-2">Suivez-nous</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#E60000] p-2 rounded-full hover:bg-red-700 transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="bg-[#E60000] p-2 rounded-full hover:bg-red-700 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="bg-[#E60000] p-2 rounded-full hover:bg-red-700 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="bg-[#E60000] p-2 rounded-full hover:bg-red-700 transition-colors">
                    <Youtube size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Ooredoo Tunisie. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};