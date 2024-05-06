interface PropsStock {
  stock: number;
}

const Stock = ({ stock }: PropsStock) => {
  return (
    <div className="border border-[#373f39] px-2 text-[13px] flex items-center">
      {stock >= 0 && <span className="text-[#373f39]">Stock {stock}</span>}
    </div>
  );
};

export default Stock;
