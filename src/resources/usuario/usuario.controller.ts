import { Request, Response } from "express";
import * as userService from './usuario.service';

export async function listUsers(req: Request, res: Response) {
  res.statusCode = 200;
  const users = await userService.listUsers()
  return res.json(users)
}

export async function createUser(req: Request, res: Response) {
  try {
    const { nome, senha, email, tipoUsuarioId } = req.body;

    res.statusCode = 201;
    const userCreated = await userService.createUser({ nome, senha, email, tipoUsuarioId })
    return res.json(userCreated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Não foi possível criar o usuário" })
  }
}

export async function getUser(req: Request, res: Response) {
  try{
    const { id } = req.params;
    res.statusCode = 200;
    const user = await userService.getUser(id)
    return res.json(user);
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res.statusCode = 200;
    const user = await userService.deleteUser(id)
    return res.json(user);
  }  catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    res.statusCode = 200;
    const user = await userService.updateUser(id, body)
    return res.json(user);
  }  catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Usuário não encontrado" })
  }
}