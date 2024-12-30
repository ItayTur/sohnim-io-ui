import { Text } from "../_components/UI";

export default async function LeadProducts({
  params,
}: {
  params: Promise<{ leadId: number }>;
}) {
  const leadId = (await params).leadId;
  return <Text>hello from prodcuts of {leadId}</Text>;
}
