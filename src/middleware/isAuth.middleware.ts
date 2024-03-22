import { NextFunction, Request, Response } from "express";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if(!req.session.uid){
    return res.status(401).json({msg: 'Usuário não autenticado'});
  }

  next();
}

export default isAuth