import { type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import { type Product } from "../Products.types";
import { ProductsTableMenu } from "./ProductsTableMenu";

type ProductsGridRenderCellParams = GridRenderCellParams<Product>;

export const productCategoryColumns: GridColDef[] = [
  { field: "id", headerName: "Category ID", width: 100 },
  { field: "name", headerName: "Category Name", width: 200 },
];

export const productColumns: GridColDef[] = [
  { field: "id", headerName: "Product ID", width: 70 },
  { field: "name", headerName: "Product Name", width: 130 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "description", headerName: "Description", width: 200 },
  {
    headerName: "",
    type: "actions",
    field: "actions",
    align: "right",
    renderCell: ({ row }: ProductsGridRenderCellParams) => (
      <ProductsTableMenu />
    ),
    sortable: false,
    filterable: false,
  },
];
