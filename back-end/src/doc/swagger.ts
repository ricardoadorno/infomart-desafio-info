export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "API De documentaçaõ do back end do projeto LISTA DE COMPRAS!",
    description:
      "Essa documentação tem como objetivo servir de contraro e apoio aos desenvolvedores do back e front end do projeto LISTA DE COMPRAS!",
  },
  host: "localhost:5000",
  basePath: "/",
  tags: [
    {
      name: "Product",
      description: "Endpoints",
    },
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/products": {
      get: {
        tags: ["Product"],
        summary: "Obter produtos",
        parameters: [
          {
            in: "query",
            name: "name",
            schema: {
              type: "string",
            },
            description: "Filtrar produtos pelo nome",
          },
          {
            in: "query",
            name: "price",
            schema: {
              type: "number",
            },
            description: "Filtrar produtos pelo preço",
          }, {
            in: "query",
            name: "category",
            schema: {
              type: "string",
            },
            description: "Filtrar produtos pela categoria",
          },
          {
            in: "query",
            name: "orderByClause",
            schema: {
              type: "string",
              enum: ["name", "createdAt"],
              default: "createdAt",
            },
            description: "Ordenar produtos por uma cláusula específica, se nenhum orderByClause for passado ele ordena por data de criação.",
          },
          {
            in: "query",
            name: "orderBy",
            schema: {
              type: "string",
              enum: ["asc", "dsc"],
              default: "asc",
            },
            description: "Especificar a ordem de classificação (ascendente ou descendente), se nenhum orderBy for passado ele ordena por asc.",
          },
          {
            in: "query",
            name: "page",
            schema: {
              type: "number",
              default: "1",
            },
            description: "Valor do page na paginação.",
          },
          {
            in: "query",
            name: "pageSize",
            schema: {
              type: "number",
              default: "25",
            },
            description: "Tamanho da pagina na paginação (MÁXIMO 100)",
          },
        ],
        responses: {
          200: {
            description: "Lista de produtos retornada com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          422: {
            description: "Erro na validação dos dados"
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      post: {
        tags: ["Product"],
        summary: "Cria um novo produto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateProduct",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Produto criado com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          422: {
            description: "Erro na validação dos dados"
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/products/{id}": {
      get: {
        tags: ["Product"],
        summary: "Obtém um produto pelo ID",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do produto",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Produto encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
          400: {
            description: "Solicitação inválida",
          },
          404: {
            description: "Produto não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      patch: {
        tags: ["Product"],
        summary: "Atualiza os dados de um produto",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do produto a ser atualizado",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateProduct",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Produto atualizado com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          422: {
            description: "Erro na validação dos dados"
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      delete: {
        tags: ["Product"],
        summary: "Exclui um produto",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do produto a ser excluído",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Produto excluído com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          404: {
            description: "Produto não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/products/list": {
      get: {
        tags: ["Products"],
        summary: "Obtém os produtos da lista de favoritos",
        responses: {
          200: {
            description: "Lista de Produtos!",
          },
          400: {
            description: "Solicitação inválida",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      }
    },
    "/products/list/{id}": {
      delete: {
        tags: ["Products"],
        summary: "Exclui um item da lista de favoritos",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do item da lista a ser Excluído",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Produto excluído com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          404: {
            description: "Produto não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      post: {
        tags: ["Products"],
        summary: "Adicionar um produto na lista de favoritos",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do produto a ser adicionado",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Produto adicionado com sucesso",
          },
          400: {
            description: "Solicitação inválida",
          },
          404: {
            description: "Produto não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/products/categories": {
      get: {
        tags: ["Category"],
        summary: "Obtém as categorias",
        responses: {
          200: {
            description: "Lista de categorias!",
          },
          400: {
            description: "Solicitação inválida",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },

  },

  components: {
    schemas: {
      CreateProduct: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          price: {
            type: "number",
          },
          category: {
            type: "string",
          },
          imageUrl: {
            type: "string",
          },
          description: {
            type: "string",
            nullable: true,
          },
        },
      },
      listFavorite: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          products: {
            type: "array",
            items: {
              $ref: "#/components/schemas/itemListFavorite",
            }

          }

        }
      },
      itemListFavorite: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          price: { type: "number" },
          categoryId: { type: "string" },
          categoryName: { type: "string" },
          imageUrl: { type: "string" },
          description: { type: "string" },
          idRelation: { type: "string", description: "Esse é o id referente ao item da lista, quando precisar remover um item da lista esse ID é o que será usado no parametro" }
        }
      }
    },
    businessExceptions: [
      {
        code: "InvalidInput",
        message: "Entrada inválida",
      },
      {
        code: "ProductNotFound",
        message: "Produto não encontrado",
      },
      {
        code: "InvalidOrder",
        message: "Ordenação inválida",
      },
      {
        code: "InvalidId",
        message: "Erro no parâmetro Id!",
      },
      {
        code: "DuplicateProductName",
        message: "Já existe um produto com esse nome!",
      },
    ],
  }
};
