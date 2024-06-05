import { initialData, SeedData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.color.deleteMany();
  await prisma.size.deleteMany();
}

(async () => {
  if (process.env.NODE_ENV === "production") return;

  await main();
})();
