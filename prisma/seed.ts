import { prisma } from "~/utils/db.server"

async function main() {
    await prisma.product.deleteMany()
    await prisma.product.createMany({
        data: [
            {
                name: "T-Shirt",
                description: "Great fit, super comfy",
                image: "https://i.imgur.com/fVpadKg.png",
                price: 25,
                sku: "123",
            },
            {
                name: "Sweater",
                description: "Awesome for cold days",
                image: "https://i.imgur.com/fVpadKg.png",
                price: 50,
                sku: "456",
            },
            {
                name: "Button Down",
                description: "A little fancier",
                image: "https://i.imgur.com/JxGBvyj.png",
                price: 30,
                sku: "789",
            },
        ],
    })
}

main()
    .then(async () => {
        console.log("The database has been seeded successfully 🌱")
        prisma.$disconnect()
    })
    .catch((e) => {
        console.error(e)
        prisma.$disconnect()
        process.exit(1)
    })
