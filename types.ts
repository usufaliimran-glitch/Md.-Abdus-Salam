
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'Apparel' | 'Beauty' | 'Accessories';
  subCategory: string;
  isNew?: boolean;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface GolfEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  location: string;
  description: string;
  image: string;
}
