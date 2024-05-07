import { Check } from "lucide-react";

interface PropsColorsButtons {
  color: Colors;
  selectedColors: string;
  setSelectedColors: (value: string) => void;
}

interface Colors {
  name: string;
  bgColor: string;
}

const SelectorColor = ({
  color,
  selectedColors,
  setSelectedColors,
}: PropsColorsButtons) => {
  return (
    <button
      onClick={() => setSelectedColors(color.name)}
      className={`rounded-full p-1 w-8 h-8 flex justify-center items-center transition-all border shadow-md border-black hover:bg-gray-300  ${color.bgColor}`}>
      {color.name === selectedColors && (
        <Check
          className={` w-4 h-4 ${
            color.name === "White" ? " text-black" : " text-white"
          }`}
        />
      )}
    </button>
  );
};

export default SelectorColor;
