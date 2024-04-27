import Container from "@/components/ui/container/Container";
import Nav from "@/components/ui/nav/Nav";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" ">
      <Nav />
      {children}
    </main>
  );
}
