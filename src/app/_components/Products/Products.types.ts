import { type RouterOutputs } from "@/trpc/react";

export type Product = RouterOutputs["product"]["getProducts"][number];
