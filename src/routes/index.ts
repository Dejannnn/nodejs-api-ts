import express from "express";
import userRoutes from "./user.routes";
import cosutmerRoutes from "./costumer.routes";
import shopRoutes from "./shop.routes";
import loginRouter from "./login.router";
const router = express.Router();

router.use("/users", userRoutes);
router.use("/costomer", cosutmerRoutes);
router.use("/shop", shopRoutes);
router.use("/auth", loginRouter);

export default router;
