import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

// Import local images
import tennisCourt from '../../assets/images/tennis-court.svg';
import basketballCourt from '../../assets/images/basketball-court.svg';
import footballField from '../../assets/images/football-field.svg';
import swimmingPool from '../../assets/images/swimming-pool.svg';

// Mock data for featured facilities
const facilities = [
  {
    id: 1,
    name: 'Tennis Court',
    description: 'Professional-grade tennis courts with excellent lighting and surface.',
    image: tennisCourt,
    price: '$25/hour',
  },
  {
    id: 2,
    name: 'Basketball Court',
    description: 'Indoor basketball courts with professional flooring and equipment.',
    image: basketballCourt,
    price: '$30/hour',
  },
  {
    id: 3,
    name: 'Football Field',
    description: 'Full-size football field with natural grass and proper markings.',
    image: footballField,
    price: '$50/hour',
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Olympic-size swimming pool with temperature control and lanes.',
    image: swimmingPool,
    price: '$20/hour',
  },
];

const FeaturedFacilities: React.FC = () => {
  const { mode } = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: 8,
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #0d1421 0%, #1a2332 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
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
          Featured Facilities
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          paragraph
          sx={{
            color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
            mb: 4
          }}
        >
          Discover our top-rated sports facilities available for booking
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {facilities.map((facility) => (
            <Grid item key={facility.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                <CardMedia
                  component="img"
                  height="200"
                  image={facility.image}
                  alt={facility.name}
                  sx={{
                    borderRadius: '12px 12px 0 0',
                    filter: mode === 'dark' ? 'brightness(0.8)' : 'brightness(1)'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      color: mode === 'dark' ? '#e3f2fd' : '#1565c0'
                    }}
                  >
                    {facility.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {facility.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mt: 2,
                      fontWeight: 'bold',
                      background: mode === 'dark'
                        ? 'linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)'
                        : 'linear-gradient(45deg, #2e7d32 30%, #388e3c 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {facility.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to={`/facilities/${facility.id}`}>
                    View Details
                  </Button>
                  <Button size="small" color="primary" component={Link} to={`/booking/${facility.id}`}>
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="outlined" size="large" component={Link} to="/facilities">
            View All Facilities
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedFacilities;