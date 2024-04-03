import { AuthContext } from '@/providers/auth-provider';
import api from '@/utils/api';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Resourses from './resourses';

export default function NavBar() {
  const {auth, setAuth} = useContext(AuthContext);
  const router = useRouter();
  
  const onLogout = () => {
    api.post('/logout', undefined, { withCredentials: true })
      .then(() => {
        setAuth(null);
        router.push('/auth/login');
      })
      .catch(error => console.error(error))
  }

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
            BS Store
          </Typography>
          { !auth
            ? <>
                <Button component={Link} href='/auth/login' color="inherit">Login</Button>
                <Button component={Link} href='/auth/signup' color="inherit">Sign Up</Button>
              </>
            : <Button onClick={onLogout} color="inherit">Logout [{auth.nome}]</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}