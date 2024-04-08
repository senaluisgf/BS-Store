import { useAuth } from "@/providers/auth-provider";
import api from "@/utils/api";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import PageTitle from "../page-title";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const { auth, setAuth } = useAuth();

  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    api.post('/login', { email, senha }, { withCredentials: true })
      .then(({data}) => {
        setError('')
        setAuth(data);
        router.push('/');
      })
      .catch(error => {
        console.error(error);
        setError('Email e/ou senha estão incorretos!');
      })
  }

  return (
    <>
      <PageTitle titulo="Login" />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <form onSubmit={onSubmit}>
          <Box sx={{ mb: 2, mt: 2 }}>
            <TextField
              sx={{width: 300}}
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box>
            <TextField
              sx={{width: 300}}
              label="Senha"
              required
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

          <Box sx={{ mb: 2 }}>
            <Typography color="red" variant="body2">
              {error}
            </Typography>
          </Box>

          <Button type="submit" variant="contained" size="small">Enviar</Button>
        </form>
      </Box>
    </>
  )
}