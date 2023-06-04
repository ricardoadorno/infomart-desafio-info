import { PrismaClient, Product } from "@prisma/client";
import { IProductRepository, TypeQueryGetProducts } from "./interface/product.repository.interface";
import { CreateProductDto } from "../models/product/createProduct.dto";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";


export class ProductRepository implements IProductRepository {
  constructor(private prismaClient: PrismaClient) { }

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const product = await this.prismaClient.product.create({
        data: {
          ...createProductDto

        }
      });


      return product;
    } catch (error: any) {

      if (error?.code == "P2002") {
        throw new BusinessExceptions("Já existe um produto com esse nome!", "DuplicateProductName", 400);
      }
      throw error
    }


  }

  async getProducts(data: TypeQueryGetProducts): Promise<Product[]> {
    const { name, price, category, orderByClause, orderBy, page = 1, pageSize = 25 } = data;
    const filters: any = {};
    if (name) {
      filters.name = { contains: name };
    }
    if (price) {
      filters.price = parseFloat(price.toString());
    }
    if (category) {
      filters.category = { contains: category };
    }

    let orderByQuery;
    if (orderBy && orderByClause) {
      const validOrderByFields = ['name', 'category', 'createdAt'];
      if (validOrderByFields.includes(orderByClause)) {
        const orderByDirection = orderBy === 'asc' ? 'asc' : 'desc';
        orderByQuery = { [orderByClause]: orderByDirection };
      } else {
        throw new BusinessExceptions("Ordenação inválida.", "InvalidOrder", 422);
      }
    }

    let pageValue = parseInt(page.toString());
    let pageSizeValue = parseInt(pageSize.toString());
    pageSizeValue = pageSizeValue > 100 ? 100 : pageSizeValue;
    const products = await this.prismaClient.product.findMany({
      where: filters,
      orderBy: orderByQuery,
      skip: (pageValue - 1) * pageSizeValue,
      take: pageSizeValue,
    });

    return products;
  }

  async getProductById(productId: string): Promise<Product | null> {
    return await this.prismaClient.product.findUnique({
      where: { id: productId },
    });
  }

  async patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>): Promise<Product> {

    try {
      return await this.prismaClient.product.update({
        data: updateProductDto,
        where: { id: productId }
      })
    } catch (error: any) {
      if (error?.code == "P2025") {
        throw new BusinessExceptions("Produto não encontrado.", "ProductNotFound", 404);
      }
      if (error?.code == "P2002") {
        throw new BusinessExceptions("Já existe um produto com esse nome!", "DuplicateProductName", 400);
      }
      throw error
    }
  }


  async deleteProduct(productId: string): Promise<void> {
    try {
      await this.prismaClient.product.delete({
        where: {
          id: productId,
        },
      });
    } catch (error: any) {
      if (error?.code == "P2025") {
        throw new BusinessExceptions("Produto não encontrado!", "ProductNotFound", 404);
      }
      throw error
    }
  }


}