import { Request, Response } from 'express';
import { createTipoUsuario, deleteTipoUsuario, getTipoUsuario, getTiposUsuarios } from './tipoUsuario.service';

async function index(req: Request, res: Response) {
  const tipos = await getTiposUsuarios();

  res.status(200).json(tipos)
}

async function create(req: Request, res: Response) {
  try {
    const { rotulo } = req.body;
    const tipo = await createTipoUsuario(rotulo);
    
    res.status(201).json(tipo)
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}

async function read(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const tipo = await getTipoUsuario(id);
    
    res.status(200).json(tipo)
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const tipo = await deleteTipoUsuario(id);
    
    res.status(200).json(tipo)
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}

export default { index, create, read, remove };