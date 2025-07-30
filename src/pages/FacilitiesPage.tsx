import React from 'react';
import { Container, Typography, GridLegacy as Grid, Card, CardMedia, CardContent, CardActions, Button, Box, Chip, Rating, Divider, Paper } from '@mui/material';
import { AccessTime, LocationOn, Info, MonetizationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Import local images
import tennisCourt from '../assets/images/tennis-court.svg';
import basketballCourt from '../assets/images/basketball-court.svg';
import footballField from '../assets/images/football-field.svg';
import swimmingPool from '../assets/images/swimming-pool.svg';
import badmintonCourt from '../assets/images/badminton-court.svg';
import volleyballCourt from '../assets/images/volleyball-court.svg';

// Mock data for facilities
const facilities = [
  {
    id: 1,
    name: 'Tennis Court',
    description: 'Professional-grade tennis courts with excellent lighting and surface.',
    longDescription: 'Our tennis courts feature professional-grade surfaces with proper lighting for evening games. The courts are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: tennisCourt,
    price: '$25/hour',
    location: '123 Sports Avenue, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Changing Rooms', 'Equipment Rental', 'Parking', 'Lighting'],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: 'Basketball Court',
    description: 'Indoor basketball courts with professional flooring and equipment.',
    longDescription: 'Our indoor basketball courts feature professional flooring, adjustable hoops, and proper lighting. The courts are climate-controlled for year-round comfort. Amenities include changing rooms, water fountains, and equipment rental.',
    image: basketballCourt,
    price: '$30/hour',
    location: '456 Sports Boulevard, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Indoor', 'Climate Control', 'Equipment Rental', 'Spectator Seating'],
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: 3,
    name: 'Football Field',
    description: 'Full-size football field with natural grass and proper markings.',
    longDescription: 'Our full-size football fields feature natural grass with proper markings and goal posts. The fields are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: footballField,
    price: '$50/hour',
    location: '789 Sports Drive, Sportsville',
    openingHours: 'Mon-Fri: 7am-9pm, Sat-Sun: 8am-7pm',
    amenities: ['Natural Grass', 'Goal Posts', 'Changing Rooms', 'Floodlights'],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Olympic-size swimming pool with temperature control and lanes.',
    longDescription: 'Our Olympic-size swimming pool features temperature control and proper lane markings. The pool is regularly maintained to ensure the best swimming experience. Amenities include changing rooms, showers, and equipment rental.',
    image: swimmingPool,
    price: '$20/hour',
    location: '101 Aquatic Center, Sportsville',
    openingHours: 'Mon-Fri: 6am-9pm, Sat-Sun: 8am-7pm',
    amenities: ['Temperature Control', 'Lane Markings', 'Changing Rooms', 'Showers'],
    rating: 4.9,
    reviewCount: 210,
  },
  {
    id: 5,
    name: 'Badminton Court',
    description: 'Indoor badminton courts with proper flooring and equipment.',
    longDescription: 'Our indoor badminton courts feature proper flooring, nets, and lighting. The courts are climate-controlled for year-round comfort. Amenities include changing rooms, water fountains, and equipment rental.',
    image: badmintonCourt,
    price: '$20/hour',
    location: '202 Sports Complex, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Indoor', 'Climate Control', 'Equipment Rental', 'Proper Lighting'],
    rating: 4.5,
    reviewCount: 87,
  },
  {
    id: 6,
    name: 'Volleyball Court',
    description: 'Beach volleyball courts with proper sand and equipment.',
    longDescription: 'Our beach volleyball courts feature proper sand, nets, and boundary markings. The courts are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: volleyballCourt,
    price: '$25/hour',
    location: '303 Beach Sports, Sportsville',
    openingHours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-7pm',
    amenities: ['Beach Sand', 'Nets', 'Changing Rooms', 'Showers'],
    rating: 4.7,
    reviewCount: 112,
  },
];

const FacilitiesPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Sports Facilities
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Browse and book from our wide range of sports facilities
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {facilities.map((facility) => (
          <Grid item key={facility.id} xs={12} sm={6} md={4}>
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
                height="240"
                image={facility.image}
                alt={facility.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {facility.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={facility.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({facility.reviewCount} reviews)
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {facility.description}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {facility.location}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AccessTime fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {facility.openingHours}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MonetizationOn fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="h6" color="primary">
                    {facility.price}
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  {facility.amenities.slice(0, 3).map((amenity, index) => (
                    <Chip
                      key={index}
                      label={amenity}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                  {facility.amenities.length > 3 && (
                    <Chip
                      label={`+${facility.amenities.length - 3} more`}
                      size="small"
                      variant="outlined"
                      sx={{ mb: 0.5 }}
                    />
                  )}
                </Box>
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
    </Container>
  );
};

export default FacilitiesPage;