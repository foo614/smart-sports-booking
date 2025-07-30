import React from 'react';
import { Container, Typography, GridLegacy as Grid, Card, CardMedia, CardContent, CardActions, Button, Box, Chip, Rating, Divider, Paper } from '@mui/material';
import { AccessTime, LocationOn, Info, MonetizationOn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

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
  const { mode } = useTheme();
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
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
            Our Sports Facilities
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Browse and book from our wide range of sports facilities
          </Typography>
        </Box>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {facilities.map((facility) => (
          <Grid item key={facility.id} xs={12} sm={6} md={4}>
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
              <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={facility.image}
                  alt={facility.name}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                    {facility.price}
                  </Typography>
                </Box>
              </Box>
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
                  <LocationOn fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {facility.location}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTime fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {facility.openingHours}
                  </Typography>
                </Box>
                

                
                <Box sx={{ mt: 2 }}>
                  {facility.amenities.slice(0, 3).map((amenity, index) => (
                    <Chip
                      key={index}
                      label={amenity}
                      size="small"
                      sx={{ 
                        mr: 0.5, 
                        mb: 0.5,
                        backgroundColor: mode === 'dark' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(25, 118, 210, 0.1)',
                        color: 'primary.main',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: mode === 'dark' ? 'rgba(100, 181, 246, 0.3)' : 'rgba(25, 118, 210, 0.2)'
                        }
                      }}
                    />
                  ))}
                  {facility.amenities.length > 3 && (
                    <Chip
                      label={`+${facility.amenities.length - 3} more`}
                      size="small"
                      variant="outlined"
                      sx={{ 
                        mb: 0.5,
                        borderColor: 'primary.main',
                        color: 'primary.main'
                      }}
                    />
                  )}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button 
                  size="small" 
                  component={Link} 
                  to={`/facilities/${facility.id}`}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  View Details
                </Button>
                <Button 
                  size="small" 
                  variant="contained"
                  component={Link} 
                  to={`/booking/${facility.id}`}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacilitiesPage;