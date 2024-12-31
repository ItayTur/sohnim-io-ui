"use client";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import { useState } from "react";
import { IconButton, Menu } from "../../UI";
import { useDialog } from "../../UI/Dialog/useDialog";
import { MenuItem } from "../../UI/Menu/MenuItem";
import { LeadDialog } from "../LeadDialog/LeadDialog";
import { type Lead } from "../Leads.types";

type LeadTableMenuProps = {
  lead: Lead;
};

export const LeadsTableMenu = ({ lead }: LeadTableMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {
    dialogOpen: leadFormOpen,
    closeDialog: closeLeadForm,
    openDialog: openLeadForm,
  } = useDialog();
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEdit = () => {
    openLeadForm();
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={onEdit}>ערוך</MenuItem>
        <MenuItem>
          <Link href={`/${lead.id}`}>מוצרים</Link>
        </MenuItem>
      </Menu>
      <LeadDialog open={leadFormOpen} onClose={closeLeadForm} lead={lead} />
    </>
  );
};
