"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn-ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import CardProductGrid from "@/components/products/cardProduct/CardProductGrid";
import { Product } from "@/interfaces/product.interface";

interface PropsCarouselProducts {
  products: Product[];
}

const CarouselProducts = ({ products }: PropsCarouselProducts) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full ">
      <CarouselContent className=" py-4 ">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/6">
            <CardProductGrid product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:flex hidden" />
      <CarouselNext className="lg:flex hidden" />
    </Carousel>
  );
};

export default CarouselProducts;
