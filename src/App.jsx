import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { QuickAccess } from './components/QuickAccess';
import { Promotions } from './components/Promotions';
import { AppDownload } from './components/AppDownload';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <QuickAccess />
        <Promotions />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}

export default App;