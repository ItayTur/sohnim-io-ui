import { type GridColDef } from "@mui/x-data-grid";

export const productColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "price", headerName: "Price", width: 110 },
  { field: "description", headerName: "Description", width: 150 },
];
