'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <div>
        <h3>{product.title}</h3>
        <p style={{ fontWeight: 'bold', margin: '8px 0' }}>${product.price}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Link href={`/products/${product.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
          View Details
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product)}
          style={{
            background: '#111827',
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
