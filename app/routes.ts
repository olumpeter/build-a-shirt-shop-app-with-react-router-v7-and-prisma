import {
    type RouteConfig,
    index,
    route,
} from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("/api/products", "routes/resources/products.tsx"),
] satisfies RouteConfig
