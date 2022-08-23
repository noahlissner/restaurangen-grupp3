import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT || 6000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
