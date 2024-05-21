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
        </div>
      </Container>
    </div>
  );
}
