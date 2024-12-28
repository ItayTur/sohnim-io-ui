import { DataGrid, type DataGridProps } from "@mui/x-data-grid";

export const Table = (props: DataGridProps) => {
  return (
    <DataGrid
      sx={{
        color: "var(--foreground-primary)",
        boxShadow: 2,
        border: 2,
        borderColor: "var(--accent-primary-light)",
        "& .MuiDataGrid-cell:hover": {
          color: "var(--accent-primary-light)",
        },
        "& .MuiDataGrid-row--borderBottom": {
          backgroundColor: "var(--accent-primary) !important",
        },
        "& .MuiToolbar-root": {
          color: "var(--foreground-primary)",
        },
        "& .MuiButtonBase-root": {
          color: "var(--foreground-primary) !important",
        },
      }}
      {...props}
    />
  );
};
