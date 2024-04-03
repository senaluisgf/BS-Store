import { Request, Response } from "express";
import { getProduto } from "../produto/produto.service";
import compraService from "./compra.service";

async function addProduto(req: Request, res: Response) {
  try {
    const { produtoId } = req.params;
    const { quantidade } = req.body;
    const produto = await getProduto(produtoId);

    const index = req.session.carrinho!.findIndex(c => c.produtoId===produtoId)
    if (index<0) {
      req.session.carrinho!.push({produtoId, quantidade: parseInt(quantidade)});
    } else {
      req.session.carrinho![index].quantidade += quantidade
    }
    res.status(200).json({produto, quantidade})
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível adicionar produto ao carrinho" });
  }
}

async function updateProduto(req: Request, res: Response) {
  try {
    const { produtoId } = req.params;
    const { quantidade } = req.body;
    const produto = await getProduto(produtoId);

    const index = req.session.carrinho!.findIndex(c => c.produtoId===produtoId)
    if (index<0) {
      return res.status(406).json({msg: "Produto não está no carrinho de compras"})
    } else {
      req.session.carrinho![index].quantidade = quantidade
    }
    res.status(200).json({produto, quantidade})
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível adicionar produto ao carrinho" });
  }
}

async function removeProduto(req: Request, res: Response) {
  try {
    const { produtoId } = req.params;
    await getProduto(produtoId);

    const index = req.session.carrinho!.findIndex(c => c.produtoId===produtoId)
    if (index<0) {
      return res.status(406).json({msg: "Produto não está no carrinho de compras"})
    } else {
      req.session.carrinho = req.session.carrinho!.filter((c, i) => index !== i)
    }
    res.status(204).json()
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível adicionar produto ao carrinho" });
  }
}

async function buyProdutos(req: Request, res: Response) {
  try {
    const produtos = req.session.carrinho!;
    const produtosId = produtos.map(p => p.produtoId)
    const buyedProdutos = await compraService.buyProdutos(produtosId)

    req.session.carrinho = [];
    res.status(201).json(produtos.map(vp => {
      const produto = buyedProdutos.find(p => p.id===vp.produtoId)!
      return {produto, quantidade: vp.quantidade};
    }));
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível realizar a compra dos produtos" })
  }
}
async function listProdutos(req: Request, res: Response) {
  try {
    const produtos = req.session.carrinho!;
    const produtosId = produtos.map(p => p.produtoId)
    const viewProdutos = await compraService.buyProdutos(produtosId)

    res.status(200).json(produtos.map(vp => {
      const produto = viewProdutos.find(p => p.id===vp.produtoId)!
      return {produto, quantidade: vp.quantidade};
    }));
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível realizar a compra dos produtos" })
  }
}

export default { addProduto, buyProdutos, listProdutos, updateProduto, removeProduto }