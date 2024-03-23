import { Produto } from "@prisma/client";

export interface CreateProdutoDto extends Pick<Produto, 'nome' | 'preco' | 'estoque'> { }
export interface UpdateProdutoDto extends Pick<Produto, 'nome' | 'preco' | 'estoque'> { }
