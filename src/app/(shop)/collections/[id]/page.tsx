import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import { getProducts } from "@/services/shopify/products";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";

interface PropsCategory {
  params: {
    id: string;
  };
}

export default async function CollectionPage({ params }: PropsCategory) {
  const { id } = params;

  const products = await getProducts();

  const filtered = products.filter(
    (product: Product) => product.product_type === id
  );

  return (
    <Container>
      <Titles name={id} />

      <ProductsGrid products={filtered} />
    </Container>
  );
}
