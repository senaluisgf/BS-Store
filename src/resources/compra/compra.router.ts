import { Router } from "express";
import isAuth from "../../middleware/isAuth.middleware";
import compraController from "./compra.controller";

const compraRouter = Router();

compraRouter.get("/:produtoId", isAuth, compraController.addProduto)
compraRouter.post("/", isAuth, compraController.buyProdutos)

export default compraRouter;