import { Usuario } from "@prisma/client";

export interface LoginDto extends Pick<Usuario, 'email' | 'senha'> { }