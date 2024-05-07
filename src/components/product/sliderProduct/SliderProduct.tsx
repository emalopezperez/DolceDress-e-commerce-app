"use client";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "./sliderProduct.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

interface PropsSliderProduct {
  images: string[];
  title: string;
}

const SliderProduct = ({ images, title }: PropsSliderProduct) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        navigation={false}
        autoplay={{
          delay: 3500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="max-h-[610px]">
              <Image
                width={900}
                height={900}
                src={`/products/${image}`}
                alt={title}
                className=" object-cover cursor-pointer h-full w-full"
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
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={title}
              className=" object-cover  cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
