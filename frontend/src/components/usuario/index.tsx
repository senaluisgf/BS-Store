import { Usuario } from "@/types/usuario";
import api from "@/utils/api";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    api.get('usuario')
      .then(({data}) => setUsuarios(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <h1>Usuários</h1>
    <Box>
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