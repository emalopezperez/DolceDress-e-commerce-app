import Titles from "@/components/ui/titles/Titles";
import InfoProductsCart from "@/components/cart/infoProductsCart/InfoProductsCart";
import OrderSummary from "@/components/cart/orderSummary/OrderSummary";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

const data = initialData.products.slice(0, 3);

export default function CartPage() {
  return (
    <div className="  w-full mb-2">
      <Container>
        <Titles name="Carrito de compras" />
        <div className=" mx-0 md:mx-0 lg:mx-0 xl:mx-32">
          <div className="pb-2">
            <Breadcrumbs />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5  mb-10 gap-2 lg:gap-14  ">
            <section className="col-span-3 ">
              <InfoProductsCart data={data} />
            </section>

            <div className="col-span-2 ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
