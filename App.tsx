import { useRouter } from "./components/Router";
import { CartProvider } from "./components/CartProvider";
import { Header } from "./components/Header";

import { MenuSection } from "./components/MenuSection";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";

export default function App() {

const BASE_PATH = '/mr-black';
const { currentRoute } = useRouter( window.location.pathname.replace(BASE_PATH, '') || '/');
console.log(currentRoute)



  return (
        <CartProvider>
          <Header  />
          <MenuSection />
          <Cart />
          <Footer />
        </CartProvider>
          );
    {/*
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Header currentRoute={currentRoute} onNavigate={navigate} />
        
        {renderPage()}
        
        <Footer />

        <Cart />
      </div>
    </CartProvider>
    */}

}