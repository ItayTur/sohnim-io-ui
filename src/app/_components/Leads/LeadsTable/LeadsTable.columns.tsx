import { type GridColDef, type GridRenderCellParams } from "@mui/x-data-grid";
import { type Lead } from "../Leads.types";
import { LeadsTableMenu } from "./LeadsTableMenu";

type LeadsGridRenderCellParams = GridRenderCellParams<Lead>;

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
    renderCell: ({ row: lead }: LeadsGridRenderCellParams) => (
      <LeadsTableMenu lead={lead} />
    ),
    sortable: false,
    filterable: false,
  },
];
