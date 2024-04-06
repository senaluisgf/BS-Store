import api from "@/utils/api";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function CarrinhoList() {
  const [carrinho, setCarrinho] = useState([]);
  const precoTotal = carrinho.reduce((acc, {produto, quantidade}: any) => {
    return acc + produto.preco * quantidade
  }, 0);
  
  useEffect(() => {
    api.get('/compra', {withCredentials: true})
      .then(({data}) => setCarrinho(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <h1>Carrinho de Compras</h1>
    <Box sx={{mt: 5, display: 'flex', flexDirection: 'column'}}>
      <table style={{ border: '1px solid', color: 'black', marginBottom: 5 }}>
        <thead>
          <tr>
            <td>Quantidade</td>
            <td>Nome</td>
            <td>Preço Unitário do Produto</td>
          </tr>
        </thead>
        <tbody>
          {carrinho.map(({produto, quantidade}: any) => (
            <tr key={produto.id}>
              <td>{quantidade}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
        <Button variant="contained">
          Comprar
        </Button>
        <Typography variant="body1">Preço total: {precoTotal}</Typography>
      </Box>
    </Box>
    </>
  )
}