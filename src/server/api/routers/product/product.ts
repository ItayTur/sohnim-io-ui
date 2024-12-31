import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { type Product, products } from "./product.consts";

const productInputSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
  description: z.string().optional(),
});

export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query(async ({ ctx }) => {
    return products;
  }),
  createProduct: publicProcedure
    .input(productInputSchema)
    .mutation(async ({ input }) => {
      const productToPush: Product = { id: products.length + 1, ...input };
      products.push(productToPush);
      return productToPush;
    }),
  editProduct: publicProcedure
    .input(
      productInputSchema.partial().extend({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const productIndex = products.findIndex(
        (product) => product.id === input.id
      );
      if (productIndex === -1) {
        throw new Error("Product not found");
      }
      products[productIndex] = {
        ...products[productIndex],
        ...input,
      } as Product;
      return products[productIndex];
    }),
});
