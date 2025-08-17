import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Las mejores <span className="text-yellow-400">burgers artesanales</span> en Sunchales
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Haz tu pedido online en segundos y disfruta de hamburguesas gourmet preparadas con ingredientes frescos y de primera calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 font-semibold"
                onClick={() => onNavigate ? onNavigate('/pedido') : window.location.href = '/pedido'}
              >
                VER MENÚ / HACER PEDIDO
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg rounded-lg transition-all font-semibold"
                onClick={() => window.open('https://wa.me/5493493520223', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            <ImageWithFallback
              src="public//home.png"
              alt="Hamburguesa gourmet Mr. Black"
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
    </section>
  );
}