import { api, HydrateClient } from "@/trpc/server";
import { ProductCategories } from "../_components/Products/ProductCategories/ProductCategories";

export default async function LeadProducts({
  params,
}: {
  params: Promise<{ leadId: number }>;
}) {
  const leadId = Number((await params).leadId);
  void api.product.getProductsByLeadId({ leadId });
  return (
    <HydrateClient>
      <ProductCategories leadId={leadId} />
    </HydrateClient>
  );
}
