import ProdutoCard from "@/components/produto/produto-card";
import { getProduto } from "@/fakeDb/produto";
import { useRouter } from "next/router";

function Produto() {
  const router = useRouter();
  const produtoId = parseInt(router.query.produtoId as string);
  const produto = getProduto(produtoId);
  if(!produto) return <div>Produto não encontrado</div>
  return <ProdutoCard  produto={produto} />
}

export default Produto;