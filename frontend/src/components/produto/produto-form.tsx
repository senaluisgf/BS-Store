import styles from "@/styles/ProdutoForm.module.css";
import { CreateProdutoDTO, Produto, UpdateProdutoDTO } from "@/types/produto";
import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
interface ProdutoFormProps {
  handleSubmit: (produto: CreateProdutoDTO | UpdateProdutoDTO) => void
  produto?: Produto
}

export default function ProdutoForm({handleSubmit, produto}: ProdutoFormProps) {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState(produto?.imageUrl);
  const [nome, setNome] = useState(produto?.nome ?? '');
  const [preco, setPreco] = useState(produto?.preco);
  const [estoque, setEstoque] = useState(produto?.estoque);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSubmit({
      imagem: image,
      imageUrl: image ?? imageUrl,
      nome,
      preco: preco!,
      estoque: estoque!,
    })
  }
  
  return (
    <>
      <form onSubmit={onSubmit} className={styles.produtoForm}>
        {
          imageUrl &&
          <Box className={styles.boxImg}>
            <img src={imageUrl} alt={produto?.nome} />
          </Box>
        }
        <Box className={styles.content}>
          <Box sx={{ mb: 2, mt: 2 }}>
            <label htmlFor="imagem">Imagem</label><br />
            <TextField
              sx={{width: 250}}
              required
              id="imagem"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Box>

          <Box sx={{ mb: 2, mt: 2 }}>
            <TextField
              sx={{width: 250}}
              required
              label="Nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{width: 250}}
              required
              label="Preço"
              type="number"
              value={preco}
              onChange={(e) => setPreco(parseFloat(e.target.value))}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{width: 250}}
              required
              label="Estoque"
              type="number"
              value={estoque}
              onChange={(e) => setEstoque(parseInt(e.target.value))}
            />
          </Box>

          <Button variant="contained" type="submit" >
            Enviar
          </Button>
        </Box>
      </form>
    </>
  )
}