export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sample Product 1",
    price: 100,
    description: "This is a sample product",
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: 200,
    description: "This is another sample product",
  },
];
