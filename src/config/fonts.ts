import { Playfair_Display, Lato } from "next/font/google";

// Fuente elegante para títulos y headings (serif delicada)
export const titleFont = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Fuente moderna para body text (sans-serif legible)
export const bodyFont = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
