export interface SeedProductVariant {
  sku: string;
  color: string;
  stockBySize: {
    size: string;
    inStock: number;
  }[];
  images?: string[];
}

export interface SeedProduct {
  description: string;
  slug: string;
  title: string;
  price: number;
  inStock: number;
  tags: string[];
  category: string;
  images: string[];
  variants: SeedProductVariant[];
}

export interface SeedData {
  categories: { name: string }[];
  colors: { name: string }[];
  sizes: { name: string }[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  categories: [
    { name: "Shirts" },
    { name: "Pants" },
    { name: "Hoodies" },
    { name: "Hats" },
    { name: "Jackets" },
    { name: "Accessories" },
    { name: "Shoes" },
  ],
  colors: [{ name: "black" }, { name: "white" }, { name: "green" }],
  sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      slug: "mens_chill_crew_neck_sweatshirt",
      title: "Men’s Chill Crew Neck Sweatshirt",
      inStock: 7,
      tags: ["sweatshirt"],
      category: "Shirts",
      price: 75,
      images: [
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_1.jpg",
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_0_2000.jpg",
      ],
      variants: [
        {
          sku: "CHILL-CREW-BLACK-S",
          color: "red",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
          ],
          images: [
            "1740407-00-A_1.jpg",
            "1740416-00-A_0_2000.jpg",
            "1741425-00-A_1.jpg",
            "7652421-00-A_1.jpg",
          ],
        },
        {
          sku: "CHILL-CREW-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],

          images: ["8529366-00-A_1.jpg", "8764734-00-A_0_2000.jpg"],
        },
        {
          sku: "CHILL-CREW-BLACK-L",
          color: "white",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
          ],
          images: [
            "1740176-00-A_0_2000.jpg",
            "1740176-00-A_1.jpg",
            "1740176-00-A_0_2000.jpg",
            "1740176-00-A_0_2000.jpg",
          ],
        },
      ],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      slug: "men_quilted_shirt_jacket",
      title: "Men's Quilted Shirt Jacket",
      price: 75,
      inStock: 5,
      tags: ["jacket"],
      category: "Shirts",
      images: ["1740280-00-A_0_2000.jpg", "1740280-00-A_1.jpg"],
      variants: [
        {
          sku: "QUILT-JACKET-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "QUILT-JACKET-BLACK-M",
          color: "gray",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "QUILT-JACKET-BLACK-L",
          color: "red",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      inStock: 10,
      tags: ["shirt"],
      category: "Shirts",
      price: 75,
      images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
      variants: [
        {
          sku: "RAVEN-BOMBER-BLACK-M",
          color: "gray",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
        {
          sku: "RAVEN-BOMBER-BLACK-L",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
      ],
    },
    {
      description:
        "Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      slug: "men_turbine_long_sleeve_tee",
      title: "Men's Turbine Long Sleeve Tee",
      inStock: 50,
      tags: ["shirt"],
      category: "Shirts",
      price: 75,
      images: ["8764734-00-A_0_2000.jpg", "8764734-00-A_1.jpg"],
      variants: [
        {
          sku: "TURBINE-LS-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "TURBINE-LS-BLACK-L",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "TURBINE-LS-BLACK-XL",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      slug: "men_cybertruck_owl_tee",
      title: "Men's Cybertruck Owl Tee",
      price: 75,
      inStock: 0,
      tags: ["shirt"],
      category: "Shirts",
      images: ["1549268-00-A_0_2000.jpg", "1549268-00-A_2.jpg"],
      variants: [
        {
          sku: "CYBER-OWL-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      slug: "mens_chill_crew_neck_sweatshirt",
      title: "Men’s Chill Crew Neck Sweatshirt",
      inStock: 7,
      tags: ["sweatshirt"],
      category: "Shirts",
      price: 75,
      images: [
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_1.jpg",
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_0_2000.jpg",
      ],
      variants: [
        {
          sku: "CHILL-CREW-BLACK-S",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "CHILL-CREW-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "CHILL-CREW-BLACK-L",
          color: "ping",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      slug: "men_quilted_shirt_jacket",
      title: "Men's Quilted Shirt Jacket",
      price: 75,
      inStock: 5,
      tags: ["jacket"],
      category: "Shirts",
      images: ["1740280-00-A_0_2000.jpg", "1740280-00-A_1.jpg"],
      variants: [
        {
          sku: "QUILT-JACKET-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "QUILT-JACKET-BLACK-L",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      inStock: 10,
      tags: ["shirt"],
      category: "Shirts",
      price: 75,
      images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
      variants: [
        {
          sku: "RAVEN-BOMBER-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
        {
          sku: "RAVEN-BOMBER-BLACK-L",
          color: "ping",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
      ],
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      slug: "mens_chill_crew_neck_sweatshirt",
      title: "Men’s Chill Crew Neck Sweatshirt",
      inStock: 7,
      tags: ["sweatshirt"],
      category: "Shirts",
      price: 75,
      images: [
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_1.jpg",
        "1740176-00-A_0_2000.jpg",
        "1740176-00-A_0_2000.jpg",
      ],
      variants: [
        {
          sku: "CHILL-CREW-BLACK-S",
          color: "red",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: [
            "1740407-00-A_1.jpg",
            "1740416-00-A_0_2000.jpg",
            "1741425-00-A_1.jpg",
            "7652421-00-A_1.jpg",
          ],
        },
        {
          sku: "CHILL-CREW-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["8529366-00-A_1.jpg", "8764734-00-A_0_2000.jpg"],
        },
        {
          sku: "CHILL-CREW-BLACK-L",
          color: "white",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: [
            "1740176-00-A_0_2000.jpg",
            "1740176-00-A_1.jpg",
            "1740176-00-A_0_2000.jpg",
            "1740176-00-A_0_2000.jpg",
          ],
        },
      ],
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      slug: "men_quilted_shirt_jacket",
      title: "Men's Quilted Shirt Jacket",
      price: 75,
      inStock: 5,
      tags: ["jacket"],
      category: "Shirts",
      images: ["1740280-00-A_0_2000.jpg", "1740280-00-A_1.jpg"],
      variants: [
        {
          sku: "QUILT-JACKET-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "QUILT-JACKET-BLACK-M",
          color: "gray",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "QUILT-JACKET-BLACK-L",
          color: "red",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      inStock: 10,
      tags: ["shirt"],
      category: "Shirts",
      price: 75,
      images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
      variants: [
        {
          sku: "RAVEN-BOMBER-BLACK-M",
          color: "gray",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
        {
          sku: "RAVEN-BOMBER-BLACK-L",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
          images: ["1703767-00-A_0_2000.jpg", "1703767-00-A_1.jpg"],
        },
      ],
    },
    {
      description:
        "Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      slug: "men_turbine_long_sleeve_tee",
      title: "Men's Turbine Long Sleeve Tee",
      inStock: 50,
      tags: ["shirt"],
      category: "Shirts",
      price: 75,
      images: ["8764734-00-A_0_2000.jpg", "8764734-00-A_1.jpg"],
      variants: [
        {
          sku: "TURBINE-LS-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "TURBINE-LS-BLACK-L",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
        {
          sku: "TURBINE-LS-BLACK-XL",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      slug: "men_cybertruck_owl_tee",
      title: "Men's Cybertruck Owl Tee",
      price: 75,
      inStock: 0,
      tags: ["shirt"],
      category: "Shirts",
      images: ["1549268-00-A_0_2000.jpg", "1549268-00-A_2.jpg"],
      variants: [
        {
          sku: "CYBER-OWL-BLACK-M",
          color: "black",
          stockBySize: [
            { size: "S", inStock: 2 },
            { size: "M", inStock: 2 },
            { size: "L", inStock: 2 },
            { size: "XL", inStock: 2 },
          ],
        },
      ],
    },
  ],
};
