import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Globe, ChevronDown, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#E60000] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-sm hover:underline flex items-center">
                <Phone size={14} className="mr-1" />
                <span>96 190 190</span>
              </a>
              <a href="#" className="text-sm hover:underline">Particuliers</a>
              <a href="#" className="text-sm hover:underline">Entreprises</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm flex items-center hover:underline">
                <Globe size={14} className="mr-1" />
                <span>FR</span>
                <ChevronDown size={14} className="ml-1" />
              </a>
              <a href="#" className="text-sm flex items-center hover:underline">
                <User size={14} className="mr-1" />
                <span>Mon espace</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="font-bold text-2xl text-[#E60000]">
                ooredoo
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-[#E60000] transition-colors">
                Forfaits Mobile
              </a>
              <a href="#" className="font-medium hover:text-[#E60000] transition-colors">
                Internet
              </a>
              <a href="#" className="font-medium hover:text-[#E60000] transition-colors">
                Smartphone
              </a>
              <a href="#" className="font-medium hover:text-[#E60000] transition-colors">
                Services
              </a>
              <a href="#" className="font-medium hover:text-[#E60000] transition-colors">
                Assistance
              </a>
            </nav>

            {/* Search and Menu buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
              Forfaits Mobile
            </a>
            <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
              Internet
            </a>
            <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
              Smartphone
            </a>
            <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
              Services
            </a>
            <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
              Assistance
            </a>
            <div className="border-t border-gray-100 mt-2 pt-2">
              <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50 flex items-center">
                <Phone size={16} className="mr-2" />
                <span>96 190 190</span>
              </a>
              <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
                Particuliers
              </a>
              <a href="#" className="px-6 py-3 font-medium hover:bg-gray-50">
                Entreprises
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};