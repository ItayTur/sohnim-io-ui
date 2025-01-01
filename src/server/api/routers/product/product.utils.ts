import { type Product, products } from "./product.consts";

export const getProductsByLeadId = (leadId: number): Product[] => {
  return products.filter((product) => product.leadId === leadId);
};

export const getCategorizedProductsByLeadId = (
  leadId: number
): { name: string; products: Product[] }[] => {
  const productsByCategory = new Map<string, Product[]>();
  const leadProducts = getProductsByLeadId(leadId);

  leadProducts.forEach((product) => {
    if (!productsByCategory.has(product.category)) {
      productsByCategory.set(product.category, []);
    }
    productsByCategory.get(product.category)?.push(product);
  });

  return Array.from(productsByCategory, ([category, products]) => ({
    id: category,
    name: category,
    products,
  }));
};
