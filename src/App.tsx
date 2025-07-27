import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Demonstration from './components/Demonstration';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Demonstration />
      <Comparison />
      <FAQ />
      <Offer />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;