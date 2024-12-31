import { DialogActions } from "@mui/material";
import { Button, DialogContent, DialogTitle } from "../../UI";
import { type ProductCategory } from "../Products.types";
import { ProductsTable } from "../ProductsTable/ProductsTable";

type ProductCategoryDialogProps = {
  productCategory?: ProductCategory;
  onClose: () => void;
};

export const ProductCategoryDialog = ({
  productCategory,
  onClose,
}: ProductCategoryDialogProps) => {
  const { products = [], name } = productCategory ?? {};
  return (
    <>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <ProductsTable products={products} />
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};
