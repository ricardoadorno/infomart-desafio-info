import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { IProductService } from "../services/interfaces/product.interface";
import { CreateProductDto } from "../models/product/createProduct.dto";
import { ProductDto } from "../models/product/product.dto";
import { TypeQueryGetProducts } from "../repositories/interface/product.repository.interface";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";
import { UpdateProductDto } from "../models/product/updateProduct.dto";
import { ListProduct } from "@prisma/client";
import { ListProductsDto } from "../models/listProducts/listProduct.dto";

export class ProductController {

    constructor(private productService: IProductService) { }

    async getProducts(req: Request, res: Response, next: NextFunction) {

        try {
            const { name, price, category, orderByClause, orderBy, pageSize, page }: TypeQueryGetProducts = req.query;

            if (price != undefined && isNaN(price)) {
                throw new BusinessExceptions("Erro no parametro price!", "InvalidInput", 422);
            }
            if ((page != undefined) && isNaN(page) || (page != null && page < 1)) {
                throw new BusinessExceptions("Erro no parametro page!", "InvalidInput", 422);
            }
            if (pageSize != undefined && isNaN(pageSize)) {
                throw new BusinessExceptions("Erro no parametro pageSize!", "InvalidInput", 422);
            }


            const products = await this.productService.getProducts({ name, price, category, orderByClause, orderBy, page: page, pageSize: pageSize })



            return res.status(200).json(products.map(product => new ProductDto(product.id, product.name, product.price, product?.category?.id, product?.category?.name, product.imageUrl, product.description)));

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
            const productDto = new ProductDto(product.id, product.name, product.price, product.category.id, product.category.name, product.imageUrl, product.description);

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

            const productDto = new ProductDto(product.id, product.name, product.price, product.category.id, product.category.name, product.imageUrl, product.description);

            return res.status(201).json(productDto);

        } catch (error) {
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
            const productUpdate = await this.productService.patchProduct(id, updateProductDto);
            const newProduct = new ProductDto(productUpdate.id, productUpdate.name, productUpdate.price, productUpdate.category.id, productUpdate.category.name, productUpdate.imageUrl, productUpdate.description);
            console.log(newProduct);
            return res.status(200).json(newProduct);

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
            const listProducts = await this.productService.deleteProduct(id);

            return res.status(200).json(listProducts);

        } catch (error) {
            next(error);
        }
    }

    async postProductList(req: Request, res: Response, next: NextFunction) {

        try {

            const { id } = req.params;

            if (!id) {
                throw new BusinessExceptions("Erro no parametro id!", "InvalidId", 400);
            }
            const listUpdate = await this.productService.addProductList(id);


            return res.status(200).json(new ListProductsDto(listUpdate.id, listUpdate.name, listUpdate.products));

        } catch (error) {
            next(error);
        }
    }


}