import Hero from "@/components/home/hero/Hero";
import PromoSection from "@/components/home/promoSection/PromoSection";
import Container from "@/components/ui/container/Container";
import Title from "@/components/home/title/Title";
import ProductsGrid from "@/components/products/productsGrid/ProductsGrid";
import Promo from "@/components/ui/promo/Promo";
import CarouselProducts from "@/components/ui/carouselProducts/CarouselProducts";
import { getProducts } from "@/services/shopify/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <Container>
        <PromoSection />
        <div className=" mt-8 lg:mt-12">
          <Title
            name="Nuevos ingresos"
            subtitle="Alguno de nuestros productos"
          />
        </div>
        <div className="mt-2 lg:mt-8 ">
          <ProductsGrid products={products.slice(0, 10)} />
        </div>
        <Promo />
        <div className=" mt-8 lg:mt-12">
          <Title
            name="Productos mas vendidos"
            subtitle="Los productos mas comprados"
          />
        </div>
        <div className="mt-0 lg:mt-4 w-full h-full ">
          <CarouselProducts products={products.slice(0, 8)} />
        </div>
      </Container>
    </>
  );
}
