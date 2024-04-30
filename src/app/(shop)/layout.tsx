import Nav from "@/components/ui/nav/Nav";
import SidebarMenu from "@/components/ui/sidebarMenu/SidebarMenu";
import { initialData } from "@/seed/seed";

const products = initialData.products.slice(0, 3);

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ">
      <Nav />
      <SidebarMenu data={products} title="Carrito de compras" />
      {children}
    </main>
  );
}
