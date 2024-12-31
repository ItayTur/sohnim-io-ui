import { Dialog } from "../../UI";
import { LeadForm } from "../LeadForm/LeadForm";
import { type Lead } from "../Leads.types";

type LeadDialogProps = {
  open: boolean;
  onClose: () => void;
  lead?: Lead;
};

export const LeadDialog = ({ open, onClose, lead }: LeadDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <LeadForm onClose={onClose} lead={lead} />
    </Dialog>
  );
};
