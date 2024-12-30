import { type Lead } from "../Leads.types";

export type LeadFormProps = {
  onSuccess: () => void;
  lead?: Lead;
};
