import { TabsContent } from "@/components/ui/shadcn-ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn-ui/table";
import { Product } from "@/models/Product";

interface PropsTableInfo {
  data: Product;
}

const TableInfo = ({ data }: PropsTableInfo) => {
  return (
    <TabsContent value="infoAdi" className=" w-full mt-0 mb-12">
      <Table className="border-t border-gray-200 ">
        <TableHeader className="bg-gray-50/50">
          <TableRow>
            <TableHead className="w-[100px]">SKU</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Medidas</TableHead>

            <TableHead>Colores</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Envio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-gray-200 ">
          <TableRow>
            <TableCell className="font-medium">123563</TableCell>
            <TableCell>{data.title}</TableCell>
            <TableCell className="flex gap-2">
              {/* {data.sizes.map((size) => (
                <p key={size}>{size}</p>
              ))} */}
            </TableCell>
            <TableCell>Negro, Blanco</TableCell>
            <TableCell>Algodon</TableCell>
            <TableCell className="pl-5">1</TableCell>
            <TableCell className="pl-3">Si</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TabsContent>
  );
};

export default TableInfo;
