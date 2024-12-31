import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { products } from "./product.consts";

export const productRouter = createTRPCRouter({
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
