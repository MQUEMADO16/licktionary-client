import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Avatar, 
  Stack,
  Container,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon
} from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  // Menu State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          {/* Brand / Logo */}
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={1.5} 
            component={Link} 
            to="/" 
            sx={{ textDecoration: 'none', color: 'text.primary', cursor: 'pointer' }}
          >
            <Box 
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white', 
                p: 0.8, 
                borderRadius: 2, 
                display: 'flex',
                boxShadow: '0 4px 12px rgba(149, 43, 78, 0.2)'
              }}
            >
              <MusicNoteIcon fontSize="small" />
            </Box>
            <Typography variant="h6" fontWeight="700" sx={{ letterSpacing: '-0.5px' }}>
              My Licktionary
            </Typography>
          </Stack>

          {/* Actions */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />}
              onClick={() => navigate('/new')}
              size="medium"
              sx={{ display: { xs: 'none', sm: 'flex' } }} // Hide text on tiny screens if needed
            >
              New Lick
            </Button>

            {/* Mobile "+" Button */}
            <IconButton 
              color="primary" 
              onClick={() => navigate('/new')}
              sx={{ display: { xs: 'flex', sm: 'none' }, bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
            >
              <AddIcon />
            </IconButton>

            {/* User Profile / Login State */}
            {user ? (
              <>
                <IconButton 
                  onClick={handleMenuClick}
                  size="small" 
                  sx={{ ml: 1, border: '2px solid', borderColor: 'divider', p: 0.5 }}
                >
                  <Avatar 
                    sx={{ width: 32, height: 32, bgcolor: 'secondary.main', color: 'secondary.contrastText', fontWeight: 'bold' }}
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                
                {/* User Dropdown Menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                      mt: 1.5,
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={() => navigate('/profile')}>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button component={Link} to="/login" variant="text" color="inherit" sx={{ fontWeight: 600 }}>
                Log In
              </Button>
            )}
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;