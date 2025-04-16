import express from "express";
import userRoutes from "./user.routes";
import cosutmerRoutes from "./costumer.routes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/cosumer", cosutmerRoutes);
export default router;
