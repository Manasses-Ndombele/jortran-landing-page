import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 overflow-hidden">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dvqhs3o5a/image/upload/v1753445973/ChatGPT_Image_25_de_jul._de_2025_13_08_07_grjkro.png" 
              alt="MiniCom"
              className="h-28 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Comparação
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Garantia
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('checkout')}
            className="hidden md:inline-flex bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Quero Comprar Agora
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full text-left"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('comparison')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full text-left"
              >
                Comparação
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full text-left"
              >
                Garantia
              </button>
              <button 
                onClick={() => scrollToSection('checkout')}
                className="block w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Quero Comprar Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;