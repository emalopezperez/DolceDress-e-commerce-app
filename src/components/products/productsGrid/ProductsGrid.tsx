import CardProductGrid from "../cardProduct/CardProductGrid";

import { Product } from "@/interfaces/product.interface";

interface PropsProductsGrid {
  products: Product[];
}

const ProductsGrid = ({ products }: PropsProductsGrid) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(min(250px,100%),_1fr))] gap-3 md:gap-10 ">
      {products.map((product) => (
        <CardProductGrid product={product} key={product.slug} />
      ))}
    </section>
  );
};

export default ProductsGrid;
