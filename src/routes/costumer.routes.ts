import express, { Request, Response } from "express";
import CustomerController from "@/controllers/customer.controller";
const router = express.Router();

router.get("/", CustomerController.GetUser);
router.post("/", CustomerController.CreateCustomer);
router.get("/:id", CustomerController.GetUserById);

export default router;
