import { type RouterOutputs } from "@/trpc/react";

export type Lead = RouterOutputs["lead"]["getLeads"][number];
