import { api } from "@/trpc/server";
import { Table } from "../../UI";
import { columns } from "./LeadTabls.columns";

export const LeadsTable = async () => {
  const leads = await api.lead.getLeads();
  return <Table rows={leads} loading={!leads} columns={columns} />;
};
