"use client";
import { useState } from "react";
import LikeButton from "../../ui/buttons/likeButton/LikeButton";
import SelectorQuantity from "../../cart/selectorQuantity/SelectorQuantity";
import { truncateToWords } from "@/helpers/fcTruncateToTwoWords";
import { Check } from "lucide-react";
import { Product, VariantsProduct } from "@/models/Product";

interface PropsDetailProduct {
  info: Product;
  variants: VariantsProduct[];
}

const DetailProduct = ({ info, variants }: PropsDetailProduct) => {
  const [like, setLike] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<VariantsProduct>(
    variants[0]
  );

  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.option2))
  );
  const uniqueSizes = Array.from(
    new Set(variants.map((variant) => variant.option1))
  );

  const handleSelectVariant = (color: string, size: string) => {
    const variant = variants.find(
      (v) => v.option2 === color && v.option1 === size
    );
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const isVariantAvailable = (color: string, size: string) => {
    return variants.some(
      (v) =>
        v.option2 === color &&
        v.option1 === size &&
        v.inventory_quantity &&
        v.inventory_quantity > 0
    );
  };

  return (
    <div className="flex flex-col md:justify-between md:gap-0 gap-8 h-full md:h-[550px] pl-0 lg:pl-14">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="md:text-4xl tracking-tight-4 text-2xl antialiased">
          {truncateToWords(info.title, 3)}
        </h1>
        <LikeButton like={like} setLike={setLike} />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex  items-center gap-3">
          {selectedVariant.compare_at_price && (
            <span className="text-[12px] text-gray-500 line-through font-light">
              ${selectedVariant.compare_at_price} UYU
            </span>
          )}

          <span className="text-md text-gray-600 font-light">
            ${selectedVariant.price} UYU
          </span>
        </div>

        <div className="border border-[#373f39] px-2 text-[13px] flex items-center shadow-sm py-1">
          {
            <span
              className={`
                ${
                  selectedVariant.inventory_quantity > 0
                    ? "text-[#373f39]"
                    : "text-red-900"
                } `}>
              Stock{" "}
              {selectedVariant.inventory_quantity > 0
                ? selectedVariant.inventory_quantity
                : 0}
            </span>
          }
        </div>
      </div>

      <div>
        <h3 className="text-lg">Colores</h3>
        <div className="flex gap-3 mt-2">
          {uniqueColors.map((color, index) => (
            <button
              key={index}
              onClick={() =>
                handleSelectVariant(color, selectedVariant.option1 || "")
              }
              className={`rounded-full p-1 w-8 h-8 px-9 flex justify-center items-center border shadow-md border-black ${
                selectedVariant.option2 === color ? "bg-gray-300" : ""
              }`}>
              <span>{color}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg">Talles</h3>
        <div className="flex gap-3 mt-2">
          {uniqueSizes.map((size, index) => {
            const available = isVariantAvailable(
              selectedVariant.option2 || "",
              size
            );
            return (
              <button
                key={index}
                onClick={() =>
                  handleSelectVariant(selectedVariant.option2 || "", size)
                }
                disabled={!available}
                className={`p-1 px-6 rounded-sm border border-gray-600 shadow-md ${
                  selectedVariant.option1 === size ? "bg-gray-300" : ""
                } ${!available ? "opacity-50 cursor-not-allowed" : ""}`}>
                <span className="text-md">{size}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg">Descripcion del producto</h3>
        <p className="text-gray-600 text-sm font-light tracking-widest leading-normal mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          accusantium possimus impedit, iure tempore sint quo sequi quisquam
          tempora. Blanditiis et voluptatum dignissimos voluptatibus odio eos
          magnam cum error ducimus?
        </p>
      </div>

      <div className="flex items-center gap-3">
        <SelectorQuantity
          quantity={1}
          setQuantity={() => {}}
          stock={selectedVariant.inventory_quantity}
        />
        <button className="flex items-center justify-center rounded-md border border-transparent bg-[#373f39]/90 py-3 text-base font-medium text-white hover:bg-[#373f39]/80 w-full shadow-md">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
