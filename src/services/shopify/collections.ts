import { env } from "@/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { smart_collections } = await response.json();

    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });

    return transformedCollections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const data = await response.json();

    const productsWithCompleteData = await Promise.all(
      data.products.map(async (product: any) => {
        const additionalDataResponse = await fetch(
          shopifyUrls.collections.additionalData(product.id),
          {
            headers: new Headers({
              "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
            }),
          }
        );
        const { product: additionalProductData } =
          await additionalDataResponse.json();

        return {
          id: additionalProductData.id,
          title: additionalProductData.title,
          description: additionalProductData.body_html,
          images: additionalProductData.images,
          image: additionalProductData.images,
          variants: additionalProductData.variants,
          handle: additionalProductData.handle,
          tags: additionalProductData.tags,
          options: additionalProductData.options,
          product_type: additionalProductData.product_type,
          price: additionalProductData.variants[0].price,
          compare_price: additionalProductData.variants[0].compare_at_price,
        };
      })
    );

    return productsWithCompleteData;
  } catch (error) {
    console.error("Error fetching collection products:", error);
    throw new Error("Error fetching collection products");
  }
};
