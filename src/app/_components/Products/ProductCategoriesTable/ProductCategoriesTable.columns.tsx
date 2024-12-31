import { type GridColDef } from "@mui/x-data-grid";

export const productCategoryColumns: GridColDef[] = [
  { field: "id", headerName: "Category ID", width: 100 },
  { field: "name", headerName: "Category Name", width: 200 },
];
