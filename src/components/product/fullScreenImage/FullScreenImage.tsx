import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/shadcn-ui/sheet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Thumbs } from "swiper/modules";
import { placeholderImage } from "@/helpers/placeholderImage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface PropsFullScreenImage {
  images: string[];
  startIndex: number;
}

const FullScreenImage = ({ images, startIndex = 0 }: PropsFullScreenImage) => {
  return (
    <div className="relative w-full h-full">
      <Sheet>
        <SheetTrigger asChild>
          <button className="absolute top-2 md:top-3 right-1 md:right-4 bg-white px-2  py-2 md:px-3 md:py-3 rounded-full shadow-lg hover:bg-gray-800 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-expand">
              <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
              <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
              <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
              <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-full w-full px-3 md:px-0  block md:flex justify-center items-center pt-16 md:pt-24 pb-11 bg-gray-200 bg-opacity-45 transition-opacity backdrop:filter backdrop-blur-sm">
          <Swiper
            initialSlide={startIndex}
            style={
              {
                "--swiper-pagination-color": "#ffff",
              } as React.CSSProperties
            }
            pagination
            modules={[FreeMode, Thumbs, Pagination]}
            className="md:w-[650px] w-full h-[400px] md:h-[600px] shadow-sm rounded-sm">
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center relative w-full h-full">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src={`/products/${image}`}
                    alt="producto"
                    className="cursor-pointer h-full w-full object-cover"
                    placeholder="blur"
                    blurDataURL={placeholderImage}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FullScreenImage;
