import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Clock, Smartphone, CreditCard } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: <Clock className="w-6 h-6" />,
      question: "Precisa de técnico para instalar?",
      answer: "Não! A instalação é simples e guiada pelo app. Em apenas 2 minutos você terá sua câmera funcionando perfeitamente."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      question: "E se o produto não funcionar?",
      answer: "Você tem 7 dias de garantia completa. Se não ficar satisfeito, devolvemos 100% do seu dinheiro sem questionamentos."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      question: "Funciona em qualquer celular?",
      answer: "Sim! É compatível com Android e iOS. O app é gratuito e muito fácil de usar, mesmo para quem não entende de tecnologia."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      question: "Preciso pagar antes de receber?",
      answer: "Não! Você só paga após o produto chegar à sua casa. É nossa garantia de que você vai receber exatamente o que pediu."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dúvidas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas as suas dúvidas sobre a câmera JORTAN
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-blue-600">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 text-gray-400">
                  {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pl-10">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Garantia de 7 Dias ou Seu Dinheiro de Volta
          </h3>
          <p className="text-green-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Estamos tão confiantes na qualidade da JORTAN que oferecemos garantia total. 
            Se você não ficar 100% satisfeito, devolvemos todo o seu dinheiro sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;