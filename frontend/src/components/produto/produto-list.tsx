import { Produto } from "@/types/produto";
import api from "@/utils/api";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdutoList() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    api.get("/produto").then((data) => setProdutos(data.data))
  }, []);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Produtos</h1>
        <Button
          component={Link}
          href="/produto/create"
          variant="contained"
          size="small"
        >
          <AddIcon />
        </Button>
      </div>
      <ul>
        {produtos.map(p => (
          <li key={p.id}>
          <Link href={`produto/${p.id}`}>{p.nome}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}