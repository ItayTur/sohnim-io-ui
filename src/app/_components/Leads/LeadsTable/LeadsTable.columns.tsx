import { type GridColDef } from "@mui/x-data-grid";
import { LeadsTableMenu } from "./LeadsTableMenu";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    headerName: "",
    type: "actions",
    field: "actions",
    align: "right",
    renderCell: () => <LeadsTableMenu />,
    sortable: false,
    filterable: false,
  },
];
