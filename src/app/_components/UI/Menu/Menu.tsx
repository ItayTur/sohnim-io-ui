import MuiMenu, { type MenuProps as MuiMenuProps } from "@mui/material/Menu";

export const Menu = ({ ...muiMenuProps }: MuiMenuProps) => {
  return <MuiMenu {...muiMenuProps} />;
};
