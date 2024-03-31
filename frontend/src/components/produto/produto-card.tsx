import Produto from "@/types/produto";
import api from "@/utils/api";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
interface ProdutoCardProps {
  produtoId: string
}

export default function ProdutoCard({produtoId}: ProdutoCardProps) {
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState<Produto>()
  const precoTotal = quantidade * (produto?.preco || 0);

  useEffect(() => {
    api.get(`produto/${produtoId}`)
      .then(({data}) => setProduto(data))
  }, []);

  const increaseQuantidade = () => {
    if (produto && produto.estoque > quantidade) {
      setQuantidade(quantidade+1);
    }
  }
  
  const decreaseQuantidade = () => {
    if(quantidade) setQuantidade(quantidade-1);
  }

  const buyProduto = () => {
    if (quantidade) console.log(`Compramos ${quantidade} ${produto?.nome}`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto?.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {produto?.preco}<br />
          Estoque: {produto?.estoque}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="body2" color="text.secondary">
          Quantidade: {quantidade}<br />
          Preço total: {precoTotal}<br />
        </Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={increaseQuantidade}><AddIcon /></Button>
          <Button onClick={decreaseQuantidade}><RemoveIcon /></Button>
          <Button onClick={buyProduto}><ShoppingCartIcon /></Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}