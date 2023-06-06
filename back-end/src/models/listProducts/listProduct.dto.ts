import { Product } from "../product/product";
import { ProductDto } from "../product/product.dto";


export class ListProductsDto {

    id: string
    name: string
    products: ProductDto[]

    constructor(
        id: string,
        name: string,
        products: Product[] = []
    ) {
        this.id = id;
        this.name = name;
        this.products = [];
        products.forEach(product => {
            this.products.push(new ProductDto("22", product.name, product.price,
                product.category.id, product.category.name, product.imageUrl, product.description))
        })
    }

}


