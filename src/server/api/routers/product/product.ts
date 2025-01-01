import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { getCategorizedProductsByLeadId } from "./product.utils";

export const productRouter = createTRPCRouter({
  getProductsByLeadId: publicProcedure
    .input(
      z.object({
        leadId: z.number(),
      })
    )
    .query(({ input }) => {
      return getCategorizedProductsByLeadId(input.leadId);
    }),
});
