import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import {
  productCategoriesByLead,
  type ProductCategory,
} from "./product.consts";

export const productRouter = createTRPCRouter({
  getProductsByLeadId: publicProcedure
    .input(
      z.object({
        leadId: z.number(),
      })
    )
    .query(({ input }) => {
      return productCategoriesByLead[input.leadId] ?? ([] as ProductCategory[]);
    }),
});
