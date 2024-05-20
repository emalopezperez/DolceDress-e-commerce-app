import Titles from "@/components/ui/titles/Titles";
import Container from "@/components/ui/container/Container";
import { initialData } from "@/seed/seed";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import InfoProductsOrders from "@/components/orders/infoProductsOrders/InfoProductsOrders";
import OrderSummary from "@/components/orders/orderSummary/OrderSummary";
import { CreditCard } from "lucide-react";

const data = initialData.products.slice(0, 3);

interface PropsOrder {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: PropsOrder) {
  const { id } = params;
  return (
    <div className="  w-full mb-2">
      <Container>
        <Titles name={`Orden #${id}`} />
        <div className="mx-0 md:mx-0 lg:mx-0 xl:mx-32">
          <div className="pb-2 divide-gray-200  border-b border-gray-200 mb-4">
            <Breadcrumbs />
          </div>

          <div className="flex  mb-4 items-center justify-start rounded-sm border border-transparent bg-[#373f39]/90 px-6 py-2 text-base font-medium text-white ">
            <div className="mb-1 flex gap-1 items-center ">
              <CreditCard className="w-4 h-4 " />

              <span className="">Pagada</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5  mb-10 gap-2 lg:gap-8  ">
            <section className="col-span-3 ">
              <InfoProductsOrders data={data} />
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
