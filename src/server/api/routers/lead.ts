import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// Mocked DB
type Lead = {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
};

const leads: Lead[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 99 },
  { id: 6, lastName: "Melisandre", firstName: "Joe", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const leadInputSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().min(18),
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
