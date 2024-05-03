import { notFound } from "next/navigation";
import Title from "@/components/ui/title/Title";
import Container from "@/components/ui/container/Container";
import CategoryFilters from "@/components/products/CategoryFilters/CategoryFilters";
import { initialData } from "@/seed/seed";

interface PropsCategory {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: PropsCategory) {
  const { id } = params;

  if (
    id !== "tienda" &&
    id !== "men" &&
    id !== "women" &&
    id !== "accessories"
  ) {
    notFound();
  }

  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  return (
    <div className="mt-24">
      <Container>
        <Title name={id} subtitle="Nuestros productos" />
        <CategoryFilters products={products} />
      </Container>
    </div>
  );
}
