import DetailProduct from "@/components/product/detailProduct/DetailProduct";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import { StarIcon } from "lucide-react";
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
    <div className="mt-24 mb-20 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="col-span-1 md:col-span-2 ">SlidesShot</div>

          <div className="col-span-1  ">
            <DetailProduct info={product} />
          </div>
        </div>
      </Container>
    </div>
  );
}
