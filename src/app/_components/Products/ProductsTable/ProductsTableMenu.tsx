import { MenuItem, ThreeDotsMenu } from "../../UI";
import { type Product } from "../Products.types";

export const ProductsTableMenu = ({ product }: { product: Product }) => {
  const onEdit = () => {
    //implement on edit
  };

  return (
    <ThreeDotsMenu>
      <MenuItem onClick={onEdit}>Edit</MenuItem>
    </ThreeDotsMenu>
  );
};
