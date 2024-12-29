import { api, HydrateClient } from "@/trpc/server";
import { Leads } from "./_components/Leads/Leads";

export default async function Home() {
  await api.lead.getLeads.prefetch();

  return (
    <HydrateClient>
      <Leads />
    </HydrateClient>
  );
}
