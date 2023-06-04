import { IProductRepository, TypeQueryGetProducts } from "../repositories/interface/product.repository.interface";
import { IProductService } from "./interfaces/product.interface";
import { CreateProductDto } from "../models/product/createProduct.dto";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";

export class ProductService implements IProductService {
    constructor(private productRepository: IProductRepository) { }



    async getProducts(data: TypeQueryGetProducts) {
        return await this.productRepository.getProducts(data);
    }

    async getProductById(productId: string) {

        const product = await this.productRepository.getProductById(productId);
        if (!product) {
            throw new BusinessExceptions("Produto não encontrado!", "ProductNotFound", 404);
        }

        return product;
    }

    async createProduct(createProductDto: CreateProductDto) {
        return await this.productRepository.createProduct(createProductDto);
    }

    async patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>) {
        return this.productRepository.patchProduct(productId, updateProductDto);
    }

    async deleteProduct(productId: string): Promise<void> {
        return this.productRepository.deleteProduct(productId);
    }


}

