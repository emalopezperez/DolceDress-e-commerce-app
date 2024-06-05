export type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";


export interface Product {
  description: string;
  slug: string;
  title: string;
  price: number;
  tags: string[];
  category: string;
  images: string[];
  inStock: number;

}
