"use client";

import { api } from "@/trpc/react";
import { Table } from "../../UI";
import { columns } from "./LeadTabls.columns";

export const LeadsTable = () => {
  const { data: leads, isLoading } = api.lead.getLeads.useQuery();

  return (
    <Table
      rows={leads}
      loading={isLoading}
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
