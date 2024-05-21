import { placeholderImage } from "@/helpers/placeholderImage";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 mt-14 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="promo"
            fill
            className="h-full w-full object-cover object-center"
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Long-term thinking
        </h2>
        <p className="mt-3 text-xl text-white">
          committed to responsible, sustainable, and ethical manufacturing. Our
          small-scale approach allows us to focus on quality and reduce our
          impact. doing our best to delay the inevitable heat-death of the
          universe.
        </p>
        <a
          href="#"
          className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
          Read our story
        </a>
      </div>
    </div>
  );
}
