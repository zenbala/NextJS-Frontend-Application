import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';

async function getProduct(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.productId);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
