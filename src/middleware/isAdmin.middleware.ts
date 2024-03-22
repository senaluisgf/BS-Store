import { NextFunction, Request, Response } from "express";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if(!req.session.uid || req.session.tipoUsuarioId !== TiposUsuarios.ADMIN){
    return res.status(403).json({msg: 'Acesso negado'});
  }

  next();
}

export default isAdmin