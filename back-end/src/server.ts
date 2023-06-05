import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc/swagger";
import { ProductController } from "./controllers/productController";
import { PrismaClient } from "@prisma/client";
import { ProductRepository } from "./repositories/productRepository";
import { ErrorMiddleware } from "./middlewares/errorMiddleware ";
import { ProductService } from "./services/productService";

dotenv.config();
config();
const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const prismaClient = new PrismaClient();
const productRepository = new ProductRepository(prismaClient);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);


app.get("/products", productController.getProducts.bind(productController));
app.get("/products/:id", productController.getProductById.bind(productController));
app.post("/products", productController.postProduct.bind(productController));
app.patch("/products/:id", productController.patchProduct.bind(productController));
app.delete("/products/:id", productController.deleteProduct.bind(productController));

app.use(ErrorMiddleware);


app.listen(process.env.NODE_LOCAL_PORT, () => {

  console.log(
    `Express started at http://localhost:${process.env.NODE_LOCAL_PORT}`
  );
});
