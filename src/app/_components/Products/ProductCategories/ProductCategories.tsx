import { Text } from "../../UI";
import { ProductCategoriesTable } from "../ProductCategoriesTable/ProductCategoriesTable";

export const ProductCategories = ({ leadId }: { leadId: number }) => {
  return (
    <>
      <Text variant="h2" fontWeight={800} aria-label="product categories table">
        Product Categories
      </Text>

      <ProductCategoriesTable leadId={leadId} />
    </>
  );
};
