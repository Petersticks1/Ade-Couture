export type Gender = 'men' | 'women';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Category = 'dress' | 'top' | 'bottom' | 'set' | 'outerwear' | 'suit' | 'other';

export interface SizeAvailability {
  XS?: boolean;
  S?: boolean;
  M?: boolean;
  L?: boolean;
  XL?: boolean;
  XXL?: boolean;
}

export interface Product {
  id: string;
  name: string;
  gender: Gender;
  category: Category;
  price: number;
  images: string[];
  sizes: Size[];
  sizeAvailability: SizeAvailability;
  description: string;
  material?: string;
  careInstructions?: string;
  isAvailable: boolean;
  isFeatured?: boolean;
  tags?: string[];
  dateAdded: string;
}

export interface CartItem {
  product: Product;
  size: Size;
  quantity: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: Size } }
  | { type: 'UPDATE_QTY'; payload: { id: string; size: Size; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}
