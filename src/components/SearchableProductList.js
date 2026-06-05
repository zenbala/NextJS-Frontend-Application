'use client';

import { useEffect, useState, useRef } from 'react';
import ProductCard from '@/components/ProductCard';

export default function SearchableProductList({ initialLimit = 12 }) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  async function fetchDefault() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${initialLimit}`);
      if (!res.ok) throw new Error('Failed to load products');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchSearch(q) {
    setLoading(true);
    setError(null);
    try {
      if (!q) {
        await fetchDefault();
        return;
      }
      const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error('Search request failed');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDefault();
  }, []);

  useEffect(() => {
    // debounce queries
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchSearch(query.trim());
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '18px' }}>
        <input
          aria-label="Search products"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', flex: '1' }}
        />
        <button
          type="button"
          onClick={() => { setQuery(''); fetchDefault(); }}
          style={{ padding: '10px 14px', borderRadius: '8px', background: '#111827', color: '#fff', border: 'none' }}
        >
          Reset
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {!loading && products.length === 0 && <p>No products found.</p>}
    </div>
  );
}
