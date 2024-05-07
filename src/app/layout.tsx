import type { Metadata } from "next";
import "./styles/globals.css";
import { titleFont } from "@/config/fonts";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="es">
        <body className={titleFont.className}>
          <main className="">{children}</main>
        </body>
      </html>
    </ViewTransitions>
  );
}
