import CategoryFilters from "@/components/collections/categoryFilters/CategoryFilters";
import HeaderCategorys from "@/components/collections/headerCategorys/HeaderCategorys";
import Container from "@/components/ui/container/Container";

import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Collections() {
  return (
    <div className="">
      <Container>
        <HeaderCategorys name="Nuestros productos" />
        <CategoryFilters products={products} />
      </Container>
    </div>
  );
}
