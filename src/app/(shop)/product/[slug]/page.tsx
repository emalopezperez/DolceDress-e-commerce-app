import Title from "@/components/home/title/Title";
import BreadcrumbsProduct from "@/components/product/breadcrumbsProduct/BreadcrumbsProduct";
import DetailProduct from "@/components/product/detailProduct/DetailProduct";
import InfoProduct from "@/components/product/infoProduct/InfoProduct";
import InfoProductMobil from "@/components/product/infoProduct/InfoProductMobil";
import SliderProduct from "@/components/product/sliderProduct/SliderProduct";
import CarouselProducts from "@/components/ui/carouselProducts/CarouselProducts";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface PropsProduct {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: PropsProduct) {
  const { slug } = params;

  const product = initialData.products.find((element) => element.slug === slug);
  const productFilter = initialData.products.filter(
    (element) => element.type === product?.type.slice(0, 15)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="lg:pt-24 pt-16 ">
      <Container>
        <div className=" mx-0 md:mx-0 lg:mx-0 xl:mx-32">
          <div className="pb-3 ">
            <BreadcrumbsProduct type={product.type} name={product.title} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-0 ">
            <div className="lg:col-span-3 col-span-1">
              <SliderProduct
                images={product.images.slice(0, 4)}
                title={product.title}
              />
            </div>

            <div className="col-span-1 lg:col-span-2 ">
              <DetailProduct info={product} />
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
            <CarouselProducts products={productFilter} />
          </div>
        </div>
      </Container>
    </div>
  );
}
