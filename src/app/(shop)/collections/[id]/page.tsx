import { notFound } from "next/navigation";
import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import HeaderFilters from "@/components/collections/Filters/headerFilters/HeaderFilters";
import CategoryFilters from "@/components/collections/Filters/categoryFilters/CategoryFilters";
import { Accordion } from "@/components/ui/shadcn-ui/accordion";
import ColorsFilters from "@/components/collections/Filters/colorsFilters/ColorsFilters";
import PriceFilters from "@/components/collections/Filters/priceFilters/PriceFilters";
import SizeFilters from "@/components/collections/Filters/sizeFilters/SizeFilters";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import { initialData } from "@/seed/seed";
import { SideBar } from "@/components/collections/Filters/sideBar/SideBar";
import { Filter } from "lucide-react";
import { getProducts } from "@/services/shopify/products";
import { getCollections } from "@/services/shopify/collections";
import { getCollectionProducts } from "../../../../services/shopify/collections";
import { Product } from "@/models/Product";

interface PropsCategory {
  params: {
    id: string;
  };
}

// const SORT_OPTIONS = [
//   { name: "None", value: "none" },
//   { name: "Price: Low to High", value: "price-asc" },
//   { name: "Price: High to Low", value: "price-desc" },
// ];

// const COLOR_FILTERS = [
//   { value: "white", label: "White" },
//   { value: "beige", label: "Beige" },
//   { value: "blue", label: "Blue" },
//   { value: "green", label: "Green" },
//   { value: "purple", label: "Purple" },
// ];

// const SIZE_FILTERS = [
//   { value: "S", label: "S" },
//   { value: "M", label: "M" },
//   { value: "L", label: "L" },
//   { value: "XL", label: "XL" },
//   { value: "XXL", label: "XXL" },
// ];

// const PRICE_FILTERS = [
//   { value: [0, 100], label: "Any price" },
//   {
//     value: [0, 20],
//     label: "Under 20€",
//   },
//   {
//     value: [0, 40],
//     label: "Under 40€",
//   },
// ];

// const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];

// const subCategory = initialData.categories.filter((category) => category);

// interface FilterState {
//   color: string[];
//   price: {
//     isCustom: boolean;
//     range: [number, number];
//   };
//   size: string[];
//   sort: string;
// }

export default async function CollectionPage({ params }: PropsCategory) {
  const { id } = params;

  const products = await getProducts();
  const collections = await getCollections();

  const filtered = products.filter(
    (product: Product) => product.product_type === id
  );

  // const [filter, setFilter] = useState<FilterState>({
  //   color: ["beige", "blue", "green", "purple", "white"],
  //   price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
  //   size: ["L", "M", "S", "L", "XL", "XXL"],
  //   sort: "none",
  // });

  // const handleColorChange = (color: string) => {
  //   setFilter((prevFilter) => {
  //     const newColors = prevFilter.color.includes(color)
  //       ? prevFilter.color.filter((c) => c !== color)
  //       : [...prevFilter.color, color];
  //     return { ...prevFilter, color: newColors };
  //   });
  // };

  // const handleSizeChange = (size: string) => {
  //   setFilter((prevFilter) => {
  //     const newSizes = prevFilter.size.includes(size)
  //       ? prevFilter.size.filter((s) => s !== size)
  //       : [...prevFilter.size, size];
  //     return { ...prevFilter, size: newSizes };
  //   });
  // };

  return (
    <Container>
      <Titles name={id} />

      <div className="flex pb-2 border-b border-gray-200 mb-6 ">
        {/* <HeaderFilters /> */}
        <div className="lg:hidden block">
          <SideBar direction="left" title="Filters" Icon={Filter}>
            <div className="">
              <CategoryFilters />

              {/* <Accordion type="multiple" className="animate-none">
                <ColorsFilters
                  colorFilters={COLOR_FILTERS}
                  handleColorChange={handleColorChange}
                />
                <SizeFilters
                  sizeFilters={SIZE_FILTERS}
                  handleSizeChange={handleSizeChange}
                />
              </Accordion> */}
            </div>
          </SideBar>
        </div>
      </div>

      <section className=" grid  grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className=" col-span-1 hidden lg:block pt-2">
          <CategoryFilters />
          {/* 

          <Accordion type="multiple" className="animate-none">
            <ColorsFilters
              colorFilters={COLOR_FILTERS}
              handleColorChange={handleColorChange}
            />
            <SizeFilters
              sizeFilters={SIZE_FILTERS}
              handleSizeChange={handleSizeChange}
            />
          </Accordion> */}
        </div>

        <div className="lg:col-span-3 sm:col-span-4 col-span-1">
          <ProductsGrid products={filtered} />
        </div>
      </section>
    </Container>
  );
}
