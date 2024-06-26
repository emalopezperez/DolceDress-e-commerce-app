import FormAddress from "@/components/address/formAddress/FormAddress";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import Image from "next/image";

export default function AddressPage() {
  return (
    <Container>
      <Titles name="Direccion" />

      <div className=" mx-0 md:mx-0 lg:mx-0 xl:mx-32">
        <div className="pb-2">
          <Breadcrumbs />
        </div>
        <section className="w-full grid grid-cols-1 lg:grid-cols-5 mb-4 gap-10 ">
          <div className="col-span-1 lg:col-span-2 ">
            <div className="w-full h-full relative">
              <Image
                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="TODO"
                fill
                className="h-full w-full object-cover object-center rounded-md"
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <FormAddress />
          </div>
        </section>
      </div>
    </Container>
  );
}
