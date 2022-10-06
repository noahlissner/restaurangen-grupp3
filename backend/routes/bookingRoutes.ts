import express from "express";
import { createBooking } from "../controllers/bookingControllers/createBooking";
import { updateBooking } from "../controllers/bookingControllers/updateBooking";
import { getBookings } from "../controllers/bookingControllers/getBookings";
import { getCustomer } from "../controllers/bookingControllers/getCustomer";
import { searchBooking } from "../controllers/bookingControllers/searchBooking";
import { deleteBooking } from "../controllers/bookingControllers/deleteBooking";

const router = express.Router();

router.post("/search", searchBooking);
router.get("/get", getBookings);
router.get("/get-customer", getCustomer);
router.post("/create", createBooking);
router.put("/update", updateBooking);
router.delete("/delete/:bookingID", deleteBooking);

export default router;
