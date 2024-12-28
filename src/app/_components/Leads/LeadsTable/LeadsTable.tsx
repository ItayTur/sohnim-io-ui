"use client";

import { api } from "@/trpc/react";
import { Table } from "../../UI";
import { columns } from "./LeadTabls.columns";

export const LeadsTable = () => {
  const [leads] = api.lead.getLeads.useSuspenseQuery();
  return (
    <Table
      rows={leads}
      loading={!leads}
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
