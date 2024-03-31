import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import api from "@/utils/api";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (senha !== confirmeSenha) {
      setError("Senhas divergentes!");
    } else {
      setError("");
      api.post("/signup", {nome, email, senha})
        .then((data) => router.push('/produto'))
        .catch(error => console.error(error.response.data.error.map((e: any) => e.message).join('\n')));
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{mb: 2, mt: 2}}>
          <TextField
            label="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>

        <Box sx={{mb: 2}}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>,
            }}
          />
        </Box>

        <Box>
          <TextField
            label="Confirme a senha"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmeSenha}
            onChange={(e) => setConfirmeSenha(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>,
            }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="red">
            {error}
          </Typography>
        </Box>
        <Button variant="contained" type="submit" >
          Enviar
        </Button>
      </form>
    </>
  )
}