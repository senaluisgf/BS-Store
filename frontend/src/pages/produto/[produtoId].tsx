import ProdutoCard from "@/components/produto/produto-card";
import { useRouter } from "next/router";

function ProdutoPage() {
  const router = useRouter();
  const produtoId = router.query.produtoId as string;
  return <ProdutoCard  produtoId={produtoId} />
}

export default ProdutoPage;