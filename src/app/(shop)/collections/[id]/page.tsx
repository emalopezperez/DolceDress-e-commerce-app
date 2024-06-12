import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import { notFound } from "next/navigation";
import {
  getCollectionProducts,
  getCollections,
} from "@/services/shopify/collections";
import { Collection } from "@/models/Collection";

interface PropsCategory {
  params: {
    id: string;
  };
}

export default async function CollectionPage({ params }: PropsCategory) {
  const { id } = params;

  const collections = await getCollections();

  const selectedCollectionId = collections.find(
    (collection: Collection) => collection.handle === id
  );

  const products = await getCollectionProducts(selectedCollectionId.id);

  if (!products) {
    notFound();
  }

  return (
    <Container>
      <Titles name={id} />

      <ProductsGrid products={products} />
    </Container>
  );
}
