import Title from "@/components/home/title/Title";
import DetailProduct from "@/components/product/detailProduct/DetailProduct";
import InfoProduct from "@/components/product/infoProduct/InfoProduct";
import InfoProductMobil from "@/components/product/infoProduct/InfoProductMobil";
import SliderProduct from "@/components/product/sliderProduct/SliderProduct";
import CarouselProducts from "@/components/ui/carouselProducts/CarouselProducts";
import Container from "@/components/ui/container/Container";
import { getProduct, getProducts } from "@/services/shopify/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PropsProduct {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: PropsProduct) {
  const { id } = searchParams;
  const products = await getProducts(id);
  const product = products[0];

  if (!product) {
    notFound();
  }

  return {
    title: `DolceDress | $ ${product.title}`,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ searchParams }: PropsProduct) {
  const { id } = searchParams;

  const product = await getProduct(id);
  const products = await getProducts();

  const variants = product.variants;

  if (!product) {
    notFound();
  }

  return (
    <div className="lg:pt-24 pt-16 pb-16 lg:pb-24">
      <Container>
        <div className=" mx-0 md:mx-0 lg:mx-0 xl:mx-32">
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
            <span className="text-gray-900 font-medium truncate max-w-xs">
              {product.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-0 ">
            <div className="lg:col-span-3 col-span-1">
              <SliderProduct images={product.images} title={product.title} />
            </div>

            <div className="col-span-1 lg:col-span-2 ">
              <DetailProduct info={product} variants={variants} />
            </div>
          </div>

          <InfoProduct product={product} />
          <InfoProductMobil product={product} />

          <div className=" mt-8 lg:mt-16">
            <Title
              name="Productos similares"
              subtitle="Los productos mas comprados"
            />
          </div>

          <div className="mt-0 lg:mt-2 w-full h-full ">
            <CarouselProducts products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
}
