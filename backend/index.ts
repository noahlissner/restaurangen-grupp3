import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";

import bookingRouter from "./routes/bookingRoutes";
import adminRouter from "./routes/adminRoutes";

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT || 2500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: Function) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express");
});

app.use("/api/booking", bookingRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
