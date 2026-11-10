import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🛒 1. ESTADO DEL CARRITO: Con lectura inicial de LocalStorage
  const [cart, setCart] = useState(() => {
    const carritoGuardado = localStorage.getItem("ps4_store_cart");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // ⭐ 2. ESTADO DE FAVORITOS: Con lectura inicial de LocalStorage
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem("ps4_store_favorites");
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  // 🔄 3. SINCRONIZACIÓN AUTOMÁTICA DEL CARRITO
  useEffect(() => {
    localStorage.setItem("ps4_store_cart", JSON.stringify(cart));
  }, [cart]);

  // 🔄 4. SINCRONIZACIÓN AUTOMÁTICA DE FAVORITOS
  useEffect(() => {
    localStorage.setItem("ps4_store_favorites", JSON.stringify(favoritos));
  }, [favoritos]);

  // ⚙️ Función global para favoritos (Toggle)
  const toggleFavorito = (gameId) => {
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.includes(gameId)) {
        return prevFavoritos.filter((id) => id !== gameId);
      } else {
        return [...prevFavoritos, gameId];
      }
    });
  };

  // ⚙️ Funciones del carrito (Mantenlas tal cual las tenías)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existe = prevCart.find((prod) => prod.id === item.id);
      if (existe) {
        return prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((prod) =>
        prod.id === id ? { ...prod, quantity: Math.max(1, prod.quantity - 1) } : prod
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

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
        favoritos,       
        toggleFavorito   
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
