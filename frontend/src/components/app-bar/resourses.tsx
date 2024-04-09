import { useAuth } from '@/providers/auth-provider';
import api from '@/utils/api';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Resourses(){
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { auth, setAuth } = useAuth();
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    api.post('/logout', undefined, { withCredentials: true })
      .then(() => {
        setAuth(null);
      })
      .catch(error => console.error(error));
      setAnchorEl(null);
  }
  
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem
            onClick={handleClose}
            component={Link} href='/produto'
          >
            Produtos
          </MenuItem>

          {
            auth &&
            <MenuItem
              onClick={onLogout}
              component={Link} href='/'
            >
              Logout [{auth.nome}]
            </MenuItem>
          }
        </Menu>
    </Box>
  )
}