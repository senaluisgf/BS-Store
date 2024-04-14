import { Produto, UpdateProdutoDTO } from "@/types/produto";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageTitle from "../page-title";
import ProdutoForm from "./produto-form";

interface ProdutoUpdateProps {
  id: string
}

export default function ProdutoUpdate({ id }: ProdutoUpdateProps) {
  const [produto, setProduto] = useState<Produto>();

  const router = useRouter();

  useEffect(() => {
    api.get(`produto/${id}`, { withCredentials: true })
      .then(({data}) => setProduto(data))
      .catch(error => console.error(error));
  }, [id]);

  const handdleSubmit = (produto: UpdateProdutoDTO) => {
    api.put(`produto/${id}`, produto, { withCredentials: true })
      .then(() => router.push(`/produto/${id}`))
      .catch(error => console.error(error))
    
  }

  if(!produto) return <div>Carregando...</div>

  return (
    <>
      <PageTitle titulo="Atualizar Produto"/>
      <Box sx={{display: 'flex', justifyContent: 'center', p: '10px'}}>
        <ProdutoForm handleSubmit={handdleSubmit} produto={produto} />
      </Box>
    </>
  )
}