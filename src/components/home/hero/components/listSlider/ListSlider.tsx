"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

interface PropsSlider {
  slides: Slides[];
}

interface Slides {
  image: string;
  title: string;
  parraf: string;
  id: string | number;
}

const ListSlider = ({ slides }: PropsSlider) => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={false}
        autoplay={{
          delay: 3500,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper2">
        {slides.map(({ image, title, parraf, id }) => (
          <SwiperSlide key={id}>
            <div className="w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="absolute inset-0 -z-10 h-full object-cover w-full cursor-pointer"
              />
            </div>

            <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-56 mt-14 md:mt-0 ">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 ">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center ">
                <div className="text-center  ">
                  <h1 className=" inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#4a514c] to-[#ACACAC] bg-[200%_auto] md:text-7xl text-5xl text-center text-transparent font-medium bg-clip-text ">
                    {title}
                  </h1>

                  <p className="mt-12 text-sm leading-8 text-gray-300">
                    {parraf}
                  </p>
                </div>

                <div className="lg:mt-12 mt-8 flex items-center justify-center gap-x-6 ">
                  <button className=" px-6 py-3 text-md font-semibold leading-6 text-white ring-1 ring-white/80 hover:ring-white/20">
                    Shop collection{" "}
                    <span aria-hidden="true" className="text-xl pl-2">
                      {" "}
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListSlider;
