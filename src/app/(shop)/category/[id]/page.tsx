import { notFound } from "next/navigation";
import Title from "@/components/ui/title/Title";
import Container from "@/components/ui/container/Container";

interface PropsCategory {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: PropsCategory) {
  const { id } = params;

  if (id !== "men" && id !== "women") {
    notFound();
  }

  return (
    <div className="">
      <Container>
        <Title name={id} subtitle="Nuestros productos" />
        <h1>Category {id}</h1>
      </Container>
    </div>
  );
}
