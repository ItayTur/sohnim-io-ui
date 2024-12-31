"use client";

import { api } from "@/trpc/react";
import Box from "@mui/material/Box/Box";
import { useState } from "react";
import { Dialog, Table } from "../../UI";
import { ProductCategoryDialog } from "../ProductCategoryDialog/ProductCategoryDialog";
import { type ProductCategory } from "../Products.types";
import { productCategoryColumns } from "./ProductCategoriesTable.columns";

export const ProductCategoriesTable = ({ leadId }: { leadId: number }) => {
  const { data: productCategories, isLoading } =
    api.product.getProductsByLeadId.useQuery({
      leadId,
    });

  const [dialogCategory, setDialogCategory] = useState<ProductCategory>();
  const dialogOpen = Boolean(dialogCategory);

  const onCategoryClick = ({ row }: { row: ProductCategory }) => {
    setDialogCategory(row);
  };

  const onCloseDialog = () => setDialogCategory(undefined);

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <Table
        rows={productCategories}
        onRowClick={onCategoryClick}
        loading={isLoading}
        columns={productCategoryColumns}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "id",
                sort: "desc",
              },
            ],
          },
        }}
      />
      <Dialog open={dialogOpen} onClose={onCloseDialog}>
        <ProductCategoryDialog
          productCategory={dialogCategory}
          onClose={onCloseDialog}
        />
      </Dialog>
    </Box>
  );
};
