import { notFound } from "next/navigation";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import HeaderCategorys from "@/components/collections/headerCategorys/HeaderCategorys";
import CategoryFilters from "@/components/collections/categoryFilters/CategoryFilters";

interface PropsCategory {
  params: {
    id: string;
  };
}

export default function CollectionPage({ params }: PropsCategory) {
  const { id } = params;

  if (
    id !== "shirts" &&
    id !== "pants" &&
    id !== "jackets" &&
    id !== "accessories"
  ) {
    notFound();
  }

  const products = initialData.products.filter(
    (product) => product.type === id
  );

  return (
    <div className="">
      <Container>
        <HeaderCategorys name={id} />
        <CategoryFilters products={products} />
      </Container>
    </div>
  );
}
