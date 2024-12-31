"use client";

import { Button } from "../../UI";
import { useDialog } from "../../UI/Dialog/useDialog";
import { LeadDialog } from "../LeadDialog/LeadDialog";

export const CreateLeadButton = () => {
  const { dialogOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        Create Lead
      </Button>
      <LeadDialog open={dialogOpen} onClose={closeDialog} />
    </>
  );
};
