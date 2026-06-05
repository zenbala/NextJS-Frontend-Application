'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext();
const CART_STORAGE_KEY = 'app_cart';

/**
 * Reads the persisted shopping cart once when the client store is created.
 */
function getInitialCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (!savedCart) {
    return [];
  }

  try {
    return JSON.parse(savedCart);
  } catch (error) {
    console.error('Failed to parse cart storage execution context', error);
    return [];
  }
}

/**
 * Provides cart state and actions to every client component in the app.
 */
export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart);

  // Keep browser storage in sync so the cart survives refreshes.
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds a product to the cart or increments its quantity if it already exists.
   */
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  /**
   * Updates an item's quantity and removes it when the quantity reaches zero.
   */
  const updateQuantity = useCallback((productId, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  }, []);

  /**
   * Removes a product from the cart immediately.
   */
  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  /**
   * Returns the total number of product units currently in the cart.
   */
  const getCartCount = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const value = useMemo(
    () => ({ cart, addToCart, updateQuantity, removeFromCart, getCartCount }),
    [addToCart, cart, getCartCount, removeFromCart, updateQuantity]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Gives components access to the shared cart context.
 */
export const useCart = () => useContext(CartContext);
