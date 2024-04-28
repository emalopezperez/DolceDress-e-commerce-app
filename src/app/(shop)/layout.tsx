import Nav from "@/components/ui/nav/Nav";
import SidebarMenu from "@/components/ui/sidebarMenu/SidebarMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ">
      <Nav />
      <SidebarMenu data="carrito de compras" title="Carrito de compras" />
      {children}
    </main>
  );
}
