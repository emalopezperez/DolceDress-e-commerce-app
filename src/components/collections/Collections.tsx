"use client";

import { useState } from "react";
import { SideBar } from "./components/sideBar/SideBar";
import CategoryFilters from "./components/categoryFilters/CategoryFilters";
import { Accordion } from "../ui/shadcn-ui/accordion";
import ColorsFilters from "./components/colorsFilters/ColorsFilters";
import SizeFilters from "./components/sizeFilters/SizeFilters";
import HeaderFilters from "./components/headerFilters/HeaderFilters";
import { Filter } from "lucide-react";
import ProductsGrid from "../products/productsGrid/ProductsGrid";
import { Product, VariantsProduct } from "@/models/Product";
import { Collection } from "@/models/Collection";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
];

const COLOR_FILTERS = [
  { value: "white", label: "White" },
  { value: "beige", label: "Beige" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "purple", label: "Purple" },
];

const SIZE_FILTERS = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const PRICE_FILTERS = [
  { value: [0, 100], label: "Any price" },
  { value: [0, 20], label: "Under 20€" },
  { value: [0, 40], label: "Under 40€" },
];

const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];

interface FilterState {
  color: string[];
  price: {
    isCustom: boolean;
    range: [number, number];
  };
  size: string[];
  sort: string;
}

interface PropsCollection {
  filtered: Product[];
  collectionsCategory: Collection[];
}

const Collections = ({ filtered, collectionsCategory }: PropsCollection) => {
  const [filter, setFilter] = useState<FilterState>({
    color: ["beige", "blue", "green", "purple", "white"],
    price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
    size: ["L", "M", "S", "XL", "XXL"],
    sort: "none",
  });

  const [filteredProducts, setFilteredProducts] = useState();

  const handleColorChange = (color: string) => {
    setFilter((prevFilter) => {
      const newColors = prevFilter.color.includes(color)
        ? prevFilter.color.filter((c) => c !== color)
        : [...prevFilter.color, color];
      return { ...prevFilter, color: newColors };
    });
  };

  const handleSizeChange = (size: string) => {
    setFilter((prevFilter) => {
      const newSizes = prevFilter.size.includes(size)
        ? prevFilter.size.filter((s) => s !== size)
        : [...prevFilter.size, size];
      return { ...prevFilter, size: newSizes };
    });
  };

  return (
    <div>
      <div className="flex pb-2 border-b border-gray-200 mb-6">
        <HeaderFilters
          filter={filter}
          setFilter={setFilter}
          sortOptions={SORT_OPTIONS}
        />
        <div className="lg:hidden block">
          <SideBar direction="left" title="Filters" Icon={Filter}>
            <div>
              <CategoryFilters collectionsCategory={collectionsCategory} />
              <Accordion type="multiple" className="animate-none">
                <ColorsFilters
                  colorFilters={COLOR_FILTERS}
                  handleColorChange={handleColorChange}
                />
                <SizeFilters
                  sizeFilters={SIZE_FILTERS}
                  handleSizeChange={handleSizeChange}
                />
              </Accordion>
            </div>
          </SideBar>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 hidden lg:block pt-2">
          <CategoryFilters collectionsCategory={collectionsCategory} />
          <Accordion type="multiple" className="animate-none">
            <ColorsFilters
              colorFilters={COLOR_FILTERS}
              handleColorChange={handleColorChange}
            />
            <SizeFilters
              sizeFilters={SIZE_FILTERS}
              handleSizeChange={handleSizeChange}
            />
          </Accordion>
        </div>

        <div className="lg:col-span-3 sm:col-span-4 col-span-1">
          <ProductsGrid products={filtered} />
        </div>
      </section>
    </div>
  );
};

export default Collections;
