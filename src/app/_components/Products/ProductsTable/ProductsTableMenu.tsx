import { useState, type MouseEvent } from "react";
import { Menu, MenuItem } from "../../UI";
import { type Product } from "../Products.types";

export const ProductsTableMenu = ({ product }: { product: Product }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>Menu</button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div>
  );
};
