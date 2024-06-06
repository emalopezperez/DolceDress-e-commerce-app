import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/shadcn-ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { FilterInterface } from "../interfaces-filters";

interface PropsHeaderFilter {
  filter: FilterInterface;
  setFilter: (values: any) => void;
  sortOptions: SortOptions[];
}

interface SortOptions {
  name: string;
  value: string;
}

const HeaderFilters = ({
  filter,
  setFilter,
  sortOptions,
}: PropsHeaderFilter) => {
  return (
    <div className="flex justify-between items-center  w-full">
      <Breadcrumbs />
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-700 text-sm group inline-flex items-center justify-center hover:text-gray-900">
            Sort
            <ChevronDown className="-mr-1 ml-1 h-4 w-4 flex-shrink-0 text-gray-900 group-hover:text-gray-500 cursor-pointer" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {sortOptions.map((option) => (
              <button
                key={option.name}
                className={cn("text-left w-full block px-4 py-2 text-sm ", {
                  "text-gray-900 bg-gray-100": option.value === filter.sort,
                  "text-gray-500": option.value !== filter.sort,
                })}
                onClick={() => {
                  setFilter((prev: any) => ({
                    ...prev,
                    sort: option.value,
                  }));
                }}>
                {option.name}
              </button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderFilters;
