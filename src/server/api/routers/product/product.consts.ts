import { z } from "zod";

export const productInputSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  description: z.string().optional(),
  leadId: z.number(),
});

export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  leadId: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sample Product 1",
    price: 100,
    description: "This is a sample product",
    leadId: 1,
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: 200,
    description: "This is another sample product",
    leadId: 2,
  },
];
