import { AuthContext } from "@/providers/auth-provider";
import styles from '@/styles/ProdutoList.module.css';
import { Produto } from "@/types/produto";
import api from "@/utils/api";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import PageTitle from "../page-title";

export default function ProdutoList() {
  const { auth } = useContext(AuthContext);
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    api.get("/produto", { withCredentials: true })
      .then((data) => setProdutos(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      
      <PageTitle titulo="Produtos" />
      <Box className={styles.contentContainer}>
        <ul className={styles.tableProduto}>
        { 
          auth &&
          auth.tipoUsuario === 'admin' &&
          <li key='novo-produto-key'  className={styles.rowProduto}>
            <Link href="/produto/create">
              <Box className={styles.rowImage}>
                <Button variant="contained"><AddIcon /> ADICIONAR UM NOVO PRODUTO</Button>
              <span></span>
              </Box>
            </Link>
          </li>
        }
          
          {produtos.map(p => (
            <li key={p.id} className={styles.rowProduto}>
            <Link href={`produto/${p.id}`}>
              <Box className={styles.rowImage}>
                <img
                  src={p.imageUrl}
                  alt={p.nome}
                />
              </Box>
              <span>{p.nome}</span>
            </Link>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}