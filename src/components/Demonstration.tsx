import { Clock, Smartphone, Eye, MessageCircle } from 'lucide-react';

const Demonstration = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Instalação em 2 Minutos",
      description: "Processo simples e rápido, sem necessidade de técnico",
      image: "https://res.cloudinary.com/dvqhs3o5a/image/upload/v1753654692/jortran_instala%C3%A7%C3%A3o_biehii.jpg"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Visualização via App",
      description: "Controle total através do seu smartphone",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Gravação Noturna Colorida",
      description: "Veja tudo em cores mesmo na escuridão total",
      image: "https://res.cloudinary.com/dvqhs3o5a/image/upload/v1753654691/jortran_lua_wx7knz.jpg"
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Interação por Voz",
      description: "Converse com quem está em casa em tempo real",
      image: "https://res.cloudinary.com/dvqhs3o5a/image/upload/v1753654694/jortran_speaking_udptws.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Veja Como é <span className="text-orange-500">Fácil de Usar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a JORTAN simplifica sua segurança com tecnologia avançada e uso intuitivo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Veja a JORTAN em Ação
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-72"
                controls
                autoPlay
                loop
                muted
              >
                <source 
                  src="https://res.cloudinary.com/dvqhs3o5a/video/upload/v1753528868/camera_2_jk1wzn.mp4" 
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;