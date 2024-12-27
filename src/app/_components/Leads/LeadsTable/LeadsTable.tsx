import { Table } from "../../UI";
import { leads } from "./LeadsTable.consts";
import { columns } from "./LeadTabls.columns";

export const LeadsTable = () => {
  return <Table rows={leads} columns={columns} />;
};
