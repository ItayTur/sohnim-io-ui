"use client";

import { Button, Dialog } from "../../UI";
import { useDialog } from "../../UI/Dialog/useDialog";
import { LeadForm } from "../LeadForm/LeadForm";

export const CreateLeadButton = () => {
  const { dialogOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        Create Lead
      </Button>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <LeadForm onSuccess={closeDialog} />
      </Dialog>
    </>
  );
};
