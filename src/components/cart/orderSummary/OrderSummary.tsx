import Link from "next/link";

const OrderSummary = () => {
  return (
    <section className=" rounded-lg bg-gray-50/75 py-2 lg:col-span-5 lg:mt-0 px-4 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Resumen orden de compras
      </h2>

      <dl className="mt-6 space-y-4">
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
          <dd className="text-lg font-medium text-gray-900">$112.32</dd>
        </div>
      </dl>

      <div className="mt-6">
        <div className="mt-8 mb-6">
          <Link
            href="/checkout/address"
            className="flex items-center justify-center rounded-md border border-transparent bg-[#373f39]/90 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#373f39]/80 ">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
