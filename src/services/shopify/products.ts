import { Product } from "@/models/Product";
import { env } from "@/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (id?: string) => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    const { products } = await response.json();

    return products || [];
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id?: string) => {
  try {
    const apiUrl = `${shopifyUrls.products.all}?ids=${id}`;

    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    const { products } = await response.json();

    return products[0];
  } catch (error) {
    throw error;
  }
};
