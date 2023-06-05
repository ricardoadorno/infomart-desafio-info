import { Category, PrismaClient, Product } from "@prisma/client";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";
import { CreateCategoryDto } from "../models/category/createCategory.dto";
import { TypeQueryGetCategory } from "./interface/category.repository.interface";


export class ProductRepository {
    constructor(private prismaClient: PrismaClient) { }

    async createCategory(createCategoryDto: CreateCategoryDto) {
        try {
            const category = await this.prismaClient.category.create({
                data: {
                    ...createCategoryDto
                }
            });


            return category;
        } catch (error: any) {

            if (error?.code == "P2002") {
                throw new BusinessExceptions("Já existe uma categoria com esse nome!", "DuplicateCategoryName", 400);
            }
            throw error
        }


    }

    async getCategory(data: TypeQueryGetCategory) {
        const { name, orderByClause = "createAt", orderBy = "asc", page = 1, pageSize = 25 } = data;
        const filters: any = {};
        if (name) {
            filters.name = { contains: name };
        }

        let orderByQuery: any;
        const validOrderByFields = ['name', 'createdAt'];
        if (validOrderByFields.includes(orderByClause)) {
            const orderByDirection = orderBy === 'asc' ? 'asc' : 'desc';
            orderByQuery = { [orderByClause]: orderByDirection };
        } else {
            throw new BusinessExceptions("Ordenação inválida.", "InvalidOrder", 422);
        }


        let pageValue = parseInt(page.toString());
        let pageSizeValue = parseInt(pageSize.toString());
        pageSizeValue = pageSizeValue > 100 ? 100 : pageSizeValue;
        const categories = await this.prismaClient.category.findMany({
            where: filters,
            orderBy: orderByQuery,
            skip: (pageValue - 1) * pageSizeValue,
            take: pageSizeValue,
        });

        return categories;
    }

    async getCategoryById(categoryId: string): Promise<Category | null> {
        return await this.prismaClient.category.findUnique({
            where: { id: categoryId },
        });
    }


    async deleteCategory(categoryId: string): Promise<void> {
        try {
            await this.prismaClient.category.delete({
                where: {
                    id: categoryId,
                },
            });
        } catch (error: any) {
            if (error?.code == "P2025") {
                throw new BusinessExceptions("Categoria não encontrado!", "CategoryNotFound", 404);
            }
            throw error
        }
    }


}