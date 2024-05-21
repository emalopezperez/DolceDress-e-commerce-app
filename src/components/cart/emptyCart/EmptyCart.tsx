import React from "react";

const EmptyCart = () => {
  return (
    <div className="relative col-span-full h-80 bg-gray-50 w-full p-12 flex flex-col items-center justify-center">
      <h3 className="text-gray-900 text-xl">
        Su carrito de compras se encuentra vacio
      </h3>
    </div>
  );
};

export default EmptyCart;
