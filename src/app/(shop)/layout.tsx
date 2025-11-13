import Nav from "@/components/ui/nav/Nav";
import SidebarCart from "@/components/cart/sidebarCart/SidebarCart";
import { initialData } from "@/seed/seed";
import Footer from "@/components/ui/footer/Footer";
import { getCollections } from "@/services/shopify/collections";
import ScrollToTop from "@/components/ui/ScrollToTop";

const products = initialData.products.slice(0, 3);

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <>
      <Nav categories={collections} />
      <SidebarCart data={products} />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
