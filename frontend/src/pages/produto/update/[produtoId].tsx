import ProdutoUpdate from "@/components/produto/produto-update";
import { useRouter } from "next/router";

export default function ProdutoUpdatePage() {
  const id = useRouter().query.produtoId as string
  
  return <ProdutoUpdate id={id} />
}