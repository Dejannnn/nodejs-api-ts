import express from "express";
const routes = express.Router();
import {
  CreateShop,
  GetShops,
  GetShopById,
} from "@/controllers/shops.controller";

routes.get("/", GetShops);
routes.get("/:id", GetShopById);
routes.post("/", CreateShop);

export default routes;
