'use client';

import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

/**
 * Client-only shell for pages that need shared cart state and navigation.
 */
export default function ClientRoot({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  );
}
