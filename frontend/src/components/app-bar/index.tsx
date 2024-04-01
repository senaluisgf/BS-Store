import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            component={Link}
            href={'/'}
          >
            BS Store
          </Typography>
          <Button component={Link} href='/produto' color="inherit">Produtos</Button>
          <Button component={Link} href='/auth/login' color="inherit">Login</Button>
          <Button component={Link} href='/auth/signup' color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}