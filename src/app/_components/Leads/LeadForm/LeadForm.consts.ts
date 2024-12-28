import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "You must be at least 18 years old"),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export enum LeadFormFields {
  Name = "name",
  Email = "email",
  Age = "age",
}
