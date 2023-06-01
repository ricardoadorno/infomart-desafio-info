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

    res.status(200).json("ok");

});



app.listen(process.env.NODE_LOCAL_PORT, () => {

  console.log(
    `Express started at http://localhost:${process.env.NODE_LOCAL_PORT}`
  );
});
