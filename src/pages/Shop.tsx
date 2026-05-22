import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import type { Gender } from '../types';
import FilterBar from '../components/shop/FilterBar';
import ProductGrid from '../components/shop/ProductGrid';

type SortKey = 'newest' | 'price-asc' | 'price-desc';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState<SortKey>('newest');

  const genderParam = searchParams.get('gender') as Gender | null;
  const gender = (genderParam === 'men' || genderParam === 'women') ? genderParam : 'all';

  const setGender = (g: Gender | 'all') => {
    if (g === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ gender: g });
    }
  };

  const filtered = useMemo(() => {
    let list = gender === 'all' ? products : products.filter((p) => p.gender === gender);
    switch (sort) {
      case 'price-asc':  list = [...list].sort((a, b) => a.price - b.price); break;
      case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break;
      case 'newest':     list = [...list].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()); break;
    }
    return list;
  }, [gender, sort]);

  // Scroll to top on page load
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-[72px] min-h-screen">
      {/* Page header */}
      <div className="bg-black py-16 lg:py-20 text-center">
        <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
          The Collection
        </p>
        <h1 className="font-display text-[40px] lg:text-[64px] text-white font-light">
          Shop
        </h1>
      </div>

      <FilterBar
        gender={gender}
        setGender={setGender}
        sort={sort}
        setSort={setSort}
        resultCount={filtered.length}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <ProductGrid products={filtered} onResetFilters={() => setGender('all')} />
      </div>
    </div>
  );
}
