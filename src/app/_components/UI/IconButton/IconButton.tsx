import MUIIconButton, {
  type IconButtonProps as MUIIconButtonProps,
} from "@mui/material/IconButton";
import React from "react";

export const IconButton: React.FC<MUIIconButtonProps> = (props) => {
  return <MUIIconButton {...props}>{props.children}</MUIIconButton>;
};
