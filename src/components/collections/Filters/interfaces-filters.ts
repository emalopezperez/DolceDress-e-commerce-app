export interface FilterInterface {
  color: string[];
  price: {
    isCustom: boolean;
    range: [number, number];
  };
  size: string[];
  sort: string;
}