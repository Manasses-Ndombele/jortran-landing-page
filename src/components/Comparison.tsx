import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const features = [
    { feature: "Visão noturna colorida", jortan: true, others: false },
    { feature: "Áudio bidirecional", jortan: true, others: false },
    { feature: "Controle remoto (Pan/Tilt/Zoom)", jortan: true, others: false },
    { feature: "Resistente ao tempo (IP44)", jortan: true, others: false },
    { feature: "Armazenamento local + app", jortan: true, others: false },
    { feature: "Detecção de movimento inteligente", jortan: true, others: true },
    { feature: "Conexão Wi-Fi", jortan: true, others: true },
    { feature: "Aplicativo mobile", jortan: true, others: true }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            JORTAN vs <span className="text-red-500">Câmeras Comuns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja por que a JORTAN é superior às outras câmeras do mercado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50">
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">Recursos</h3>
              </div>
              <div className="p-6 text-center bg-blue-600">
                <h3 className="text-lg font-bold text-white">JORTAN</h3>
                <p className="text-blue-100 text-sm mt-1">Câmera Inteligente</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">Câmeras Comuns</h3>
              </div>
            </div>

            {/* Features */}
            {features.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 flex items-center">
                  <span className="text-gray-700 font-medium">{item.feature}</span>
                </div>
                <div className="p-4 flex items-center justify-center bg-blue-50">
                  {item.jortan ? (
                    <div className="flex items-center space-x-2">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-green-600 font-semibold">Sim</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <X className="w-6 h-6 text-red-500" />
                      <span className="text-red-500 font-semibold">Não</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {item.others ? (
                    <div className="flex items-center space-x-2">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-green-600 font-semibold">Sim</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <X className="w-6 h-6 text-red-500" />
                      <span className="text-red-500 font-semibold">Não</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 p-8 bg-blue-600 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Por Que Aceitar Menos?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              A JORTAN oferece tudo que você precisa em uma única câmera
            </p>
            <button 
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Quero a Melhor Câmera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;