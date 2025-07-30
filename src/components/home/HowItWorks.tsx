import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Paper, Avatar } from '@mui/material';
import { Search, EventAvailable, Payment, CheckCircle } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const steps = [
  {
    title: 'Find a Facility',
    description: 'Search for available sports facilities based on your location, sport type, and preferred time.',
    icon: <Search fontSize="large" />,
    color: '#bbdefb',
  },
  {
    title: 'Book a Time Slot',
    description: 'Select your preferred date and time slot from the available options.',
    icon: <EventAvailable fontSize="large" />,
    color: '#90caf9',
  },
  {
    title: 'Make Payment',
    description: 'Securely pay for your booking using various payment methods.',
    icon: <Payment fontSize="large" />,
    color: '#64b5f6',
  },
  {
    title: 'Enjoy Your Game',
    description: 'Receive confirmation and arrive at the facility on your booked time.',
    icon: <CheckCircle fontSize="large" />,
    color: '#42a5f5',
  },
];

const HowItWorks: React.FC = () => {
  const { mode } = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: 8, 
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: mode === 'dark'
              ? 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)'
              : 'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mb: 2
          }}
        >
          How It Works
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Book your favorite sports facility in just a few simple steps
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {steps.map((step, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 3,
                  background: mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(30, 30, 30, 0.9) 0%, rgba(50, 50, 50, 0.9) 100%)'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: mode === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: mode === 'dark'
                      ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    background: `linear-gradient(45deg, ${step.color} 30%, #42a5f5 90%)`,
                    color: 'white',
                    boxShadow: mode === 'dark'
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {step.icon}
                </Avatar>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: mode === 'dark' ? '#e3f2fd' : '#1565c0'
                  }}
                >
                  {index + 1}. {step.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;