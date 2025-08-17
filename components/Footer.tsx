import { Separator } from "./ui/separator";
import { Instagram, Facebook, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className=" px-3 py-2 rounded-lg inline-block mb-4">
               <img src="public\MrBlackLogo.png" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Las mejores hamburguesas artesanales de Sunchales. Ingredientes frescos, 
              sabores únicos y la pasión por crear la burger perfecta.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mrblacksunchales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/mrblacksunchales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="tel:+5493493520223"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Enlaces Útiles</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Inicio
              </a>
              <a href="#menu" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Menú
              </a>
              <a href="#contacto" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contacto
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Política de Privacidad
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Términos y Condiciones
              </a>
            </div>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>Av. Independencia 40</p>
              <p>Av. Yrigoyen 697</p>
              <p>Sunchales, Santa Fe</p>
              <p className="mt-4">
                <span className="block">Miércoles a Domingo</span>
                <span className="block font-semibold text-yellow-400">18:00 - 00:00</span>
              </p>
              <p className="mt-4">
                <a href="tel:+5493493520223" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  (03493) 520223
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 <span className="text-yellow-400">Mr. Black</span> Sunchales. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Desarrollado con <span className="text-yellow-400">❤️</span> para los amantes de las burgers
          </p>
        </div>
      </div>
    </footer>
  );
}