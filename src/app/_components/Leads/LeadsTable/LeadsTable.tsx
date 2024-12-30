"use client";

import { api } from "@/trpc/react";
import { Table } from "../../UI";
import { columns } from "./LeadsTable.columns";

export const LeadsTable = () => {
  const { data: leads } = api.lead.getLeads.useQuery();

  return (
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
  );
};
