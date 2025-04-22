import express from "express";
const router = express.Router();
import {
  GetUsers,
  CreateUser,
  DeleteUser,
  GetUserById,
} from "@/controllers/user.controller";
router.get("/", GetUsers);
router.get("/:id", GetUserById);
router.post("/", CreateUser);
router.delete("/", DeleteUser);

export default router;
