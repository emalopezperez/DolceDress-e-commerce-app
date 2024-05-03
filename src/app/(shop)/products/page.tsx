import Title from "@/components/ui/title/Title";
import Container from "@/components/ui/container/Container";
import CategoryFilters from "@/components/products/CategoryFilters/CategoryFilters";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Products() {
  return (
    <div className="mt-24">
      <Container>
        <Title name="Tienda" subtitle="Nuestros productos" />
        <CategoryFilters products={products} />
      </Container>
    </div>
  );
}
