import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Paper, Avatar } from '@mui/material';
import { Search, EventAvailable, Payment, CheckCircle } from '@mui/icons-material';

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
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
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
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    bgcolor: step.color,
                    color: 'white',
                  }}
                >
                  {step.icon}
                </Avatar>
                <Typography gutterBottom variant="h5" component="h3">
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