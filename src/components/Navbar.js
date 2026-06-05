'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

/**
 * Main navigation bar with links and the current cart item count.
 */
export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
          🛍️ Catalog Home
        </Link>
        <Link href="/cart" style={{ textDecoration: 'none', color: '#111827' }}>
          🛒 Cart ({getCartCount()})
        </Link>
      </div>
      <div>
        <span>Items in cart: <strong>{getCartCount()}</strong></span>
      </div>
    </nav>
  );
}
