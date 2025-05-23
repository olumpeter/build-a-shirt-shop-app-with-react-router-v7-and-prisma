import { prisma } from "./db.server"

export async function getProducts() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            image: true,
            sku: true,
        },
    })

    return products
}
