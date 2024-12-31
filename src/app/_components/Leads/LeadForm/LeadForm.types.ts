import { type Lead } from "../Leads.types";

export type LeadFormProps = {
  onClose: () => void;
  lead?: Lead;
};
