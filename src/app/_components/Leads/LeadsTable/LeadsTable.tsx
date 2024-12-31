"use client";

import { api } from "@/trpc/react";
import { Box } from "@mui/material";
import { Table } from "../../UI";
import { columns } from "./LeadsTable.columns";

export const LeadsTable = () => {
  const { data: leads } = api.lead.getLeads.useQuery();

  return (
    <Box sx={{ width: "100%", height: 400 }}>
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
