import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { prismaClient } from "./data/prismaClient";
import { swaggerDocument } from "./doc/swagger";

dotenv.config();
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {

  console.log(process.env.DATABASE_URL)
  try {
    const product = await prismaClient.product.create({
      data: {
        category: "A",
        description: "w",
        isFavorite: false,
        name: "product 1",
        price: 25.6,
      }
    })

    await prismaClient.$disconnect();

    const list = await prismaClient.listProduct.create({
      data: {
        name: "lista 1",
      }
    })

    await prismaClient.product.update({
      where: {
        id: product.id,
      },
      data: {
        listProduct: {
          connect: {
            id: list.id,
          },
        },
      },
    });
    const listWihtProduct = await prismaClient.listProduct.findUnique({
      where: {
        id: list.id,
      },
      include: {
        products: true,
      },
    });
    res.status(200).json(listWihtProduct);

  } catch (error) {
    console.log(error);
    await prismaClient.$disconnect();
    res.status(500).json(error);
  }
});



app.listen(process.env.NODE_LOCAL_PORT, () => {

  console.log(
    `Express started at http://localhost:${process.env.NODE_LOCAL_PORT}`
  );
});
