import { CreateProdutoDTO } from "@/types/produto";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import ProdutoForm from "./produto-form";

export default function ProdutoCreate() {
  const router = useRouter();

  const handleSubmit = (produto: CreateProdutoDTO) => {
    api.post('/produto', produto)
      .then(() => router.push('/produto'))
      .catch(error => console.error(error));
  }
  return (
    <>
      <Box>
        <h1>Criar Produto</h1>
      </Box>
      <ProdutoForm handleSubmit={handleSubmit} />
    </>
  )
}