import Produto from "@/types/produto";
import api from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdutoList() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    api.get("/produto").then((data) => setProdutos(data.data))
  }, []);

  return (
    <>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(p => (
          <li key={p.id}>
          <Link href={`produto/${p.id}`}>{p.nome}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}