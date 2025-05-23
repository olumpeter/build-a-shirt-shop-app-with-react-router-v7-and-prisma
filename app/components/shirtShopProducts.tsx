import shirtShopProductsStyles from "~/styles/shirtShopProductsComponent.css"

import type { ShirtShopProductsType } from "~/types/products"

export function links() {
    return [
        {
            rel: "stylesheet",
            href: shirtShopProductsStyles,
        },
    ]
}

export default function ShirtShopProducts({
    products,
}: {
    products: ShirtShopProductsType[]
}) {
    return (
        <section className="product-listings">
            {products.map((product) => (
                <>
                    <div className="product-card">
                        <img src={product.image} alt={product.name} />
                        <p className="product-name">{product.name}</p>
                        <p className="product-description">
                            {product.description}
                        </p>
                        <p className="product-price">
                            ${product.price}
                        </p>
                        <button className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                </>
            ))}
        </section>
    )
}
