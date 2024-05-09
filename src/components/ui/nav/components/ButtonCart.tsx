import { ShoppingCart } from "lucide-react";
import React from "react";

interface PropsButtonCart {
  openSideMenu?: () => void;
}

const ButtonCart = ({ openSideMenu }: PropsButtonCart) => {
  return (
    <button onClick={openSideMenu}>
      <div className="relative">
        <ShoppingCart className=" w-5 h-5 text-gray-800" />
        <span className="absolute -top-3 text-[10px] ml-2 bg-red-900 rounded-full px-1 text-white">
          3
        </span>
      </div>
    </button>
  );
};

export default ButtonCart;
