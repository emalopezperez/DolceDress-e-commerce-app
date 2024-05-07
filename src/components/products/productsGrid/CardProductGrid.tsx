"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "../../../interfaces/product.interface";
import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";

interface PropsCardProduct {
  product: Product;
}

const CardProductGrid = ({ product }: PropsCardProduct) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <article key={product.slug} className="overflow-hidden rounded-md fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={placeholderImage}
          alt={product.title}
          className="w-full object-cover rounded transition-all duration-400 ease-in-out"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-gray-600">
          <p className="font-ligth">{product.title}</p>
        </Link>
        <span className="font-bold ">${product.price}</span>
      </div>
    </article>
  );
};

export default CardProductGrid;
