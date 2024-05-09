"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "./heroSlider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Link from "next/link";

interface PropsSlider {
  slides: Slides[];
}

interface Slides {
  image: string;
  title: string;
  parraf: string;
  id: string | number;
}

const HeroSlider = ({ slides }: PropsSlider) => {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#ffff",
          "--swiper-navigation-size": "15px",
        } as React.CSSProperties
      }
      navigation={true}
      loop={true}
      spaceBetween={0}
      autoplay={{
        delay: 3500,
      }}
      modules={[FreeMode, Autoplay, Navigation]}
      className="mySwiper2">
      {slides.map(({ image, title, parraf, id }) => (
        <SwiperSlide key={id}>
          <div className="h-screen w-full relative">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="absolute -z-10 h-full  w-full cursor-pointer object-cover"
            />
            <div className="bg-gray-800/25  absolute top-0 w-full h-full"></div>

            <div className="absolute inset-0 flex items-center justify-center  mx-4 pt-10">
              <div className="mx-auto max-w-2xl py-4 w-full ">
                <div className="text-center">
                  <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col gap-3 items-center">
                      <span className="text-white/60 text-[12px]  p-2 ">
                        Ofertas de un 50%
                      </span>
                      <h1 className=" z-30 text-7xl inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto]  text-center text-transparent font-medium bg-clip-text ">
                        {title}
                      </h1>
                    </div>
                    <p className="text-white text-md px-16 font-light">
                      {parraf}
                    </p>
                    <Link
                      href="/products"
                      className="px-4 py-3 text-md font-semibold leading-6 text-white ring-1 ring-white/20 hover:bg-white hover:text-gray-700 shadow-md">
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
  );
};

export default HeroSlider;
