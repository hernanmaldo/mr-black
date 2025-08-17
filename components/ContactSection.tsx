import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin, Phone, Instagram } from "lucide-react";

interface ContactSectionProps {
  onNavigate?: (path: string) => void;
}

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">Horarios</span> y Contacto
          </h2>
          <p className="text-xl text-gray-300">
            Visítanos o haz tu pedido desde donde estés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Horarios */}
          <Card className="text-center hover:shadow-lg transition-shadow bg-black border-gray-800">
            <CardHeader>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-white">Horarios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Miércoles a Domingo</p>
              <p className="font-semibold text-lg text-yellow-400">18:00 - 00:00</p>
            </CardContent>
          </Card>

          {/* Ubicación */}
          <Card className="text-center hover:shadow-lg transition-shadow bg-black border-gray-800">
            <CardHeader>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-white">Sucursales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Av. Independencia 40</p>
              <p className="text-gray-300 mb-2">Av. Yrigoyen 697</p>
              <p className="font-semibold text-yellow-400">Sunchales</p>
            </CardContent>
          </Card>

          {/* Teléfono */}
          <Card className="text-center hover:shadow-lg transition-shadow bg-black border-gray-800">
            <CardHeader>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-white">Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">Llamanos directamente</p>
              <p className="font-semibold text-lg text-yellow-400">(03493) 520223</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                onClick={() => window.open('tel:+5493493520223')}
              >
                Llamar Ahora
              </Button>
            </CardContent>
          </Card>

          {/* Redes Sociales */}
          <Card className="text-center hover:shadow-lg transition-shadow bg-black border-gray-800">
            <CardHeader>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-black" />
              </div>
              <CardTitle className="text-white">Síguenos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-2">@mrblacksunchales</p>
              <div className="flex gap-2 justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open('https://wa.me/5493493520223', '_blank')}
                >
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open('https://instagram.com/mrblacksunchales', '_blank')}
                >
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-800 text-white rounded-2xl p-8 mt-16 text-center border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">¿Listo para tu próxima <span className="text-yellow-400">burger</span>?</h3>
          <p className="text-gray-300 mb-6">
            Haz tu pedido ahora y disfruta de las mejores hamburguesas artesanales de Sunchales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 font-semibold"
              onClick={() => onNavigate ? onNavigate('/pedido') : window.location.href = '/pedido'}
            >
              Ver Menú Completo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 font-semibold"
              onClick={() => window.open('https://wa.me/5493493520223', '_blank')}
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}