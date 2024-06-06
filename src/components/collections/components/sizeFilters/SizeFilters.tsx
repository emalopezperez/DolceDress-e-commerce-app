import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn-ui/accordion";

interface PropsSizeFilters {
  sizeFilters: Size[];
  handleSizeChange: (value: string) => void;
}

interface Size {
  value: string;
  label: string;
}

const SizeFilters = ({ sizeFilters, handleSizeChange }: PropsSizeFilters) => {
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleSizeChange(event.target.value);
  };
  return (
    <AccordionItem value="size">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Size</span>
      </AccordionTrigger>

      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          {sizeFilters.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center">
              <input
                onChange={handleCheckboxChange}
                value={option.value}
                type="checkbox"
                id={`size-${optionIdx}`}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`size-${optionIdx}`}
                className="ml-3 text-sm text-gray-600">
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default SizeFilters;
