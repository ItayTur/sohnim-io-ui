import { Table } from "../../UI";
import { type Product } from "../Products.types";
import { productColumns } from "./ProductsTable.columns";

type ProductsTableProps = {
  products: Product[];
};

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table
      rows={products}
      columns={productColumns}
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
