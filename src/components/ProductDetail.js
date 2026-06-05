'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

/**
 * Shows the full product information and lets the shopper add it to the cart.
 */
export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
          <Image
            src={product.images?.[0] ?? product.thumbnail}
            alt={product.title}
            width={600}
            height={500}
            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '500px' }}
          />

          <div>
            <h1 style={{ marginBottom: '16px' }}>{product.title}</h1>
            <p style={{ marginBottom: '16px', lineHeight: '1.7' }}>{product.description}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>${product.price}</p>
            <button
              type="button"
              onClick={() => addToCart(product)}
              style={{
                background: '#111827',
                color: '#fff',
                border: 'none',
                padding: '14px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
