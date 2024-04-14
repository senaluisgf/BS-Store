import { AuthContext } from "@/providers/auth-provider";
import styles from '@/styles/ProdutoCard.module.css';
import { Produto } from "@/types/produto";
import api from "@/utils/api";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import PageTitle from "../page-title";
interface ProdutoCardProps {
  id: string
}

export default function ProdutoCard({id}: ProdutoCardProps) {
  const { auth } = useContext(AuthContext);
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState<Produto>()

  const router = useRouter();

  useEffect(() => {
    api.get(`produto/${id}`)
      .then(({data}) => setProduto(data))
      .catch(error => console.error(error));
  }, [id]);

  const increaseQuantidade = () => {
    if (produto && produto.estoque > quantidade) {
      setQuantidade(quantidade+1);
    }
  }
  
  const decreaseQuantidade = () => {
    if(quantidade) setQuantidade(quantidade-1);
  }

  const buyProduto = () => {
    if (quantidade) {
      api.post(`/compra/produto/${id}`, {quantidade}, { withCredentials: true })
        .then(({data}) => {
          console.log(data)
        })
        .catch(error => console.error(error))
    }
  }

  const onDelete = () => {
    api.delete(`/produto/${id}`, { withCredentials: true })
      .then(() => router.push('/produto'))
      .catch(error => console.error(error));
  }

  if (!produto) return <div>Carregando...</div>
  
  return (
    <>
      <PageTitle titulo="Detalhes do Produto"/>
      <Box className={styles.boxPage}>
        <Card className={styles.cardContainer}>
          <CardContent>
            <Box className={styles.cardTitle}>
              <h2>{produto.nome}</h2>
              {auth && auth.tipoUsuario === 'admin' && <div>
                <IconButton component={Link} href={`/produto/update/${id}`}><EditIcon /></IconButton>
                <IconButton onClick={onDelete} ><DeleteIcon /></IconButton>
              </div>}
            </Box>
            <Box className={styles.cardDescription}>
              <Box className={styles.cardImage}>
                <img
                  src={produto.imageUrl}
                  alt="Doguinho caramelo"
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Preço: {produto.preco}<br />
                Estoque: {produto.estoque}
              </Typography>
            </Box>
          </CardContent>
          <CardActions className={styles.cardFooter}>
            <Typography variant="body2" color="text.secondary">
              Quantidade: {quantidade}<br />
              Preço total: {quantidade * produto.preco}<br />
            </Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button onClick={increaseQuantidade}><AddIcon /></Button>
              <Button onClick={decreaseQuantidade}><RemoveIcon /></Button>
              <Button onClick={buyProduto}><ShoppingCartIcon /></Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}