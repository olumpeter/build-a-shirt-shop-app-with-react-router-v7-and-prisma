import ShirtShopProducts from "~/components/shirtShopProducts"
import { getProducts } from "~/utils/products.server"
import homePageStyles from "~/styles/homePage.css?url"

import type { Route } from "./+types/home"
import type { ShirtShopProductsType } from "~/types/products"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "React Router V7 and Prisma" },
        {
            name: "description",
            content:
                "Full Stack Type Safety with React Router V7 and Prisma",
        },
    ]
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: homePageStyles,
        },
    ]
}

export async function loader() {
    const products: ShirtShopProductsType[] = await getProducts()

    return { products }
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const { products } = loaderData

    return (
        <div className="app-container">
            <h1>Welcome to Shirt Shop!</h1>
            <ShirtShopProducts products={products} />
        </div>
    )
}
