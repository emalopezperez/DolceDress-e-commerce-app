import Hero from "@/components/home/hero/Hero";
import PromoSection from "@/components/home/promoSection/PromoSection";
import Container from "@/components/ui/container/Container";
import Title from "@/components/ui/title/Title";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <PromoSection />
        <Title title="Nuestros productos" subtitle="Nuestros productos" />
      </Container>
    </>
  );
}
