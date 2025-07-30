import React from 'react';
import { Box, Button, Container, Typography, GridLegacy as Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import sportsFacilities from '../../assets/images/sports-facilities.svg';

const Hero: React.FC = () => {
  const { mode } = useTheme();
  
  return (
    <Box
      sx={{
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        pt: 8,
        pb: 6,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === 'dark'
            ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)'
                  : 'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'fadeInUp 0.8s ease-out',
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(30px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              Book Sports Facilities with Ease
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{
                animation: 'fadeInUp 0.8s ease-out 0.2s both',
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(30px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              Find and book the perfect sports venue for your next game or practice session.
              Tennis courts, football fields, basketball courts, and more - all in one place.
            </Typography>
            <Box sx={{ 
              mt: 4,
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px)'
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }
            }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/booking"
                sx={{ 
                  mr: 2, 
                  mb: 2,
                  background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                  boxShadow: '0 3px 5px 2px rgba(25, 118, 210, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 10px 2px rgba(25, 118, 210, .3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/facilities"
                sx={{ 
                  mb: 2,
                  borderColor: mode === 'dark' ? '#64b5f6' : '#1976d2',
                  color: mode === 'dark' ? '#64b5f6' : '#1976d2',
                  '&:hover': {
                    borderColor: mode === 'dark' ? '#42a5f5' : '#1565c0',
                    backgroundColor: mode === 'dark' ? 'rgba(100, 181, 246, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Facilities
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: mode === 'dark' 
                  ? '0 8px 32px rgba(0,0,0,0.4)'
                  : '0 8px 32px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                animation: 'fadeInRight 0.8s ease-out 0.6s both',
                '&:hover': {
                  transform: 'scale(1.02) translateY(-5px)',
                  boxShadow: mode === 'dark'
                    ? '0 12px 40px rgba(0,0,0,0.5)'
                    : '0 12px 40px rgba(0,0,0,0.2)'
                },
                '@keyframes fadeInRight': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateX(30px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateX(0)'
                  }
                }
              }}
              alt="Sports facilities"
              src={sportsFacilities}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;