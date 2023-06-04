import { Product } from "@prisma/client";
import { CreateProductDto } from "../../models/product/createProduct.dto";


export type TypeQueryGetProducts = {
    name?: string,
    price?: number,
    category?: string,
    orderByClause?: "name" | "category" | "createdAt",
    orderBy?: "asc" | "dsc",
    pageSize?: number,
    page?: number
}

export interface IProductRepository {
    getProductById(productId: string): Promise<Product | null>
    getProducts(data: TypeQueryGetProducts): Promise<Product[]>
    createProduct(createProductDto: CreateProductDto): Promise<Product>
    patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>): Promise<Product>
    deleteProduct(productId: string): Promise<void>
}