import { Request, Response } from 'express';
import { createProduto, deleteProduto, getAllProdutos, getProduto, jaExiste, updateProduto } from './produto.service';

async function index(req: Request, res: Response) {
  const produtos = await getAllProdutos();
  res.status(200).json(produtos);
}

async function read(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const produto = await getProduto(id);
    res.status(200).json(produto);
  }catch (err) {
    res.status(404).json({ msg: 'Produto não existe' });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedProduto = await deleteProduto(id)
    res.status(200).json(deletedProduto);
  }catch (err) {
    res.status(404).json({ msg: 'Produto não existe' });
  }
}

async function create(req: Request, res: Response) {
  const produto = req.body;
  try {
    if (await jaExiste(produto.nome)) {
      return res.status(400).json({ msg: 'Produto já existe' });
      }
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function update(req: Request, res: Response) {
  const { id } = req.params;
  const produto = req.body;
  try {
    const updatedProduto = await updateProduto(id, produto);
    res.status(201).json(updatedProduto);
  } catch (err) {
    res.status(500).json(err);
  }
}

export default { index, create, read, update, remove };