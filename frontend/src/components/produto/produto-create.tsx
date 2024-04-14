import { CreateProdutoDTO } from "@/types/produto";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import PageTitle from "../page-title";
import ProdutoForm from "./produto-form";

export default function ProdutoCreate() {
  const router = useRouter();

  const handleSubmit = (produto: CreateProdutoDTO) => {
    const formData = new FormData();
    formData.append('imagem', produto.imagem!);
    formData.append('nome', produto.nome);
    formData.append('preco', produto.preco.toString());
    formData.append('estoque', produto.estoque.toString());

    api.post('/produto', formData, { withCredentials: true })
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