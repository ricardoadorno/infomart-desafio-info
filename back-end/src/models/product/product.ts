import { Category } from "@prisma/client"


export class Product {

    id: string
    name: string
    price: number
    categoryId: string
    category: Category
    imageUrl: string
    description: string
    updatedAt: Date
    createAt: Date
    listId: string
}


