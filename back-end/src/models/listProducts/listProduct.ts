import { Product } from "../product/product";

export class ListProducts {

    id: string
    name: string
    products: Product[]

    constructor(
        id: string,
        name: string,
        products: Product[]
    ) {
        this.id = id;
        this.name = name;
        this.products = products;
    }

}
