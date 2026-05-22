import type { Gender, Category } from '../../types';

type SortKey = 'newest' | 'price-asc' | 'price-desc';

interface FilterBarProps {
  gender: Gender | 'all';
  setGender: (g: Gender | 'all') => void;
  sort: SortKey;
  setSort: (s: SortKey) => void;
  resultCount: number;
}

const genderFilters: { value: Gender | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'women', label: "Women's" },
  { value: 'men', label: "Men's" },
];

export default function FilterBar({ gender, setGender, sort, setSort, resultCount }: FilterBarProps) {
  return (
    <div className="sticky top-[72px] z-50 bg-white border-b border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4 overflow-x-auto">
        {/* Gender pills */}
        <div className="flex items-center gap-2 shrink-0">
          {genderFilters.map(({ value, label }) => (
            <button
              key={value}
              id={`filter-${value}`}
              aria-pressed={gender === value}
              onClick={() => setGender(value)}
              className={`
                font-body text-[11px] font-semibold tracking-[0.12em] uppercase
                px-4 py-2 border transition-all duration-200 cursor-pointer whitespace-nowrap
                ${gender === value
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black hover:bg-black hover:text-white'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: sort + count */}
        <div className="flex items-center gap-4 shrink-0">
          <select
            id="sort-select"
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="font-body text-[11px] font-semibold tracking-wider uppercase
                       border border-black px-3 py-2 bg-white text-black
                       cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low – High</option>
            <option value="price-desc">Price: High – Low</option>
          </select>
          <p className="font-body text-[12px] text-mid-gray whitespace-nowrap hidden sm:block">
            {resultCount} {resultCount === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>
    </div>
  );
}
