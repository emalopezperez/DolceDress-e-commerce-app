import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";
import Titles from "@/components/ui/titles/Titles";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn-ui/table";

const invoices = [
  {
    invoice: "INV001",
    nombre: "Emanuel lopez",
    paymentStatus: "Pago",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV001",
    nombre: "Emanuel lopez",
    paymentStatus: "Pendiente",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV001",
    nombre: "Emanuel lopez",
    paymentStatus: "Pago",
    totalAmount: "$850.00",
    paymentMethod: "Efectivo",
  },
];

export default function ListOrdersPage() {
  return (
    <Container>
      <Titles name="Ordenes de compra" />

      <div className="mx-0 md:mx-0 lg:mx-0 xl:mx-32">
        <div className="pb-2">
          <Breadcrumbs />
        </div>
        <Table className="border-t border-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Estado</TableHead>

              <TableHead>Metodo</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.nombre}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-[#4a514c]/90 text-white ">
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Container>
  );
}
