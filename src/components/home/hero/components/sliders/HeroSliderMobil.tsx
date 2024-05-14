"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";
import { placeholderImage } from "@/helpers/placeholderImage";

interface PropsSlider {
  slides: Slides[];
}

interface Slides {
  image: string;
  title: string;
  parraf: string;
  id: string | number;
}

const HeroSliderMobil = ({ slides }: PropsSlider) => {
  return (
    <div className="relative">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#ffff",
          } as React.CSSProperties
        }
        pagination
        loop={true}
        spaceBetween={0}
        autoplay={{
          delay: 3500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2">
        {slides.map(({ image, title, parraf, id }) => (
          <SwiperSlide key={id}>
            <div className="h-full min-h-[500px] relative">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="absolute -z-10 h-full  w-full "
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
              <div className="bg-gray-800/20  absolute top-0 w-full h-full "></div>

              <div className="absolute inset-0 flex items-center justify-center   pt-8">
                <div className="mx-auto max-w-7xl  py-4 w-full">
                  <div className="text-center">
                    <div className="flex flex-col gap-6 items-center">
                      <div className=" flex flex-col gap-1 items-center">
                        <span className="text-white/60 text-[10px]  p-2 ">
                          Ofertas de un 50%
                        </span>
                        <h1 className=" z-30 text-4xl inline-flex animate-text-gradient bg-gradient-to-r from-[#bcbaba] via-[#4e4e4e] to-[#bbb9b9] bg-[200%_auto]  text-center text-transparent font-medium bg-clip-text">
                          {title}
                        </h1>
                      </div>

                      <p className="text-white text-sm px-8 font-light">
                        {parraf}
                      </p>
                      <Link
                        href="/products"
                        className="shadow-md px-4 py-3 text-md font-semibold leading-6 text-white ring-1 ring-white/20 hover:bg-white hover:text-gray-700">
                        Shop collection{" "}
                        <span aria-hidden="true" className="text-xl pl-2">
                          {" "}
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSliderMobil;
