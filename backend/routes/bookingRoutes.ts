import express from "express";
import { createBooking } from "../controllers/bookingControllers/createBooking";
import { searchBooking } from "../controllers/bookingControllers/searchBooking";

const router = express.Router();

router.post("/search", searchBooking);
router.post("/create", createBooking);

export default router;
