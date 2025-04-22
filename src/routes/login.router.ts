import express from "express";
const router = express.Router();
import { Login } from "@/controllers/login.controller";
router.post("/login", Login);

export default router;
