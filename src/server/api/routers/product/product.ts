import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { type Product, productInputSchema, products } from "./product.consts";

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
  getProductsByLeadId: publicProcedure
    .input(
      z.object({
        leadId: z.number(),
      })
    )
    .query(async ({ input }) => {
      return products.filter((product) => product.leadId === input.leadId);
    }),
});
