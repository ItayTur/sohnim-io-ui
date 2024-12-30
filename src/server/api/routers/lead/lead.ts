import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { type Lead, leads } from "./Lead.consts";

const leadInputSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().min(18),
  email: z.string().email(),
});

export const leadRouter = createTRPCRouter({
  getLeads: publicProcedure.query(async ({ ctx }) => {
    return leads;
  }),
  createLead: publicProcedure
    .input(leadInputSchema)
    .mutation(async ({ input }) => {
      const leadToPush: Lead = { id: leads.length + 1, ...input };
      leads.push(leadToPush);
      return leadToPush;
    }),
  editLead: publicProcedure
    .input(
      leadInputSchema.partial().extend({
        id: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const leadIndex = leads.findIndex((lead) => lead.id === input.id);
      if (leadIndex === -1) {
        throw new Error("Lead not found");
      }
      leads[leadIndex] = { ...leads[leadIndex], ...input } as Lead;
      return leads[leadIndex];
    }),
});
