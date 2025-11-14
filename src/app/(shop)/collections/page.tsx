import Container from "@/components/ui/container/Container";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import { getProducts } from "@/services/shopify/products";
import { getCollections } from "@/services/shopify/collections";
import Link from "next/link";
import { ChevronRight, Home, SlidersHorizontal } from "lucide-react";
import { Collection } from "@/models/Collection";

export const metadata = {
  title: "DolceDress | Todos los Productos",
  description:
    "Explora nuestra colección completa de moda masculina. Camisas, camperas, trajes y accesorios de calidad premium.",
};

export default async function CollectionsPage() {
  const products = await getProducts();
  const collections = await getCollections();

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
          <span className="text-gray-900 font-medium">Productos</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nuestra Colección
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Descubre piezas excepcionales de moda masculina. Cada prenda está
            diseñada para combinar elegancia atemporal con calidad superior.
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
              className="px-5 py-2.5 rounded-lg border-2 border-gray-900 bg-gray-900 text-white font-medium text-sm transition-all hover:bg-gray-800 hover:border-gray-800">
              Todos los Productos
            </Link>
            {collections.map((collection: Collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="px-5 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-medium text-sm transition-all hover:border-gray-900 hover:text-gray-900">
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
