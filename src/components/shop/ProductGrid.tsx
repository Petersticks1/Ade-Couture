import type { Product } from '../../types';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

interface ProductGridProps {
  products: Product[];
  onResetFilters: () => void;
}

export default function ProductGrid({ products, onResetFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-[32px] text-charcoal/40 mb-4">
          No pieces found.
        </p>
        <p className="font-body text-[15px] text-mid-gray mb-8">
          No items match your current filters.
        </p>
        <Button variant="secondary" onClick={onResetFilters}>
          View All Pieces
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
