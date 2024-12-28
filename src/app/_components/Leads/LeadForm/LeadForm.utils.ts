import { LeadFormFields, type LeadFormValues } from "./LeadForm.consts";

export const getDefaultLead = (): LeadFormValues => ({
  [LeadFormFields.FirstName]: "",
  [LeadFormFields.LastName]: "",
  [LeadFormFields.Email]: "",
  [LeadFormFields.Age]: 18,
});
