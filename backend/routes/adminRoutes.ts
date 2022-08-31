import express from "express";
import { adminLogin } from "../controllers/adminControllers/adminLogin";

const router = express.Router();

router.get("/admin", adminLogin);
