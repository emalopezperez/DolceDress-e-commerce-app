import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn-ui/accordion";
import { Slider } from "@/components/ui/shadcn-ui/slider";
import { cn } from "@/lib/utils";

interface PropsFilters {
  priceFilters: { value: [number, number]; label: string }[];
  filter: { isCustom: boolean; range: [number, number] };
  setFilter: (filter: any) => void;
  defaultCustomPrice: [number, number];
}

const PriceFilters = ({
  priceFilters,
  defaultCustomPrice,
  filter,
  setFilter,
}: PropsFilters) => {
  const handleRadioChange = (range: [number, number]) => {
    setFilter((prev: any) => ({
      ...prev,
      price: {
        isCustom: false,
        range: range,
      },
    }));
  };

  const handleCustomPriceChange = (range: [number, number]) => {
    setFilter((prev: any) => ({
      ...prev,
      price: {
        isCustom: true,
        range: range,
      },
    }));
  };

  const minPrice = filter.range[0];
  const maxPrice = filter.range[1];

  return (
    <AccordionItem value="price">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Price</span>
      </AccordionTrigger>

      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          {priceFilters.map((option, optionIdx) => (
            <li key={option.label} className="flex items-center">
              <input
                type="radio"
                id={`price-${optionIdx}`}
                onChange={() => handleRadioChange(option.value)}
                checked={
                  !filter.isCustom &&
                  filter.range[0] === option.value[0] &&
                  filter.range[1] === option.value[1]
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`price-${optionIdx}`}
                className="ml-3 text-sm text-gray-600">
                {option.label}
              </label>
            </li>
          ))}
          <li className="flex justify-center flex-col gap-2">
            <div>
              <input
                type="radio"
                id={`price-${priceFilters.length}`}
                onChange={() => {
                  setFilter((prev: any) => ({
                    ...prev,
                    price: {
                      isCustom: true,
                      range: defaultCustomPrice,
                    },
                  }));
                }}
                checked={filter.isCustom}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`price-${priceFilters.length}`}
                className="ml-3 text-sm text-gray-600">
                Custom
              </label>
            </div>

            <div className="flex justify-between">
              <p className="font-medium">Price</p>
              <div>
                {minPrice.toFixed(0)} € - {maxPrice.toFixed(0)} €
              </div>
            </div>

            <Slider
              className={cn({
                "opacity-50": !filter.isCustom,
              })}
              disabled={!filter.isCustom}
              onValueChange={handleCustomPriceChange}
              value={filter.isCustom ? filter.range : defaultCustomPrice}
              min={defaultCustomPrice[0]}
              max={defaultCustomPrice[1]}
              step={5}
            />
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PriceFilters;
