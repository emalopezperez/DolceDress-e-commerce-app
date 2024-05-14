import BreadcrumbsProduct from "@/components/product/breadcrumbsProduct/BreadcrumbsProduct";
import DetailProduct from "@/components/product/detailProduct/DetailProduct";
import ReviewsProduct from "@/components/product/reviews/Reviews";
import SliderProduct from "@/components/product/sliderProduct/SliderProduct";
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

  if (!product) {
    notFound();
  }

  return (
    <div className="lg:pt-24 pt-16 pb-20 ">
      <Container>
        <div className="mb-2 ">
          <BreadcrumbsProduct type={product.type} name={product.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-0 ">
          <div className="col-span-2  bg-white">
            <SliderProduct images={product.images} title={product.title} />
          </div>

          <div className=" col-span-2 bg-white ">
            <DetailProduct info={product} />
          </div>
        </div>

        <ReviewsProduct />
      </Container>
    </div>
  );
}
