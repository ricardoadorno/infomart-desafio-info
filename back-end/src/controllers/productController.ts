import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { IProductService } from "../services/interfaces/product.interface";
import { CreateProductDto } from "../models/product/createProduct.dto";
import { ProductDto } from "../models/product/product.dto";
import { TypeQueryGetProducts } from "../repositories/interface/product.repository.interface";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";
import { UpdateProductDto } from "../models/product/updateProduct.dto";

export class ProductController {

    constructor(private productService: IProductService) { }

    async getProducts(req: Request, res: Response, next: NextFunction) {

        try {
            const { name = '', price = undefined, category = '', orderByClause = 'createdAt', orderBy = 'asc', pageSize = 25, page = 1 }: TypeQueryGetProducts = req.query;

            if (price != undefined && isNaN(price)) {
                throw new BusinessExceptions("Erro no parametro price!", "InvalidInput", 422);
            }
            if ((page != undefined) && isNaN(page) || page < 1) {
                throw new BusinessExceptions("Erro no parametro page!", "InvalidInput", 422);
            }
            if (pageSize != undefined && isNaN(pageSize)) {
                throw new BusinessExceptions("Erro no parametro pageSize!", "InvalidInput", 422);
            }


            const products = await this.productService.getProducts({ name, price, category, orderByClause, orderBy, page: page, pageSize: pageSize })

            return res.status(200).json(products.map(product => new ProductDto(product.id, product.name, product.price, product.category, product.imageUrl, product.description)));

        } catch (error) {
            next(error);
        }
    }


    async getProductById(req: Request, res: Response, next: NextFunction) {

        try {
            const { id } = req.params;
            if (!id) {
                throw new BusinessExceptions("Erro no parametro id!", "InvalidId", 400);
            }

            const product = await this.productService.getProductById(id);
            const productDto = new ProductDto(product.id, product.name, product.price, product.category, product.imageUrl, product.description);

            return res.status(200).json(productDto);

        } catch (error) {
            console.log(error)
            next(error);
        }
    }


    async postProduct(req: Request, res: Response, next: NextFunction) {

        try {
            const createProductDto = new CreateProductDto(
                req.body.name,
                req.body.price,
                req.body.category,
                req.body.imageUrl,
                req.body.description
            );

            const errors = await validate(createProductDto);
            if (errors.length) {
                return res.status(422).json(errors);
            }

            const product = await this.productService.createProduct(createProductDto);
            const productDto = new ProductDto(product.id, product.name, product.price, product.category, product.imageUrl, product.description);

            return res.status(201).json(productDto);

        } catch (error: any) {
            next(error);
        }
    }

    async patchProduct(req: Request, res: Response, next: NextFunction) {

        try {
            const { id } = req.params;

            const updateProductDto = new UpdateProductDto(
                req.body.name,
                req.body.price,
                req.body.category,
                req.body.imageUrl,
                req.body.description
            );

      
            const errors = await validate(updateProductDto);
            if (errors.length) {
                return res.status(422).json(errors);
            }
            const productUpdate = await this.productService.patchProduct(id, updateProductDto)
            return res.status(200).json(productUpdate);

        } catch (error) {
            next(error);
        }
    }


    async deleteProduct(req: Request, res: Response, next: NextFunction) {

        try {

            const { id } = req.params;

            if (!id) {
                throw new BusinessExceptions("Erro no parametro id!", "InvalidId", 400);
            }
            await this.productService.deleteProduct(id);

            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
}