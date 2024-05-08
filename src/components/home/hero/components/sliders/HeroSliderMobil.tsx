"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
                className="absolute -z-10 h-full  w-full cursor-pointer"
              />
              <div className="bg-gray-800/20  absolute top-0 w-full h-full"></div>

              <div className="absolute inset-0 flex items-center justify-center   pt-8">
                <div className="mx-auto max-w-6xl  py-4 w-full">
                  <div className="text-center">
                    <div className="flex flex-col gap-5 items-center">
                      <div>
                        <span className="text-white/80 text-[11px]">
                          Ofertas de un 50%
                        </span>
                        <h1 className="text-white text-4xl ">{title}</h1>
                      </div>

                      <p className="text-white text-sm px-4 font-light">
                        {parraf}
                      </p>
                      <button className="px-4 py-3 text-md font-semibold leading-6 text-white ring-1 ring-white/20 hover:bg-white hover:text-gray-700">
                        Shop collection{" "}
                        <span aria-hidden="true" className="text-xl pl-2">
                          {" "}
                          →
                        </span>
                      </button>
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
