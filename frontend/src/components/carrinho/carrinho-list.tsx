import styles from '@/styles/CarrinhoList.module.css';
import api from "@/utils/api";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PageTitle from "../page-title";

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
    <PageTitle titulo="Carrinho de compras"/>
    <Box className={styles.boxPage}>
      <Box className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Quantidade</td>
              <td>Preço/Unidade</td>
            </tr>
          </thead>
          <tbody>
            {carrinho.map(({produto, quantidade}: any) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{quantidade}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
        
      <Box className={styles.paymentContainer}>
        <Typography variant="body1">Preço total: {precoTotal}</Typography>
        <Button variant="contained">
          Comprar
        </Button>
      </Box>
    </Box>
    </>
  )
}