import { Usuario } from "@prisma/client";

export interface CreateUsuarioDto extends Pick<Usuario, 'nome' | "email" | 'senha' | "tipoUsuarioId"> { }
export interface UpdateUsuarioDto extends Pick<Usuario, 'nome' | "email" | "tipoUsuarioId"> { }
