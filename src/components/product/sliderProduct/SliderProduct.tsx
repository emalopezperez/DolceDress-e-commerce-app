"use client";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";

import "./sliderProduct.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState } from "react";
import { placeholderImage } from "@/helpers/placeholderImage";

interface PropsSliderProduct {
  images: string[];
  title: string;
}

const SliderProduct = ({ images, title }: PropsSliderProduct) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className="">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#808080",
            "--swiper-pagination-bottom": "2%",
          } as React.CSSProperties
        }
        spaceBetween={10}
        pagination
        autoplay={{
          delay: 3500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, Autoplay, Pagination]}
        className="mySwiper2">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className=" h-[380px] md:h-[580px] w-full relative">
              <Image
                fill
                src={`/products/${image}`}
                alt={title}
                className=" object-cover cursor-pointer h-full w-full shadow-md "
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={title}
              className=" object-cover  cursor-pointer shadow-md "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
