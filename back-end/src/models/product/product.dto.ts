
export class ProductDto {

    id: string
    name: string
    price: number
    category: string
    imageUrl: string
    description: string

    constructor(
        id: string,
        name: string,
        price: number,
        category: string,
        imageUrl: string,
        description: string | null
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.description = description || "";
    }

}


