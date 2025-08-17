import { useCart } from "./CartProvider";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MenuSection() {
  const { dispatch } = useCart();

  const menuItems = [
    {
      id: "burger-4x4",
      name: "BURGER 4x4 de in-n-out",
      description: "Salsa MrBlack, 4 Medallones de carne, Lechuga, Tomate, Cebolla, Cheddar. Pan de papas",
      price: 15800,
      image: "/mr-black/4x4.png",
      inStock: true
    },
    {
      id: "vietnamita-full",
      name: "VIETNAMITA FULL",
      description: "Vietnamita full: salsa Ali olí, Cebolla Crispy, ketchup, Triple medallón de 100gr. Triple queso Cheddar, queso emmental , Bacon. Pan de papa.",
      price: 14000,
      image: "/mr-black/vietnamita-full.png",
      inStock: true
    },
    {
      id: "desubicada",
      name: "DESUBICADA",
      description: "5 Medallones de carne 80gr, 5 Fetas de Cheddar, Doble panceta, Salsa Mr Black.",
      price: 17100,
      image: "/mr-black/desubicada.png",
      inStock: true
    },
    {
      id: "crispy-chicken",
      name: "BURGER CRISPY CHICKEN",
      description: "Lechuga repollada con salsa Mr Black, Tomate, medallón de pollo crispy, ketchup",
      price: 11200,
      image: "/mr-black/crispy-chiken.png",
      inStock: false
    },
    {
      id: "burger-eggsplotion",
      name: "BURGER EGGSPLOTION",
      description: "Salsa MrBlack, Medallón de 100gr. Cheddar, Bacon, Huevo Frito.",
      price: 11000,
      image: "/mr-black/eggsplotion.png", 
      inStock: true
    },
    {
      id: "triple-x",
      name: "TRIPLE X",
      description: "Salsa Mr Black, triple carne 80gr, triple cheddar, triple bastones de mozzarella envueltos en panceta Ahumada, ketchup",
      price: 17500,
      image: "/mr-black/triple-x.png",
      inStock: true
    }
  ];

  const addToCart = (item: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image
      }
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Nuestro <span className="text-yellow-400">Menú Destacado</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre nuestras hamburguesas artesanales, preparadas con ingredientes frescos y de primera calidad.
          </p>
        </div>

        {/* Vertical Layout - Single Column */}
        <div className="max-w-4xl mx-auto space-y-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:shadow-yellow-400/20 bg-gray-900 border-gray-800">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-1/3 lg:w-1/4 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {!item.inStock && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-4 right-4 bg-red-600 text-white"
                    >
                      Sin Stock
                    </Badge>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="bg-gray-900 pb-3">
                    <CardTitle className="text-2xl text-white">{item.name}</CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="bg-gray-900 flex-1 flex items-center justify-between pt-3 pb-3">
                    <span className="text-3xl font-bold text-yellow-400">
                      $ {item.price.toLocaleString()}
                    </span>
                  </CardContent>

                  <CardFooter className="bg-gray-900 pt-3">
                    <Button 
                      className={`w-full md:w-auto md:min-w-48 ${item.inStock 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-black font-semibold' 
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!item.inStock}
                      onClick={() => item.inStock && addToCart(item)}
                    >
                      {item.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}