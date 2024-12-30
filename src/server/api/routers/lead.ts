import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// Mocked DB
type Lead = {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  email: string;
};

const leads: Lead[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    email: "jon.snow@example.com",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    email: "cersei.lannister@example.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    email: "jaime.lannister@example.com",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    email: "arya.stark@example.com",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 99,
    email: "daenerys.targaryen@example.com",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Joe",
    age: 150,
    email: "joe.melisandre@example.com",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    email: "ferrara.clifford@example.com",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    email: "rossini.frances@example.com",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    email: "harvey.roxie@example.com",
  },
];

const leadInputSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().min(18),
  email: z.string().email(), // Added email validation
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
