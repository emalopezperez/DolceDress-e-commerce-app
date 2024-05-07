import { Minus, Plus } from "lucide-react";

interface PropsQuantity {
  quantity: number;
  setQuantity: (value: number) => void;
  stock: number;
}

const SelectorQuantity = ({ quantity, setQuantity, stock }: PropsQuantity) => {
  const increaseQuantity = () => {
    if (quantity < stock) {
      return setQuantity(quantity + 1);
    }

    return;
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      return setQuantity(quantity - 1);
    }

    return;
  };

  return (
    <div className="rounded-md border border-gray-300   py-3 flex items-center gap-2  px-3 shadow-md">
      <button
        onClick={decreaseQuantity}
        className={`${stock <= 0 && "pointer-events-none"}`}>
        <Minus className="w-4 h-4 text-gray-800" />
      </button>
      <span className="px-2 rounded-md text-md text-[#373f39]">
        {stock === 0 ? stock : quantity}
      </span>
      <button
        onClick={increaseQuantity}
        className={`${stock <= 0 && "pointer-events-none"}`}>
        <Plus className="w-4 h-4 text-gray-800" />
      </button>
    </div>
  );
};

export default SelectorQuantity;
