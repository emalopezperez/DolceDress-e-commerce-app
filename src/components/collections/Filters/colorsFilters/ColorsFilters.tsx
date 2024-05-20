import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn-ui/accordion";

interface PropsColorFilters {
  colorFilters: Colors[];
  handleColorChange: (value: string) => void;
}

interface Colors {
  value: string;
  label: string;
}

const ColorsFilters = ({
  colorFilters,
  handleColorChange,
}: PropsColorFilters) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleColorChange(event.target.value);
  };

  return (
    <AccordionItem value="color">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Color</span>
      </AccordionTrigger>

      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          {colorFilters.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center ">
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                value={option.value}
                id={`color-${optionIdx}`}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`color-${optionIdx}`}
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

export default ColorsFilters;
