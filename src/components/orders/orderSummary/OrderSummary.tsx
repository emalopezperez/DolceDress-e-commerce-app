import { CreditCard } from "lucide-react";

const OrderSummary = () => {
  return (
    <section className=" rounded-lg bg-gray-50/75 py-2 lg:col-span-5 lg:mt-0 px-4 shadow-md">
      <h2 className="text-xl font-bold text-gray-900">Direccion de entrega</h2>
      <div className="space-y-4 mt-2 mb-4">
        <p className="text-gray-900 font-medium text-sm">Emanuel Lopez</p>
        <p className="text-gray-900 font-medium text-sm">
          Montevideo, Tres Cruces
        </p>
        <p className="text-gray-900 font-medium text-sm">213131312</p>
      </div>

      <div className="w-full divide-y divide-gray-200 border-b border-t border-gray-200 mb-4" />

      <h2 className="text-xl font-bold text-gray-900">
        Resumen de la orden de compra
      </h2>
      <dl className="mt-2 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">$99.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <div className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">$5.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <div className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">$8.32</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-lg font-medium text-gray-900">Total</dt>
          <dd className="ext-lg  font-medium text-gray-900">$112.32</dd>
        </div>
      </dl>

      <div className="flex mt-4 items-center justify-start rounded-sm border border-transparent bg-[#373f39]/90 px-6 py-2 text-base font-medium text-white ">
        <div className="mb-1 flex gap-1 items-center ">
          <CreditCard className="w-4 h-4 " />

          <span className="">Pagada</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
