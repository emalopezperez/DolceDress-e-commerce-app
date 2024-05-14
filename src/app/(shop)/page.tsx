import Hero from "@/components/home/hero/Hero";
import PromoSection from "@/components/home/promoSection/PromoSection";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import Title from "@/components/home/title/Title";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";

const products = initialData.products.slice(0, 10);

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <PromoSection />
        <div className="mt-6">
          <Title
            name="Nuevos ingresos"
            subtitle="Alguno de nuestros productos"
          />
          <ProductsGrid products={products} />
        </div>
      </Container>
    </>
  );
}
