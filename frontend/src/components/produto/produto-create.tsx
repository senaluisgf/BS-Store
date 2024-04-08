import { CreateProdutoDTO } from "@/types/produto";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import PageTitle from "../page-title";
import ProdutoForm from "./produto-form";

export default function ProdutoCreate() {
  const router = useRouter();

  const handleSubmit = (produto: CreateProdutoDTO) => {
    api.post('/produto', produto, { withCredentials: true })
      .then(() => router.push('/produto'))
      .catch(error => console.error(error));
  }
  return (
    <>
      <PageTitle titulo="Criar Produto"/>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <ProdutoForm handleSubmit={handleSubmit} />
      </Box>
    </>
  )
}