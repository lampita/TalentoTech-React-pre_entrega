import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === game.id);

      if (itemExists) {
        if (itemExists.quantity >= game.stock) {
          alert(`¡Lo sentimos! No hay más stock disponible de ${game.title}`);
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prevCart, { ...game, quantity: 1 }];
    });
  };

  const decreaseQuantity = (gameId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (gameId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== gameId));
  };
  
  const clearCart = () => setCart([]);

  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
