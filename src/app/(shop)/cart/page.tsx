"use client";
import HeaderTitles from "@/components/cart/headerTitles/HeaderTitles";
import InfoProductCart from "@/components/cart/infoProductCart/InfoProductCart";
import OrderSummary from "@/components/cart/orderSummary/OrderSummary";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";

const data = initialData.products.slice(0, 3);

export default function CartPage() {
  return (
    <div className="  w-full mb-2">
      <Container>
        <HeaderTitles name="Carrito de compras" />
        <div className="grid grid-cols-1 lg:grid-cols-5  mb-10 gap-2 lg:gap-24 ">
          <section className="col-span-3 ">
            <InfoProductCart data={data} />
          </section>

          <div className="col-span-2 ">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </div>
  );
}
