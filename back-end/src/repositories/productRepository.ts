import { PrismaClient, Product } from "@prisma/client";
import { IProductRepository, TypeQueryGetProducts } from "./interface/product.repository.interface";
import { CreateProductDto } from "../models/product/createProduct.dto";
import { BusinessExceptions } from "../exceptions/BusinessExceptions";


export class ProductRepository implements IProductRepository {
  constructor(private prismaClient: PrismaClient) { }

  async createProduct(createProductDto: CreateProductDto) {
    try {

      let category = await this.prismaClient.category.findUnique({
        where: { name: createProductDto.category }
      })

      if (!category) {
        category = await this.prismaClient.category.create({
          data: {
            name: createProductDto.category
          }
        })
      }


      const product = await this.prismaClient.product.create({
        data: {
          ...createProductDto,
          category: {
            connect: { id: category.id }
          }
        },
        include: {
          category: true
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

  async getProducts(data: TypeQueryGetProducts) {
    const { name, price, category, orderByClause = "createdAt", orderBy = "asc", page = 1, pageSize = 25 } = data;
    const filters: any = {};
    if (name) {
      filters.name = { contains: name };
    }
    if (price) {
      filters.price = parseFloat(price.toString());
    }

    if (category) {
      const categoryEntity = await this.prismaClient.category.findUnique({
        where: { name: category }
      })
      if (!!categoryEntity) {
        filters.categoryId = { contains: categoryEntity.id }
      }else{
        return [];
      }

    }

    let orderByQuery;

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
    const products = await this.prismaClient.product.findMany({
      where: filters,
      orderBy: orderByQuery,
      skip: (pageValue - 1) * pageSizeValue,
      take: pageSizeValue,
      include: {
        category: true,
      },
    });

    return products;
  }


  async getProductById(productId: string): Promise<Product | null> {
    return await this.prismaClient.product.findUnique({
      where: { id: productId },
      include: {
        category: true,
      },
    });
  }

  async patchProduct(productId: string, updateProductDto: Partial<CreateProductDto>) {

    try {

      let category: any;

      if (updateProductDto.category != null) {
        category = await this.prismaClient.category.findUnique({
          where: { name: updateProductDto.category }
        })

        if (!category) {
          category = await this.prismaClient.category.create({
            data: {
              name: updateProductDto.category
            }
          })
        }
      }

      return await this.prismaClient.product.update({
        data: {
          ...updateProductDto,
          category: category
            ? {
              connect: {
                id: category.id,
              },
            }
            : undefined,
        },
        where: { id: productId },
        include: {
          category: true
        }
      });

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


  async addProductList(productId: string) {

    try {
      let list = await this.prismaClient.listProduct.findFirst();

      if (!list) {
        list = await this.prismaClient.listProduct.create({
          data: {
            name: "Lista de Favoritos",
          }
        });
      }

      await this.prismaClient.productOnList.create({
        data: {
          listId: list.id,
          productId: productId
        }
      });

      const updatedList = await this.prismaClient.listProduct.findUnique({
        where: { id: list.id },
        include: {
          products: {
            include: {
              product: {
                include: {
                  category: true
                }
              }
            }
          }
        }
      });

      return {
        id: updatedList?.id, name: updatedList?.name, products: updatedList?.products.map(product => {
          return { ...product.product, idRelation: product.id }
        })
      };

    } catch (error: any) {

      if (error?.code == "P2003" && error.meta.field_name == "productId") {
        throw new BusinessExceptions("Produto não encontrado!", "ProductNotFound", 404);
      }

      throw error
    }

  }

  async deleteProductList(idRelation: string) {
    try {
      let list = await this.prismaClient.listProduct.findFirst();

      if (!list) {
        list = await this.prismaClient.listProduct.create({
          data: {
            name: "Lista de Favoritos",
          }
        });
      }

      await this.prismaClient.productOnList.delete({
        where: { id: idRelation }
      });

      const updatedList = await this.prismaClient.listProduct.findUnique({
        where: { id: list.id },
        include: {
          products: {
            include: {
              product: {
                include: {
                  category: true
                }
              }
            }
          }
        }
      });



      return {
        id: updatedList?.id, name: updatedList?.name, products: updatedList?.products.map(product => {
          return { ...product.product, idRelation: product.id }
        })
      }


    } catch (error: any) {

      if (error?.code == "P2025") {
        throw new BusinessExceptions("Produto não encontrado!", "ProductNotFound", 404);
      }
      throw error
    }
  }

  async getProductsList() {

    let list = await this.prismaClient.listProduct.findFirst();

    if (!list) {
      list = await this.prismaClient.listProduct.create({
        data: {
          name: "Lista de Favoritos",
        }
      })
    }

    const updatedList = await this.prismaClient.listProduct.findUnique({
      where: { id: list.id },
      include: {
        products: {
          include: {
            product: {
              include: {
                category: true
              }
            }
          }
        }
      }
    });


    return {
      id: updatedList?.id, name: updatedList?.name, products: updatedList?.products.map(product => {
        return { ...product.product, idRelation: product.id }
      })
    }
  }

  async getProductCategories() {
    return await this.prismaClient.category.findMany();
  }

}