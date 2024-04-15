import { toBrazilianCurrency } from '@/services/currency';
import styles from '@/styles/CarrinhoList.module.css';
import api from "@/utils/api";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
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
              <td>Produto</td>
              <td>Nome</td>
              <td>Quantidade</td>
              <td>$/Unid</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
            {carrinho.map(({produto, quantidade}: any) => (
              <tr key={produto.id}>
                <td><Box className={styles.imgCollumn}><img src={produto.imageUrl} alt={produto.nome} /></Box></td>
                <td>{produto.nome}</td>
                <td>{quantidade}</td>
                <td>{toBrazilianCurrency(produto.preco)}</td>
                <td><Button onClick={() => alert(`implementar remoção`)}><RemoveCircleOutlineIcon /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
        
      <Box className={styles.paymentContainer}>
        <Typography variant="body1">Total: {toBrazilianCurrency(precoTotal)}</Typography>
        <Button
          variant="contained"
          onClick={() => alert("Implementar compra")}
        >
          Comprar
        </Button>
      </Box>
    </Box>
    </>
  )
}