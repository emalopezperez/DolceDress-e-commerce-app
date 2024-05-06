import Nav from "@/components/ui/nav/Nav";
import SidebarMenu from "@/components/ui/sidebarMenu/SidebarMenu";
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
      <SidebarMenu data={products} title="Carrito de compras" />
      {children}
    </>
  );
}
