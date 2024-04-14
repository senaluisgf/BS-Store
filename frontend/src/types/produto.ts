export interface Produto {
  id: string;
  imageUrl: string;
  nome: string;
  preco: number;
  estoque: number;
}

export interface CreateProdutoDTO extends Omit<Produto, 'id' | 'imageUrl' > {
  imagem?: string;
  imageUrl?: string;
}
export interface UpdateProdutoDTO extends Omit<Produto, 'id' | 'imageUrl'> {
  imagem?: string;
  imageUrl?: string;
}