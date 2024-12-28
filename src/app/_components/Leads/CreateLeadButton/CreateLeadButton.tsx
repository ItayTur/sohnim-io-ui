"use client";

import { useState } from "react";
import { Button, Dialog } from "../../UI";
import { LeadForm } from "../LeadForm/LeadForm";

export const CreateLeadButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onClick = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={onClick}>
        Create Lead
      </Button>
      <Dialog open={modalOpen} onClose={onClose}>
        <LeadForm onSuccess={onClose} />
      </Dialog>
    </>
  );
};
