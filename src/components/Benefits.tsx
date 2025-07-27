import React from 'react';
import { Moon, Mic, Camera, Wifi, Bell, Smartphone, HardDrive, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Visão Noturna Colorida",
      description: "Veja tudo em cores mesmo no escuro total"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Comunicação por Voz",
      description: "Fale e escute através da câmera"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Imagem em Alta Definição",
      description: "Qualidade crystal clear em 1080p"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Conexão Wi-Fi",
      description: "Acesso remoto de qualquer lugar"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Alerta de Movimento",
      description: "Notificações instantâneas no celular"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Controle pelo Celular",
      description: "App intuitivo para Android e iOS"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Armazenamento Local",
      description: "Salve vídeos sem mensalidade"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Resistente ao Tempo",
      description: "Proteção IP44 contra chuva e poeira"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher a <span className="text-blue-600">JORTAN</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma câmera completa com recursos avançados que garantem sua segurança 24 horas por dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Quero Todos Esses Benefícios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;