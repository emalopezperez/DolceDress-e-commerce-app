"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { Product } from "../../../interfaces/product.interface";
import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";
import Starts from "@/components/ui/starts/Starts";
import LikeButton from "@/components/ui/buttons/likeButton/LikeButton";
import { truncateToWords } from "@/helpers/fcTruncateToTwoWords";

interface PropsCardProduct {
  product: Product;
}

const CardProductGrid = ({ product }: PropsCardProduct) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  const [like, setLike] = useState(false);

  return (
    <article
      key={product.slug}
      className="overflow-hidden rounded-md fade-in  p-2 shadow-md">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={placeholderImage}
          alt={product.title}
          className="w-full object-cover rounded transition-all duration-400 ease-in-out sadow-sm object-center"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-gray-500">
            <h3 className="font-ligth text-sm text-gray-700">
              {truncateToWords(product.title, 2)}
            </h3>
          </Link>
          <span className=" text-sm text-gray-700">${product.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-[12px] text-gray-600">
            Size {product.sizes[0].toUpperCase()}, Black
          </p>

          <LikeButton like={like} setLike={setLike} />
        </div>
      </div>
    </article>
  );
};

export default CardProductGrid;
