import express from "express";
import { adminLogin } from "../controllers/adminControllers/adminLogin";
import { checkAuth } from "../controllers/adminControllers/checkAuth";

const cookieParser = require("cookie-parser");
/**
 * This middleware handles admin functionality.
 *
 * Contains:
 * - {@link adminLogin} - POST /admin/login
 * - {@link checkAuth} - GET /admin/auth
 *
 * @route /admin
 * @public
 */

const router = express.Router();

router.use(cookieParser());

router.get("/auth", checkAuth);
router.post("/login", adminLogin);

export default router;
