import "dotenv/config";
import express from "express";

const app = express();

import { createServer } from "node:http";

const serverHTTP = createServer(app);
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import conn from "./database/conn.ts";
import corsConfig from "./config/corsConfig.ts";

app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: process.env.NODE_ENV === "development" ? true : false,
  }),
);
app.use(helmet());
app.use(cookieParser());
app.use(compression());
app.use(corsConfig);
app.disable("x-powered-by");

const port = Number(process.env.PORT) || 8080;

serverHTTP.listen(port, async () => {
  try {
    console.log(`Server is running on port ${port}`);
    await conn();
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});
