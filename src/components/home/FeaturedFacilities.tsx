import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Featured Facilities
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
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
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={facility.image}
                  alt={facility.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {facility.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {facility.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
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