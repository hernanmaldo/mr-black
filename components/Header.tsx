import { Button } from "./ui/button";
import {  Menu } from "lucide-react";

interface HeaderProps {
  currentRoute: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div 
            
            onClick={() => onNavigate('/')}
          >
            <img src="/mr-black/MrBlackLogo.png" className="h-15 w-auto" />
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => onNavigate('/')}
            className={`hover:text-yellow-400 transition-colors ${
              currentRoute === '/' ? 'text-yellow-400' : ''
            }`}
          >
            Inicio
          </button>
          <button 
            onClick={() => onNavigate('/pedido')}
            className={`hover:text-yellow-400 transition-colors ${
              currentRoute === '/pedido' ? 'text-yellow-400' : ''
            }`}
          >
            Pedido
          </button>
          <button 
            onClick={() => {
              if (currentRoute === '/') {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('/');
                setTimeout(() => {
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="hover:text-yellow-400 transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg transition-colors font-semibold"
            onClick={() => onNavigate('/pedido')}
          >
            Pedir Ahora
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-yellow-400 hover:bg-gray-800">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}