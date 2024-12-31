"use client";

import { api } from "@/trpc/react";
import { Table } from "../../UI";
import { columns } from "./ProductsTable.columns";

export const ProductsTable = ({ leadId }: { leadId: number }) => {
  const { data: products } = api.product.getProductsByLeadId.useQuery({
    leadId,
  });

  return (
    <Table
      rows={products}
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
