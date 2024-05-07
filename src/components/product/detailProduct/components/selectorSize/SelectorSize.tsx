interface PropsButtonSize {
  size: string;
  setSelectedSize: (value: string) => void;
  selectedSize: string;
}

const SelectorSize = ({
  size,
  setSelectedSize,
  selectedSize,
}: PropsButtonSize) => {
  return (
    <button
      onClick={() => setSelectedSize(size)}
      className={` p-1 px-3  rounded-md shadow-md  ${
        selectedSize === size
          ? "bg-gray-700 text-white  "
          : "border border-gray-400 hover:bg-gray-100 text-[#4a514c]"
      }`}>
      <span className="text-md">{size}</span>
    </button>
  );
};

export default SelectorSize;
