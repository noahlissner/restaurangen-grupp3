import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

import bookingRouter from "./routes/bookingRoutes";

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express");
});

app.use("/api/booking", bookingRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
