import { MenuItem, ThreeDotsMenu } from "../../UI";

export const ProductsTableMenu = () => {
  const onEdit = () => {
    //implement on edit
  };

  return (
    <ThreeDotsMenu>
      <MenuItem onClick={onEdit}>פעולה</MenuItem>
    </ThreeDotsMenu>
  );
};
