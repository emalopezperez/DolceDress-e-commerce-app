import type { Metadata } from "next";
import "./styles/globals.css";
import { titleFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: "DolceDress",
  description: "Tienda virtual de ventas de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={titleFont.className}>
        <main className="mt-24">{children}</main>
      </body>
    </html>
  );
}
