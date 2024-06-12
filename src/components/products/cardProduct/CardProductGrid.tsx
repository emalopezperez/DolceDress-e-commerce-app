"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";
import LikeButton from "@/components/ui/buttons/likeButton/LikeButton";
import { truncateToWords } from "@/helpers/fcTruncateToTwoWords";
import { Product } from "@/models/Product";

interface PropsCardProduct {
  product: Product;
}

const CardProductGrid = ({ product }: PropsCardProduct) => {
  const [displayImage, setDisplayImage] = useState(
    product.images[0] ? product.images[0].src : ""
  );
  const [like, setLike] = useState(false);

  return (
    <article
      key={product.id}
      className="overflow-hidden rounded-md fade-in  p-2 shadow-md  ">
      <div className="relative">
        <Link href={`/product/${product.handle}?id=${product.id}`}>
          <Image
            src={displayImage}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={placeholderImage}
            alt={product.title}
            className="w-full min-h-[360px] max-h-[360px] object-cover rounded  sadow-sm   object-center transition-all duration-300 ease-in-out"
            onMouseEnter={() => setDisplayImage(product.images[1].src)}
            onMouseLeave={() => setDisplayImage(product.images[0].src)}
          />
        </Link>
        <div className="absolute bottom-[20px] lg:bottom-[20px] right-[18px] lg:right-4">
          <LikeButton like={like} setLike={setLike} />
        </div>

        {product.compare_price && (
          <div className="absolute top-[10px]  right-[18px] lg:right-4 bg-green-300 p-1 px-2 text-white rounded-lg text-sm">
            <span>Sale</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Link href={`/product/${product.id}`} className="hover:text-gray-500">
          <h3 className="font-ligth text-gray-800 text-md">
            {truncateToWords(product.title, 4)}
          </h3>
        </Link>
        <div className="flex justify-between items-center">
          {product.compare_price && (
            <span className="text-[12px] text-gray-500 line-through font-light">
              ${product.compare_price} UYU
            </span>
          )}

          <span className="text-sm text-gray-600 font-light">
            ${product.price} UYU
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardProductGrid;
