import Titles from "@/components/ui/titles/Titles";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import InfoProductsCheckout from "@/components/checkout/infoProductsCheckout/InfoProductsCheckout";
import OrderSummaryCheckout from "@/components/checkout/orderSummaryCheckout/OrderSummaryCheckout";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

const data = initialData.products.slice(0, 3);

export default function CheckoutPage() {
  return (
    <div className="  w-full mb-2">
      <Container>
        <Titles name="Verificar orden de compra" />

        <div className="mx-32">
          <div className="pb-2">
            <Breadcrumbs />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5  mb-10 gap-2 lg:gap-8  ">
            <section className="col-span-3 ">
              <InfoProductsCheckout data={data} />
            </section>

            <div className="col-span-2 ">
              <OrderSummaryCheckout />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
