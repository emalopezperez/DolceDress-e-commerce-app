"use client";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";

import "./sliderProduct.css";
import "swiper/css";
import "swiper/css/free-mode";
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
    <div className="bg-white">
      <Swiper
        style={{} as React.CSSProperties}
        autoplay={{
          delay: 3500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper2">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="h-[330px] md:h-[630px] w-full relative">
              <Image
                fill
                src={`/products/${image}`}
                alt={title}
                className="  cursor-pointer h-full w-full object-cover "
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper">
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={400}
              height={400}
              src={`/products/${image}`}
              alt={title}
              className=" object-cover  cursor-pointer shadow-xl "
              placeholder="blur"
              blurDataURL={placeholderImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
