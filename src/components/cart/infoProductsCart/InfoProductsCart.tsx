"use client";

import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";
import { Product } from "@/interfaces/product.interface";
import SelectorQuantity from "../selectorQuantity/SelectorQuantity";
import Link from "next/link";
import { useState } from "react";

interface PropsInfoProduct {
  data: Product[];
}

const InfoProductsCart = ({ data }: PropsInfoProduct) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-b border-t border-gray-200">
      {data.map((product) => (
        <li key={product.slug} className="flex py-4 items-center">
          <div className="flex-shrink-0">
            <Image
              src={`/products/${product.images[0]}`}
              alt={product.title}
              width={80}
              height={80}
              className="rounded-md object-cover object-center w-full h-full "
              placeholder="blur"
              blurDataURL={placeholderImage}
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-medium text-gray-700 hover:text-gray-800">
                      {product.title}
                    </Link>
                  </h3>
                </div>
                <div className="mt-1 flex text-sm">
                  <p className="text-gray-500">azul</p>

                  <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                    12
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <div className="flex justify-between text-sm items-center">
                  <p className=" text-sm font-medium text-gray-900">
                    $ {product.price}
                  </p>

                  <SelectorQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={product.inStock}
                  />

                  <button
                    type="button"
                    className="font-medium text-red-600 hover:text-red-900">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InfoProductsCart;
