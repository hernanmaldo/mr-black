import { ShoppingCart, Settings, CreditCard, Truck } from "lucide-react";


export function HowItWorksSection() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Elige tus productos",
      description: "Explora nuestro menú y selecciona tus hamburguesas favoritas"
    },
    {
      icon: Settings,
      title: "Personaliza tu pedido",
      description: "Ajusta ingredientes y especifica tus preferencias"
    },
    {
      icon: CreditCard,
      title: "Paga online o al recibirlo",
      description: "Elige tu método de pago preferido de forma segura"
    },
    {
      icon: Truck,
      title: "Recibe en casa o pasa a buscar",
      description: "Delivery a domicilio o retiro en nuestras sucursales"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">¿Cómo</span> funciona?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hacer tu pedido es súper fácil. Sigue estos simples pasos y disfruta de nuestras deliciosas hamburguesas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-800">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-400/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}