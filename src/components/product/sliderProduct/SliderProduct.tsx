"use client";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Thumbs } from "swiper/modules";

import "./sliderProduct.css";
import "swiper/css";
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
    <div className=" grid lg:grid-cols-5 grid-cols-1 gap-2">
      <div className=" hidden lg:grid lg:col-span-1 ">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={0}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={400}
                height={400}
                src={`/products/${image}`}
                alt={title}
                className=" object-cover  cursor-pointer  "
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-4">
        <Swiper
          style={
            {
              "--swiper-pagination-color": "#ffff",
            } as React.CSSProperties
          }
          pagination
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs, Pagination]}
          className="mySwiper2">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] md:h-[550px] w-full relative">
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
      </div>
    </div>
  );
};

export default SliderProduct;
