"use client";
import { useState } from "react";
import { Product } from "@/interfaces/product.interface";
import SelectorColor from "./components/selectorColor/SelectorColor";
import SelectorSize from "./components/selectorSize/SelectorSize";
import Title from "@/components/ui/title/Title";
import Starts from "@/components/ui/starts/Starts";
import LikeButton from "../../ui/buttons/likeButton/LikeButton";
import SelectorQuantity from "./components/selectorQuantity/SelectorQuantity";
import Stock from "./components/stock/Stock";

interface PropsDetailProduct {
  info: Product;
}

const colors = [
  { name: "Black", bgColor: "bg-gray-900" },
  { name: "Grey", bgColor: "bg-gray-400" },
  { name: "Red", bgColor: "bg-red-400" },
  { name: "White", bgColor: "bg-white" },
];

const DetailProduct = ({ info }: PropsDetailProduct) => {
  const [selectedColors, setSelectedColors] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(false);

  return (
    <div className=" flex flex-col md:justify-between md:gap-0 gap-8 h-full md:h-[630px] pl-0 lg:pl-14 ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Title name={info.title} />
        <LikeButton like={like} setLike={setLike} />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xl">
          <span className="text-gray-800">$ </span>
          {info.price}
        </p>
        <p>
          SKU: <span className="text-sm text-gray-700">HN-492801</span>
        </p>
        <Stock stock={info.inStock} />
      </div>

      <div className="">
        <h3 className="text-lg">Colores</h3>
        <div className="flex gap-3 mt-2">
          {colors.map((color) => (
            <SelectorColor
              key={color.name}
              color={color}
              setSelectedColors={setSelectedColors}
              selectedColors={selectedColors}
            />
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="text-lg">Talles</h3>
        <div className="flex gap-3 mt-2">
          {info.sizes.map((size) => (
            <SelectorSize
              key={size}
              size={size}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg">Descripcion del producto</h3>
        <p className="text-gray-600 text-sm mt-2">{info.description}</p>
      </div>

      <div className="flex items-center gap-3">
        <SelectorQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          stock={info.inStock}
        />
        <button className="flex items-center justify-center rounded-md border border-transparent bg-[#373f39]/90  py-3 text-base font-medium text-white  hover:bg-[#373f39]/80 w-full shadow-md">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
