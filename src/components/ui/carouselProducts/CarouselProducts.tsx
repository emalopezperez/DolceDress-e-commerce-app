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
import { Product } from "@/models/Product";

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
        align: "center",
        loop: true,
      }}
      className="w-full ">
      <CarouselContent className=" py-4 ">
        {products.map((product, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/5">
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
