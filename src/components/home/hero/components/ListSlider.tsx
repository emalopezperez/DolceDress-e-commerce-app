"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

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
    <li
      className={
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 "
      }>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="cursor-pointer fade-in">
        {slides.map(({ image, title, parraf, id }) => (
          <SwiperSlide key={id} className="relative isolate overflow-hidden ">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 -z-10 h-full object-cover w-full"
            />

            <div className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-56 mt-14 md:mt-0 ">
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
                <h1 className=" text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-teal-300 via-red-300 to-sky-600 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="mt-6 text-sm leading-8 text-gray-300">{parraf}</p>
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
    </li>
  );
};

export default ListSlider;
