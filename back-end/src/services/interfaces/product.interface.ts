
import { CreateProductDto } from "../../models/product/createProduct.dto";
import { Product } from "prisma"
import { TypeQueryGetProducts } from "../../repositories/interface/product.repository.interface";


export interface IProductService {
    getProducts(data: TypeQueryGetProducts): Promise<Product[]>
    getProductById(productId: string): Promise<Product>
    createProduct(createProductDto: CreateProductDto): Promise<Product>
    patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>): Promise<Product>
    deleteProduct(productId: string): Promise<void>
}