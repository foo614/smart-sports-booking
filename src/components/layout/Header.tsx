import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, SportsTennis, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const { mode, toggleColorMode } = useTheme();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: mode === 'dark' ? '#1a1a1a' : '#1e88e5',
      boxShadow: mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SportsTennis sx={{ mr: 1 }} />
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Smart Sports Booking
          </Link>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/facilities"
            sx={{ px: 2, py: 1, borderRadius: 2 }}
          >
            Facilities
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/ranking"
            sx={{ px: 2, py: 1, borderRadius: 2 }}
          >
            Rankings
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/tournaments"
            sx={{ px: 2, py: 1, borderRadius: 2 }}
          >
            Tournaments
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/e-mentor"
            sx={{ px: 2, py: 1, borderRadius: 2 }}
          >
            E-Mentor
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            sx={{ px: 2, py: 1, borderRadius: 2 }}
          >
            About Us
          </Button>
        </Box>

        <Box sx={{ ml: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            aria-label="toggle theme"
            sx={{ 
              mr: 1,
              backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
              '&:hover': {
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.3)',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.2s ease',
              borderRadius: '50%'
            }}
          >
            {mode === 'dark' ? <Brightness7 sx={{ color: '#ffd700' }} /> : <Brightness4 sx={{ color: '#fff' }} />}
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/register">Register</MenuItem>
          </Menu>
          <Menu
            id="mobile-menu"
            anchorEl={mobileMenuAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/facilities">
              Facilities
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/ranking">
              Rankings
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/tournaments">
              Tournaments
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/e-mentor">
              E-Mentor
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/about">
              About Us
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;