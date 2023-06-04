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
          },
          {
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
              enum: ["name", "category"],
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
                $ref: "#/components/schemas/Product",
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
                $ref: "#/components/schemas/Product",
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

  },

  components: {
    schemas: {
      Product: {
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
    },
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
};
