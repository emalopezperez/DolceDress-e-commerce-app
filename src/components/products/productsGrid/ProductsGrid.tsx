import CardProductGrid from "../cardProduct/CardProductGrid";
import ProductSkeleton from "../productSkeleton/ProductSkeleton";
import EmptyState from "../emptyState/EmptyState";
import { Product } from "@/models/Product";

interface PropsProductsGrid {
  products: Product[];
}

const ProductsGrid = ({ products }: PropsProductsGrid) => {
  return (
    <section className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-3 mb-10 ">
      {products === null ? (
        new Array(12).fill(null).map((_, i) => <ProductSkeleton key={i} />)
      ) : products.length === 0 ? (
        <EmptyState />
      ) : (
        products.map((product) => (
          <CardProductGrid product={product} key={product.id} />
        ))
      )}
    </section>
  );
};

export default ProductsGrid;
