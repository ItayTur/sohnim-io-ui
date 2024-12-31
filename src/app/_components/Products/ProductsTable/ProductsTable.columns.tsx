import { type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import { type Product } from "../Products.types";
import { ProductsTableMenu } from "./ProductsTableMenu";

type ProductsGridRenderCellParams = GridRenderCellParams<Product>;

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "description", headerName: "Description", width: 200 },
  {
    headerName: "",
    type: "actions",
    field: "actions",
    align: "right",
    renderCell: ({ row: product }: ProductsGridRenderCellParams) => (
      <ProductsTableMenu product={product} />
    ),
    sortable: false,
    filterable: false,
  },
];
