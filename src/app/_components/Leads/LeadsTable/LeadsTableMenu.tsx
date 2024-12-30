"use client";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Dialog, Menu } from "../../UI";
import { useDialog } from "../../UI/Dialog/useDialog";
import { MenuItem } from "../../UI/Menu/MenuItem";
import { LeadForm } from "../LeadForm/LeadForm";
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

  const onClearingHouse = () => {
    // Implement the clearing house functionality here
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
        <MenuItem onClick={onClearingHouse}>מסלקה</MenuItem>
      </Menu>
      <Dialog open={leadFormOpen}>
        <LeadForm onSuccess={closeLeadForm} lead={lead} />
      </Dialog>
    </>
  );
};
