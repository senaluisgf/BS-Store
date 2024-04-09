import { useAuth } from '@/providers/auth-provider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Resourses from './resourses';

export default function NavBar() {
  const {auth, setAuth} = useAuth();
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Resourses />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            component={Link}
            href={'/'}
          >
            <span>BS Store</span>
          </Typography>
          { !auth
            ? <>
                <Button component={Link} href='/auth/login' color="inherit">Login</Button>
                <Button component={Link} href='/auth/signup' color="inherit">Sign Up</Button>
              </>
            : <>
              <span>Bem Vindo, {auth.nome}!</span>
                <Button component={Link} href='/carrinho' color="inherit"><ShoppingCartIcon /></Button>
              </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}