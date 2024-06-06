export interface Product {
  id: number;
  title: string;
  desciption: string;
  body_html: string;
  vendor: string;
  price: number
  product_type: string;
  created_at?: string;
  handle?: string;
  updated_at: string;
  compare_at_price:number;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: VariantsProduct[];
  options: Array<{}>;
  images: ImageProduct[];
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

export interface VariantsProduct {
  admin_graphql_api_id?: string;
  barcode?: string;
  compare_at_price: string;
  created_at?: string;
  fulfillment_service?: string;
  grams?: number;
  id: number;
  image_id?: number;
  inventory_item_id?: number;
  inventory_management?: string;
  inventory_policy?: string;
  inventory_quantity: number;
  old_inventory_quantity?: number;
  option1: string;
  option2: string;
  position: number;
  price: string;
  product_id?: number;
  requires_shipping?: boolean;
  sku?: string;
  taxable?: boolean;
  title: string;
  updated_at?: string;
  weight?: number;
  weight_unit?: string;
}

export interface ImageProduct {
  id: number;
  alt: null | string;
  position?: number;
  product_id: number;
  created_at?: string;
  updated_at?: string;
  admin_graphql_api_id?: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}


