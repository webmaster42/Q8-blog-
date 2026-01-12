
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  image: string;
  author: string;
  icon: string;
}

export type Category = 'General' | 'Restaurantes' | 'Hoteles' | 'Farmacias' | 'Retail' | 'Gestión';
