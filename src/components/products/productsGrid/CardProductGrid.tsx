"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { Product } from "../../../interfaces/product.interface";
import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";
import Starts from "@/components/ui/starts/Starts";
import LikeButton from "@/components/ui/buttons/likeButton/LikeButton";

interface PropsCardProduct {
  product: Product;
}

const CardProductGrid = ({ product }: PropsCardProduct) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  const [like, setLike] = useState(false);

  return (
    <article
      key={product.slug}
      className="overflow-hidden rounded-md fade-in border border-gray-100 p-3 shadow-sm">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={placeholderImage}
          alt={product.title}
          className="w-full object-cover rounded transition-all duration-400 ease-in-out sadow-sm"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="mt-4 flex flex-col gap-4">
        <Link href={`/product/${product.slug}`} className="hover:text-gray-600">
          <p className="font-ligth text-sm  ">{product.title}</p>
        </Link>

        <div className="flex justify-between items-center">
          <Starts />
          <LikeButton like={like} setLike={setLike} />
        </div>

        <span className="font-ligth text-md">${product.price}</span>
      </div>
    </article>
  );
};

export default CardProductGrid;
