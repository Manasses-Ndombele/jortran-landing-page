import React, { useState, useEffect } from 'react';
import { Clock, Star, TrendingUp } from 'lucide-react';

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Urgency Header */}
          <div className="inline-flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-full mb-8">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">PROMOÇÃO POR TEMPO LIMITADO</span>
          </div>

          {/* Main Offer */}
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="line-through text-orange-200">35.000 Kz</span>
          </h2>
          
          <div className="text-6xl lg:text-8xl font-bold mb-8 text-yellow-300">
            19.990 Kz
          </div>

          <p className="text-2xl mb-8 font-semibold">
            Economia de <span className="text-yellow-300">15.010 Kz</span> apenas hoje!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Horas</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Minutos</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Segundos</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-300" fill="currentColor" />
              <span className="font-semibold">4.9/5 Estrelas</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-green-300" />
              <span className="font-semibold">+1.200 Vendidos Este Mês</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl mb-8"
          >
            Quero Aproveitar Esta Oferta
          </button>

          {/* Payment Security */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Você só paga após receber o produto!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;