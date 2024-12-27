import { HydrateClient } from "@/trpc/server";
import { Leads } from "./_components/Leads/Leads";

export default async function Home() {
  // TODO: TRPC server side example
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <Leads />
    </HydrateClient>
  );
}
