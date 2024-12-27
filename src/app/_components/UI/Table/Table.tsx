import { DataGrid, type DataGridProps } from "@mui/x-data-grid";

export const Table = (props: DataGridProps) => {
  return (
    <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: "primary.light",
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-row--borderBottom": {
          backgroundColor: "var(--accent-primary) !important",
        },
      }}
      {...props}
    />
  );
};
