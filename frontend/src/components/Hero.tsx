const Hero = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById("checkout");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Se o seu negócio
              <span className="text-blue-600"> Vale ouro</span> Porquê
              <span className="text-orange-500"> deixá-lo inseguro?</span>
            </h1>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Descubra a câmera que está mudando a forma como empreendedores
              angolanos protegem seus investimentos.
            </p>

            {/* Trust Indicators */}
            <div className="mb-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>+1.200 vendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Entrega segura</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToCheckout}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Quero Comprar Agora
              </button>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-green-600 font-semibold">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Pague só após receber!</span>
              </div>
            </div>

          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-64 object-cover"
                poster="https://res.cloudinary.com/dl2earg2m/image/upload/v1753825880/poster_ujqvz8.jpg"
                controls
                muted
              >
                <source
                  src="https://res.cloudinary.com/dvqhs3o5a/video/upload/v1753528868/camera_2_jk1wzn.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Gravando 24h</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold">Wi-Fi Conectado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
