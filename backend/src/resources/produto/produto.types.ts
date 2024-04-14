import { Produto } from "@prisma/client";

export interface CreateProdutoDto extends Pick<Produto, 'imageUrl' | 'nome' | 'preco' | 'estoque'> { }
export interface UpdateProdutoDto extends Pick<Produto, 'imageUrl' | 'nome' | 'preco' | 'estoque'> { }
