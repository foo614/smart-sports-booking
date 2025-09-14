import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { mode } = useTheme();
  
  return (
    <Box
      sx={{
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #0d1421 0%, #1a2332 100%)'
          : 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
        color: 'white',
        py: 6,
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === 'dark'
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
          zIndex: 0
        }
      }}
      component="footer"
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffffff !important',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                opacity: 1,
                zIndex: 2,
                position: 'relative'
              }}
            >
              Smart Sports Booking
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff !important', opacity: 1 }}>
              Book your favorite sports facilities with ease.
              Find the perfect venue for your next game or practice session.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffffff !important',
                opacity: 1,
                zIndex: 2,
                position: 'relative'
              }}
            >
              Quick Links
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{ color: '#ffffff !important' }}>
              <Link href="/facilities" sx={{ color: '#ffffff !important' }} underline="hover">
                Facilities
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{ color: '#ffffff !important' }}>
              <Link href="/ranking" sx={{ color: '#ffffff !important' }} underline="hover">
                Rankings
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{ color: '#ffffff !important' }}>
              <Link href="/tournaments" sx={{ color: '#ffffff !important' }} underline="hover">
                Tournaments
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{ color: '#ffffff !important' }}>
              <Link href="/e-mentor" sx={{ color: '#ffffff !important' }} underline="hover">
                E-Mentor
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom sx={{ color: '#ffffff !important' }}>
              <Link href="/about" sx={{ color: '#ffffff !important' }} underline="hover">
                About Us
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#ffffff !important',
                opacity: 1,
                zIndex: 2,
                position: 'relative'
              }}
            >
              Contact Information
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: '#ffffff !important' }}>
              123 Sports Avenue, Sportsville
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: '#ffffff !important' }}>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: '#ffffff !important' }}>
              Email: info@smartsportsbooking.com
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: '#ffffff !important' }}>
              Hours: Monday-Friday 9am-6pm
            </Typography>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" align="center" sx={{ color: '#ffffff !important', opacity: 1 }}>
            {'© '}
            {new Date().getFullYear()}
            {' Smart Sports Booking. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;