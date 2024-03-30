import Produto from "@/types/produto";

const produtos: Produto[] = [
  { id: 1, nome: "Computador", preco: 5000, estoque: 100 },
  { id: 2, nome: "Notebook", preco: 7000, estoque: 10 },
  { id: 3, nome: "Celular", preco: 4000, estoque: 1000 },
  { id: 4, nome: "Tablet", preco: 2000, estoque: 1 },
  { id: 5, nome: "Calculadora", preco: 50, estoque: 15 },
]

export function getlProdutos(): Produto[] {
  return produtos;
}

export function getProduto(id: number): Produto | undefined {
  return produtos.find(p => p.id === id);
}