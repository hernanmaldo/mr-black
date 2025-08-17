import { useCart } from "./CartProvider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function Cart() {
  const { state, dispatch } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={() => dispatch({ type: 'TOGGLE_CART' })}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 shadow-lg z-40 w-14 h-14 rounded-full"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-yellow-400 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-black border-l border-gray-800">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-white">Tu <span className="text-yellow-400">Pedido</span></SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-lg">Tu carrito está vacío</p>
              <p className="text-sm">Agrega algunos productos deliciosos</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-yellow-400 font-bold">$ {item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold w-8 text-center text-white">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-8 w-8 bg-red-600 hover:bg-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t border-gray-800 pt-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-white">Total:</span>
              <span className="text-2xl font-bold text-yellow-400">$ {totalPrice.toLocaleString()}</span>
            </div>
            <Button 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 text-lg font-semibold"
              onClick={() => {
                alert('¡Pedido enviado! Te contactaremos para confirmar los detalles.');
                dispatch({ type: 'CLEAR_CART' });
              }}
            >
              Confirmar Pedido
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Te contactaremos para confirmar tu pedido y coordinar la entrega
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}