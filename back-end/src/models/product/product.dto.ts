import { Category } from "@prisma/client"

export class ProductDto {

    id: string
    name: string
    price: number
    categoryName: string
    categoryId: string
    imageUrl: string
    description: string

    constructor(
        id: string,
        name: string,
        price: number,
        categoryId: string,
        categoryName: string,
        imageUrl: string,
        description: string | null
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.imageUrl = imageUrl;
        this.description = description || "";
    }

}


