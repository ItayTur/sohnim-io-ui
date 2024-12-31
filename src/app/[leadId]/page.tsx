import { api, HydrateClient } from "@/trpc/server";
import { Products } from "../_components/Products/Products";

export default async function LeadProducts({
  params,
}: {
  params: Promise<{ leadId: number }>;
}) {
  const leadId = Number((await params).leadId);
  void api.product.getProductsByLeadId({ leadId });
  return (
    <HydrateClient>
      <Products leadId={leadId} />
    </HydrateClient>
  );
}
