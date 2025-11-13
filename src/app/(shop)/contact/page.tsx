import Contact from "@/components/ui/Contact";

export const metadata = {
  title: "DolceDress | Contacto",
  description: "Contáctanos para consultas sobre nuestros trajes, camisas, camperas y accesorios. Estamos aquí para ayudarte.",
};

export default function ContactPage() {
  return (
    <div className="lg:pt-24 pt-16">
      <Contact />
    </div>
  );
}
