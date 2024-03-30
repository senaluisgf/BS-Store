import ProdutoCard from "@/components/produto/produto-card";
import { useRouter } from "next/router";

function Produto() {
  const router = useRouter();
  const produtoId = parseInt(router.query.produtoId as string);
  console.log(produtoId)
  return <ProdutoCard  produtoId={produtoId} />
}

export default Produto;