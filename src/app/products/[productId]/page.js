import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';

/**
 * Fetches one product from DummyJSON and lets Next.js cache it for an hour.
 */
async function getProduct(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

/**
 * Server-rendered product details route for `/products/[productId]`.
 */
export default async function ProductDetailPage({ params }) {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
