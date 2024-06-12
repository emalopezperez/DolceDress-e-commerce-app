import Title from "@/components/home/title/Title";
import DetailProduct from "@/components/product/detailProduct/DetailProduct";
import InfoProduct from "@/components/product/infoProduct/InfoProduct";
import InfoProductMobil from "@/components/product/infoProduct/InfoProductMobil";
import SliderProduct from "@/components/product/sliderProduct/SliderProduct";
import CarouselProducts from "@/components/ui/carouselProducts/CarouselProducts";
import Container from "@/components/ui/container/Container";
import { getProduct, getProducts } from "@/services/shopify/products";
import { notFound } from "next/navigation";

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
    <div className="lg:pt-24 pt-16 ">
      <Container>
        <div className=" mx-0 md:mx-0 lg:mx-0 xl:mx-32">
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
