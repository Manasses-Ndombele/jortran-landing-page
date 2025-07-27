import { Instagram, MessageCircle, Phone, Shield, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://res.cloudinary.com/dvqhs3o5a/image/upload/v1753445973/ChatGPT_Image_25_de_jul._de_2025_13_08_07_grjkro.png" 
              alt="MiniCom"
              className="h-20 w-auto mb-6 rounded-full"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              A MiniCom é especializada em tecnologia de segurança residencial e comercial, 
              oferecendo produtos de alta qualidade com garantia e suporte completo.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Compra Segura Garantida</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-300">+244 900 000 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-gray-300">+244 222 000 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">suporte@minicom.ao</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6">Siga-nos</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 MiniCom. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">SSL Seguro</span>
              </div>
              <div className="text-sm text-gray-300">
                Pagamento na Entrega
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-8 p-4 bg-orange-900 bg-opacity-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
              <div className="text-sm text-orange-100">
                <strong>Aviso Importante:</strong> Se o cliente cometer algum erro na solicitação do produto 
                (endereço incorreto, telefone inválido, etc.) que impeça a entrega, o mesmo deverá efetuar 
                o pagamento da taxa de reenvio para uma nova tentativa de entrega.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;