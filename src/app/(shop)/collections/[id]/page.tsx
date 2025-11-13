import Container from "@/components/ui/container/Container";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import { notFound } from "next/navigation";
import {
  getCollectionProducts,
  getCollections,
} from "@/services/shopify/collections";
import { Collection } from "@/models/Collection";
import Link from "next/link";
import { ChevronRight, Home, SlidersHorizontal } from "lucide-react";

interface PropsCategory {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PropsCategory) {
  const { id } = params;
  const collections = await getCollections();
  const selectedCollection = collections.find(
    (collection: Collection) => collection.handle === id
  );

  if (!selectedCollection) {
    return {
      title: "DolceDress | Categoría no encontrada",
    };
  }

  return {
    title: `DolceDress | ${selectedCollection.title}`,
    description: `Explora nuestra colección de ${selectedCollection.title}. Moda masculina de calidad premium.`,
  };
}

export default async function CollectionPage({ params }: PropsCategory) {
  const { id } = params;

  const collections = await getCollections();

  const selectedCollection = collections.find(
    (collection: Collection) => collection.handle === id
  );

  if (!selectedCollection) {
    notFound();
  }

  const products = await getCollectionProducts(selectedCollection.id);

  if (!products) {
    notFound();
  }

  return (
    <div className="lg:pt-24 pt-16 pb-16 lg:pb-24">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors">
            <Home className="w-4 h-4" />
            <span className="font-light">Inicio</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link
            href="/collections"
            className="text-gray-500 hover:text-gray-900 transition-colors font-light">
            Productos
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">
            {selectedCollection.title}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {selectedCollection.title}
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Descubre nuestra selección exclusiva de{" "}
            {selectedCollection.title.toLowerCase()}. Cada pieza está diseñada
            para combinar elegancia atemporal con calidad superior.
          </p>
        </div>

        {/* Collections Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-gray-700" />
            <h2 className="font-title text-lg font-semibold text-gray-900">
              Filtrar por Categoría
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/collections"
              className="px-5 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-medium text-sm transition-all hover:border-gray-900 hover:text-gray-900">
              Todos los Productos
            </Link>
            {products.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm transition-all ${
                  collection.handle === id
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900"
                }`}>
                {collection.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600 font-light">
            <span className="font-semibold text-gray-900">
              {products.length}
            </span>{" "}
            productos disponibles
          </p>
        </div>

        {/* Products Grid */}
        <ProductsGrid products={products} />
      </Container>
    </div>
  );
}
