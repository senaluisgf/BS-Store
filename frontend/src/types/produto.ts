export interface Produto {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
}

export interface CreateProdutoDTO extends Omit<Produto, 'id'> {}
export interface UpdateProdutoDTO extends Omit<Produto, 'id'> {}