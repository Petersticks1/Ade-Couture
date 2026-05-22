import type { Size, SizeAvailability } from '../../types';

interface SizeSelectorProps {
  sizes: Size[];
  sizeAvailability: SizeAvailability;
  selected: Size | null;
  onSelect: (size: Size) => void;
}

export default function SizeSelector({ sizes, sizeAvailability, selected, onSelect }: SizeSelectorProps) {
  return (
    <div>
      <p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-mid-gray mb-3">
        Select Size
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const available = sizeAvailability[size] !== false;
          const isSelected = selected === size;

          return (
            <button
              key={size}
              aria-label={`Size ${size}${!available ? ' — sold out' : ''}`}
              disabled={!available}
              onClick={() => available && onSelect(size)}
              className={`
                w-12 h-10 font-body text-[12px] font-semibold tracking-wider
                border transition-all duration-200 cursor-pointer
                ${isSelected
                  ? 'bg-black text-white border-black'
                  : available
                    ? 'bg-white text-black border-black hover:bg-black hover:text-white'
                    : 'bg-white text-light-gray border-light-gray line-through cursor-not-allowed'
                }
              `}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
