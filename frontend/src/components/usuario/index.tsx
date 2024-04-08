import { Usuario } from "@/types/usuario";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PageTitle from "../page-title";

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    api.get('usuario')
      .then(({data}) => setUsuarios(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <PageTitle titulo="Usuários"/>
    <Box sx={{margin: '20px'}}>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nome}
          </li>
        ))}
      </ul>
    </Box>
    </>
  )
}