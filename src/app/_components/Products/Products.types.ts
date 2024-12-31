import { type RouterOutputs } from "@/trpc/react";

export type ProductCategory =
  RouterOutputs["product"]["getProductsByLeadId"][number];
export type Product = ProductCategory["products"][number];
