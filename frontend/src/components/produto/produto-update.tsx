import { Produto, UpdateProdutoDTO } from "@/types/produto";
import api from "@/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProdutoForm from "./produto-form";

interface ProdutoUpdateProps {
  id: string
}

export default function ProdutoUpdate({ id }: ProdutoUpdateProps) {
  const [produto, setProduto] = useState<Produto>();

  const router = useRouter();

  useEffect(() => {
    api.get(`produto/${id}`)
      .then(({data}) => setProduto(data))
      .catch(error => console.error(error));
  }, [id]);

  const handdleSubmit = (produto: UpdateProdutoDTO) => {
    api.put(`produto/${id}`, produto)
      .then(() => router.push(`/produto/${id}`))
      .catch(error => console.error(error))
    
  }

  if(!produto) return <div>Carregando...</div>

  return (
    <>
      <h1>Atualizar Produto</h1>
      <ProdutoForm handleSubmit={handdleSubmit} produto={produto} />
    </>
  )
}