import { Product } from "../product/product";
import { ProductDto } from "../product/product.dto";


export class ListProductItem extends Product {
    idRelation: string
}




export class ListProducts {

    id: string
    name: string
    products: ListProductItem[]

    constructor(
        id: string,
        name: string,
        products: ListProductItem[]
    ) {
        this.id = id;
        this.name = name;
        this.products = products;
    }

}
