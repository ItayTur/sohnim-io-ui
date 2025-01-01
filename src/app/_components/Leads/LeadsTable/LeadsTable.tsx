"use client";

import { api } from "@/trpc/react";
import { Box } from "@mui/material";
import { Table } from "../../UI";
import { columns } from "./LeadsTable.columns";

export const LeadsTable = () => {
  const { data: leads } = api.lead.getLeads.useQuery();

  return (
    <Box
      sx={{ height: { xs: 300, sm: 400 }, width: "100%", overflowX: "auto" }}
    >
      <Table
        rows={leads}
        columns={columns}
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
    </Box>
  );
};
