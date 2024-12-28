import { z } from "zod";

export enum LeadFormFields {
  FirstName = "firstName",
  LastName = "lastName",
  Email = "email",
  Age = "age",
}

export const leadSchema = z.object({
  [LeadFormFields.FirstName]: z.string().min(1, "First name is required"),
  [LeadFormFields.LastName]: z.string().min(1, "Last name is required"),
  [LeadFormFields.Email]: z.string().email("Invalid email address"),
  [LeadFormFields.Age]: z.number().min(18, "You must be at least 18 years old"),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
