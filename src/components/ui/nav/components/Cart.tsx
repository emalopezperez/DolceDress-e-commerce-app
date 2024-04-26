import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  return (
    <Link href="/cart">
      <div className="relative">
        <ShoppingCart className="text-gray-700 w-5 h-5 " />
        <span className="absolute -top-3 text-[10px] ml-2 bg-red-900 rounded-full px-1 text-white">
          3
        </span>
      </div>
    </Link>
  );
};

export default Cart;
