import Nav from "@/components/ui/nav/Nav";
import SidebarCart from "@/components/cart/sidebarCart/SidebarCart";
import { initialData } from "@/seed/seed";

const products = initialData.products.slice(0, 3);
const categoryProducts = initialData.categoryProducs.filter(
  (category) => category
);

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav categoryProducts={categoryProducts} />
      <SidebarCart data={products} />
      {children}
    </>
  );
}
