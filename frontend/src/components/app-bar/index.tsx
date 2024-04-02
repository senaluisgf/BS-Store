import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Resourses from './resourses';

export default function NavBar() {
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
          <Button component={Link} href='/auth/login' color="inherit">Login</Button>
          <Button component={Link} href='/auth/signup' color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}