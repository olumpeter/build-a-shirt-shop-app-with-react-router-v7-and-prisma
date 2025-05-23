import type { Product } from "@prisma/client"

export type ShirtShopProductsType = Omit<
    Product,
    "createdAt" | "updatedAt"
>
