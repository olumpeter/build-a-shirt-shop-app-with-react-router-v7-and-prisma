import { getProducts } from "~/utils/products.server"
import type { Route } from "./+types/products"

export async function loader() {
    const products = await getProducts()

    return { products }
}

export default function Products({
    loaderData,
}: Route.ComponentProps) {
    const { products } = loaderData

    return (
        <>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </>
    )
}
