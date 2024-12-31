import { Text } from "../UI";
import { ProductsTable } from "./ProductsTable/ProductsTable";

export const Products = ({ leadId }: { leadId: number }) => {
  return (
    <>
      <Text variant="h2" fontWeight={800} aria-label="products table">
        Products
      </Text>

      <ProductsTable leadId={leadId} />
    </>
  );
};
