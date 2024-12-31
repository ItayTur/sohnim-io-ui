"use client";

import Link from "next/link";
import { useDialog } from "../../UI/Dialog/useDialog";
import { MenuItem } from "../../UI/Menu/MenuItem";
import { ThreeDotsMenu } from "../../UI/ThreeDotsMenu/ThreeDotsMenu";
import { LeadDialog } from "../LeadDialog/LeadDialog";
import { type Lead } from "../Leads.types";

type LeadTableMenuProps = {
  lead: Lead;
};

export const LeadsTableMenu = ({ lead }: LeadTableMenuProps) => {
  const {
    dialogOpen: leadFormOpen,
    closeDialog: closeLeadForm,
    openDialog: openLeadForm,
  } = useDialog();

  const onEdit = () => {
    openLeadForm();
  };

  return (
    <>
      <ThreeDotsMenu>
        <MenuItem onClick={onEdit}>ערוך</MenuItem>
        <MenuItem>
          <Link href={`/${lead.id}`}>מוצרים</Link>
        </MenuItem>
      </ThreeDotsMenu>
      <LeadDialog open={leadFormOpen} onClose={closeLeadForm} lead={lead} />
    </>
  );
};
