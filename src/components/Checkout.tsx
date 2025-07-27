import React, { useState } from "react";
import { Shield, Truck, CheckCircle, AlertCircle } from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    province: "",
    municipality: "",
    neighborhood: "",
    address: "",
    quantity: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Pedido Confirmado com Sucesso! 🎉
          </h2>
          <p className="text-lg text-green-700 mb-6">
            Sua JORTAN será entregue em até 3-5 dias úteis. Você receberá um SMS
            com o código de rastreamento.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">Lembre-se:</h3>
            <p className="text-gray-700">
              Você só pagará quando o produto chegar na sua casa. Mantenha seu
              telefone ligado para contato da transportadora.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Você Só Paga <span className="text-green-600">Após Receber</span> o
            Produto!
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Para garantir sua segurança, você só paga depois de o produto chegar
            na sua casa. Preencha os dados corretamente para que nossa
            transportadora localize seu endereço.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Resumo do Pedido
            </h3>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="JORTAN Camera"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Câmera JORTAN Wi-Fi
                </h4>
                <p className="text-gray-600">
                  Intelligent WiFi Cradle Head Camera
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between text-lg mb-2">
                <span>Preço unitário:</span>
                <span className="line-through text-gray-500">35.000 Kz</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-green-600 mb-4">
                <span>Preço promocional:</span>
                <span>19.990 Kz</span>
              </div>
              <div className="flex justify-between text-lg mb-2">
                <span>Quantidade:</span>
                <span>{formData.quantity}x</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-blue-600 border-t pt-4">
                <span>Total:</span>
                <span>
                  {(19990 * formData.quantity).toLocaleString("pt-AO")} Kz
                </span>
              </div>
            </div>

            {/* Security Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-green-600">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-600">
                <Truck className="w-5 h-5" />
                <span className="font-medium">Entrega em 3-5 dias úteis</span>
              </div>
              <div className="flex items-center space-x-3 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">7 dias de garantia</span>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Dados para Entrega
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Número de Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+244 900 000 000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu município *
                </label>
                <input
                  type="text"
                  name="municipality"
                  value={formData.municipality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu município"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bairro *
                </label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu bairro"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rua/Nº da Casa (opcional)
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rua e número da casa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantidade
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>1 Câmera</option>
                  <option value={2}>2 Câmeras</option>
                  <option value={3}>3 Câmeras</option>
                  <option value={4}>4 Câmeras</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processando...</span>
                  </span>
                ) : (
                  "Quero Receber Agora"
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>
                  Compra 100% segura • Sem risco • Você só paga após a entrega
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">
                Importante:
              </h4>
              <p className="text-orange-700">
                Preencha todos os dados corretamente. Caso haja erro nas
                informações fornecidas que impeça a entrega, será cobrada uma
                taxa de reenvio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
