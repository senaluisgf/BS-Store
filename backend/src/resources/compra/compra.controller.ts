import { Request, Response } from "express";
import { getProduto } from "../produto/produto.service";
import compraService from "./compra.service";

async function addProduto(req: Request, res: Response) {
  try {
    const { produtoId } = req.params;
    const produto = await getProduto(produtoId);

    req.session.carrinho!.push(produtoId);
    res.status(200).json(produto)
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível adicionar produto ao carrinho" });
  }
}

async function buyProdutos(req: Request, res: Response) {
  try {
    const produtosId = req.session.carrinho!;
    const buyedProdutos = await compraService.buyProdutos(produtosId)

    req.session.carrinho = [];
    res.status(201).json(buyedProdutos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível realizar a compra dos produtos" })
  }
}

export default { addProduto, buyProdutos }