import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (artwork) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === artwork.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...artwork, quantity: 1 }];
    });
  };

  const removeFromCart = (artworkId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== artworkId));
  };

  const updateQuantity = (artworkId, quantity) => {
    if (quantity < 1) {
      removeFromCart(artworkId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === artworkId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 