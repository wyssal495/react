import React from 'react';

const CatalogueEShop = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">CATALOGUE ESHOP</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Tourisme */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TOURIST LINE</h3>
              <p className="text-gray-600 mb-4">LE MEILLEUR DES SMARTPHONES</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Découvrir
              </button>
            </div>
          </div>

          {/* Carte Accessoires */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ACCESSORIES</h3>
              <p className="text-gray-600 mb-4">OBJETS CONNECTÉS</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Découvrir
              </button>
            </div>
          </div>

          {/* Carte eSIM */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SWITCH ESIM</h3>
              <p className="text-gray-600 mb-4">Passez à la eSIM facilement</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogueEShop;