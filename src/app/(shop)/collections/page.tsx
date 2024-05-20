"use client";
import { useState } from "react";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import { Accordion } from "@/components/ui/shadcn-ui/accordion";
import HeaderFilters from "@/components/collections/Filters/headerFilters/HeaderFilters";
import ColorsFilters from "@/components/collections/Filters/colorsFilters/ColorsFilters";
import SizeFilters from "@/components/collections/Filters/sizeFilters/SizeFilters";
import PriceFilters from "@/components/collections/Filters/priceFilters/PriceFilters";
import { initialData } from "@/seed/seed";
import CategoryFilters from "@/components/collections/Filters/categoryFilters/CategoryFilters";
import { SideBar } from "@/components/collections/Filters/sideBar/SideBar";

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
  {
    value: [0, 20],
    label: "Under 20€",
  },
  {
    value: [0, 40],
    label: "Under 40€",
  },
];

const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];

const subCategory = initialData.categoryProducs.filter((category) => category);
const products = initialData.products;

interface FilterState {
  color: string[];
  price: {
    isCustom: boolean;
    range: [number, number];
  };
  size: string[];
  sort: string;
}

export default function Collections() {
  const [filter, setFilter] = useState<FilterState>({
    color: ["beige", "blue", "green", "purple", "white"],
    price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
    size: ["L", "M", "S", "L", "XL", "XXL"],
    sort: "none",
  });

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
    <Container>
      <Titles name="Nuestros productos" />
      <div className="flex pb-2 border-b border-gray-200 mb-6 ">
        <HeaderFilters
          filter={filter}
          setFilter={setFilter}
          sortOptions={SORT_OPTIONS}
        />
        <SideBar direction="left" title="Filters">
          <div className="">
            <CategoryFilters subCategory={subCategory} />

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
      <section className=" grid  grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className=" col-span-1 hidden lg:block pt-2">
          <CategoryFilters subCategory={subCategory} />

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
          <ProductsGrid products={products} />
        </div>
      </section>
    </Container>
  );
}
