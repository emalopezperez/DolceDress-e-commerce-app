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

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        desciption: product.body_html,
        images: product.images,
        image: product.images,
        variants: product.variants,
        handle: product.handle,
        tags: product.tags,
        options: product.options,
        product_type: product.product_type,
        price: product.variants[0].price,
        compare_price: product.variants[0].compare_at_price,
      };
    });

    return transformedProducts;
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

    const transformedProduct = products.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        desciption: product.body_html,
        images: product.images,
        image: product.images,
        variants: product.variants,
        handle: product.handle,
        tags: product.tags,
        options: product.options,
        product_type: product.product_type,
        price: product.variants[0].price,
        compare_price: product.variants[0].compare_at_price,
      };
    });

    return transformedProduct[0];
  } catch (error) {
    throw error;
  }
};
