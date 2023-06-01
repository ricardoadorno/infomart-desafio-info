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
  paths: {},

  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          price: {
            type: "number",
          },
          imageUrl: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
      },
    },
  },
};
