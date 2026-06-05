import SearchableProductList from '@/components/SearchableProductList';

export default function ProductListPage() {
  return (
    <div>
      <h1>Available Products</h1>
      <SearchableProductList initialLimit={24} />
    </div>
  );
}
