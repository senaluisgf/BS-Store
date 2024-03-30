import { getProduto } from "@/fakeDb/produto";

interface ProdutoCardProps {
  produtoId: number
}

function ProdutoCard({produtoId}: ProdutoCardProps) {
  const produto = getProduto(produtoId);
  if (produto){
    return (
      <>
        <div className="produto-card">
          <div className="produto-name">{produto.nome}</div>
          <div className="produto-body">
            <div>{produto.preco}</div>
            <div>{produto.estoque}</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>Produto não encontrado</div>
    </>
  )
}

export default ProdutoCard