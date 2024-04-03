import { Router } from "express";
import isAuth from "../../middleware/isAuth.middleware";
import compraController from "./compra.controller";

const compraRouter = Router();

compraRouter.post("/produto/:produtoId", isAuth, compraController.addProduto)
compraRouter.post("/", isAuth, compraController.buyProdutos)
compraRouter.get("/", isAuth, compraController.listProdutos)
compraRouter.put("/produto/:produtoId", isAuth, compraController.updateProduto)
compraRouter.delete("/produto/:produtoId", isAuth, compraController.removeProduto)

export default compraRouter;