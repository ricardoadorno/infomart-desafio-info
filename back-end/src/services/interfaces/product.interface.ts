
import { CreateProductDto } from "../../models/product/createProduct.dto";
import { Product } from "prisma"
import { TypeQueryGetProducts } from "../../repositories/interface/product.repository.interface";
import { ListProducts } from "../../models/listProducts/listProduct";


export interface IProductService {
    getProducts(data: TypeQueryGetProducts): Promise<Product[]>
    getProductById(productId: string): Promise<Product>
    createProduct(createProductDto: CreateProductDto): Promise<Product>
    patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>): Promise<Product>
    deleteProduct(productId: string): Promise<void>
    addProductList(productId: string): Promise<ListProducts>
    deleteProductList(relationId: string): Promise<ListProducts>
}