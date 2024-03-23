import { Request, Response } from "express";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";
import * as userService from '../usuario/usuario.service';
import authService from "./auth.service";
import { LoginDto } from "./auth.types";

async function signup(req: Request, res: Response) {
  const { nome, email, senha } = req.body
  try {
    const newUsuario = await userService.createUser({
      nome,
      email,
      senha,
      tipoUsuarioId: TiposUsuarios.CLIENT
    })
    res.status(201).json(newUsuario)
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Não foi possível criar o usuário' })
  }
}

async function login(req: Request, res: Response) {
  const { email, senha } = req.body as LoginDto
  try {
    const usuario = await authService.checkAuth({ email, senha });
    if (!usuario)
      return res.status(401).json({
        msg: 'Email e/ou senha incorretos'
      });
    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    req.session.carrinho = [];
    res.status(200).json({ msg: 'Usuário autenticado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Não foi possível criar o usuário' })
  }
}

async function logout(req: Request, res: Response) {
  if(!req.session.uid) return res.status(401).json({msg: 'Usuário não autorizado'});
  req.session.destroy((err) => {
    if(err) return res.status(500).json(err);
    res.status(204).json()
  })
}

export default { signup, login, logout }