import { useRouter } from "./components/Router";
import { CartProvider } from "./components/CartProvider";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";

export default function App() {
  
const BASE_PATH = '/mr-black';
const { currentRoute, navigate } = useRouter( window.location.pathname.replace(BASE_PATH, '') || '/');


  const renderPage = () => {
    switch (currentRoute.toLowerCase()) {
      case '/pedido':
        return <MenuSection />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Header currentRoute={currentRoute} onNavigate={navigate} />
        
        {renderPage()}
        
        <Footer />
        
        {/* Floating Cart Button */}
        <Cart />
      </div>
    </CartProvider>
  );
}