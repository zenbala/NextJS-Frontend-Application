'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, addToCart, updateQuantity, removeFromCart, getCartCount } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1>Your Cart is Empty</h1>
        <p>Browse products and add items to your cart.</p>
        <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          Back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1>Your Cart</h1>
      <div style={{ display: 'grid', gap: '24px', marginTop: '24px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '20px', padding: '16px', border: '1px solid #ddd', borderRadius: '12px' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '10px' }} />
            <div>
              <h2>{item.title}</h2>
              <p style={{ margin: '10px 0' }}>{item.description}</p>
              <p style={{ fontWeight: '700' }}>${item.price} each</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' }}>
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff' }}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => addToCart(item)} style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff' }}>
                  +
                </button>
                <button type="button" onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto', background: '#ef4444', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#f8fafc', borderRadius: '14px' }}>
        <div>
          <p style={{ margin: '0' }}>Total items: <strong>{getCartCount()}</strong></p>
          <p style={{ margin: '0', fontSize: '1.25rem', fontWeight: '700' }}>Total: ${totalAmount.toFixed(2)}</p>
        </div>
        <button type="button" style={{ background: '#111827', color: '#fff', border: 'none', padding: '14px 24px', borderRadius: '10px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}
