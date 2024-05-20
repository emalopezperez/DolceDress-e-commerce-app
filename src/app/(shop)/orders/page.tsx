import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";

export default function ListOrdersPage() {
  return (
    <Container>
      <Titles name="Orden" />
      <div className="pb-2">
        <Breadcrumbs />
      </div>
    </Container>
  );
}
