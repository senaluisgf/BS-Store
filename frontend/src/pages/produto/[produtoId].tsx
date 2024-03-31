import ProdutoCard from "@/components/produto/produto-card";
import { useRouter } from "next/router";

function ProdutoPage() {
  const router = useRouter();
  const id = router.query.produtoId as string;
  return <ProdutoCard  id={id} />
}

export default ProdutoPage;