import React from 'react';
import { Box, Button, Container, Typography, GridLegacy as Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import sportsFacilities from '../../assets/images/sports-facilities.svg';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#e3f2fd',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="primary"
              gutterBottom
              fontWeight="bold"
            >
              Book Sports Facilities with Ease
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Find and book the perfect sports venue for your next game or practice session.
              Tennis courts, football fields, basketball courts, and more - all in one place.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/booking"
                sx={{ mr: 2, mb: 2 }}
              >
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/facilities"
                sx={{ mb: 2 }}
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
                borderRadius: 2,
                boxShadow: 3,
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