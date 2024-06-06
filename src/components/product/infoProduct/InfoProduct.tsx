import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn-ui/tabs";

import Description from "./components/Description";
import ReviewsProduct from "./components/reviews/Reviews";
import { Product } from "@/models/Product";

interface PropsInfoProduct {
  product: Product;
}

const InfoProduct = ({ product }: PropsInfoProduct) => {
  return (
    <Tabs
      defaultValue="descript"
      className="w-full mt-16 md:flex justify-center flex-col items-center hidden">
      <TabsList className="mb-14 gap-14  bg-white border-b border-gray-300 w-full">
        <TabsTrigger value="descript">Producto descripcion</TabsTrigger>

        <TabsTrigger value="envioydevo">Política de Devoluciones</TabsTrigger>
        <TabsTrigger value="reviews">Producto reviews</TabsTrigger>
      </TabsList>
      <Description text={product.desciption} />

      <TabsContent value="envioydevo" className="  w-full ">
        <h3 className="pb-2">Política de Devoluciones</h3>
        <p className="text-gray-700 text-sm font-light tracking-widest leading-relaxed">
          Política de Devoluciones Despacho: Los pedidos se despachan dentro de
          las 24 horas posteriores a la confirmación de la compra. Envío
          gratuito: Ofrecemos envío gratuito en todos los productos con una
          compra mínima de $50. Tiempo de entrega internacional: Los pedidos
          internacionales se entregan en un plazo de 7 a 10 días hábiles.
          Efectivo en la entrega: Esta opción puede estar disponible para
          ciertos productos y ubicaciones. Devoluciones y cambios: Facilitamos
          devoluciones y cambios dentro de un plazo de 30 días desde la fecha de
          recepción del producto. Para ser elegible para una devolución, el
          producto debe estar sin usar y en las mismas condiciones en que lo
          recibió. También debe estar en su embalaje original. Proceso de
          devolución Solicitud de devolución: Para iniciar una devolución, envíe
          un correo electrónico a nuestro servicio de atención al cliente con su
          número de pedido y motivo de la devolución. Aprobación: Una vez que
          recibamos su solicitud de devolución, le enviaremos una aprobación de
          devolución junto con instrucciones detalladas sobre cómo y dónde
          enviar su artículo. Envío del producto: Devuelva el producto siguiendo
          las instrucciones proporcionadas. Usted será responsable de pagar sus
          propios costos de envío para devolver su artículo. Los costos de envío
          no son reembolsables. Reembolso: Una vez que recibamos su devolución y
          la inspeccionemos, le notificaremos sobre la aprobación o rechazo de
          su reembolso. Si es aprobado, se procesará un reembolso a su método de
          pago original en un plazo de 30 dias.
        </p>
      </TabsContent>
      <TabsContent value="reviews">
        <ReviewsProduct />
      </TabsContent>
    </Tabs>
  );
};

export default InfoProduct;
