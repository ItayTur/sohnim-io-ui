import { type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import { type Lead } from "../Leads.types";
import { LeadsTableMenu } from "./LeadsTableMenu";

type LeadsGridRenderCellParams = GridRenderCellParams<Lead>;

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First name" },
  { field: "lastName", headerName: "Last name" },
  {
    field: "age",
    headerName: "Age",
    type: "number",
  },
  {
    headerName: "",
    type: "actions",
    field: "actions",
    align: "right",
    renderCell: ({ row: lead }: LeadsGridRenderCellParams) => (
      <LeadsTableMenu lead={lead} />
    ),
    sortable: false,
    filterable: false,
  },
];
