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
        <ul>
        { 
          auth &&
          auth.tipoUsuario === 'admin' &&
          <li>
            <Button
              component={Link}
              href="/produto/create"
              variant="contained"
              size="small"
            >
              <AddIcon /> Adicionar um novo produto
            </Button>
          </li>
        }
          
          {produtos.map(p => (
            <li key={p.id} className={styles.produtoRow}>
            <Link href={`produto/${p.id}`}><span>{p.nome}</span></Link>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}