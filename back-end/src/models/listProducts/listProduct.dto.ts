import { Product } from "../product/product";
import { ProductDto } from "../product/product.dto";

export class ListProductsItemDto extends ProductDto {
    idRelation: string

    constructor(
        id: string,
        name: string,
        price: number,
        categoryId: string | null,
        categoryName: string | null,
        imageUrl: string,
        description: string | null,
        idRelation: string
    ) {
        super(id, name, price, categoryId, categoryName, imageUrl, description)
        this.idRelation = idRelation;
    }
}

export class ListProductsItem extends Product {
    idRelation: string
}
export class ListProductsDto {

    id: string
    name: string
    products: ProductDto[]

    constructor(
        id: string,
        name: string,
        products: ListProductsItem[] = []
    ) {
        this.id = id;
        this.name = name;
        this.products = [];
        products.forEach(product => {
            this.products.push(new ListProductsItemDto(product.id, product.name, product.price,
                product.category.id, product.category.name, product.imageUrl, product.description, product.idRelation))
        })
    }

}


