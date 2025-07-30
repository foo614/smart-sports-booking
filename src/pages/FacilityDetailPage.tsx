import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  GridLegacy as Grid,
  Paper,
  Box,
  Button,
  Divider,
  Chip,
  Rating,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from '@mui/material';
import {
  AccessTime,
  LocationOn,
  MonetizationOn,
  Check,
  Info,
  DirectionsCar,
  Wc,
  LocalParking,
  Wifi,
  Restaurant,
  LocalDrink,
} from '@mui/icons-material';

// Import local images
import tennisCourt from '../assets/images/tennis-court.svg';
import basketballCourt from '../assets/images/basketball-court.svg';
import footballField from '../assets/images/football-field.svg';
import swimmingPool from '../assets/images/swimming-pool.svg';
import badmintonCourt from '../assets/images/badminton-court.svg';
import volleyballCourt from '../assets/images/volleyball-court.svg';

// Mock data for facilities (same as in FacilitiesPage)
const facilities = [
  {
    id: 1,
    name: 'Tennis Court',
    description: 'Professional-grade tennis courts with excellent lighting and surface.',
    longDescription: 'Our tennis courts feature professional-grade surfaces with proper lighting for evening games. The courts are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: tennisCourt,
    images: [
      tennisCourt,
      tennisCourt,
      tennisCourt,
      tennisCourt,
    ],
    price: '$25/hour',
    priceValue: 25,
    location: '123 Sports Avenue, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Changing Rooms', 'Equipment Rental', 'Parking', 'Lighting', 'Water Fountains', 'Seating Area'],
    rating: 4.8,
    reviewCount: 124,
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Excellent courts, well maintained and great lighting for evening games.', date: '2023-05-15' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Good facilities, but could use more seating for spectators.', date: '2023-04-22' },
      { id: 3, user: 'Michael R.', rating: 5, comment: 'Professional quality courts, definitely worth the price.', date: '2023-03-10' },
    ],
    rules: [
      'Proper tennis shoes required',
      'Maximum 4 players per court',
      'No food or drinks on court (water excepted)',
      'Please leave the court clean after use',
      'Cancellations must be made 24 hours in advance',
    ],
  },
  {
    id: 2,
    name: 'Basketball Court',
    description: 'Indoor basketball courts with professional flooring and equipment.',
    longDescription: 'Our indoor basketball courts feature professional flooring, adjustable hoops, and proper lighting. The courts are climate-controlled for year-round comfort. Amenities include changing rooms, water fountains, and equipment rental.',
    image: basketballCourt,
    images: [
      basketballCourt,
      basketballCourt,
      basketballCourt,
      basketballCourt,
    ],
    price: '$30/hour',
    priceValue: 30,
    location: '456 Sports Boulevard, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Indoor', 'Climate Control', 'Equipment Rental', 'Spectator Seating', 'Changing Rooms', 'Vending Machines'],
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      { id: 1, user: 'Alex T.', rating: 5, comment: 'Great indoor court with excellent flooring. Perfect for pickup games.', date: '2023-06-05' },
      { id: 2, user: 'Jessica L.', rating: 4, comment: 'Good court, but sometimes gets crowded during peak hours.', date: '2023-05-12' },
      { id: 3, user: 'David W.', rating: 5, comment: 'Climate control makes this place perfect year-round.', date: '2023-04-18' },
    ],
    rules: [
      'Non-marking shoes required',
      'No dunking on adjustable hoops',
      'Maximum 10 players per court',
      'No food or drinks on court',
      'Please report any equipment issues to staff',
    ],
  },
  {
    id: 3,
    name: 'Football Field',
    description: 'Full-size football field with natural grass and proper markings.',
    longDescription: 'Our full-size football fields feature natural grass with proper markings and goal posts. The fields are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: footballField,
    images: [
      footballField,
      footballField,
      footballField,
      footballField,
    ],
    price: '$50/hour',
    priceValue: 50,
    location: '789 Sports Drive, Sportsville',
    openingHours: 'Mon-Fri: 7am-9pm, Sat-Sun: 8am-7pm',
    amenities: ['Natural Grass', 'Goal Posts', 'Changing Rooms', 'Floodlights'],
    rating: 4.7,
    reviewCount: 156,
    reviews: [
      { id: 1, user: 'Mark J.', rating: 5, comment: 'Excellent field, well maintained and great for team practice.', date: '2023-06-10' },
      { id: 2, user: 'Emily S.', rating: 4, comment: 'Good field, but could use more seating for spectators.', date: '2023-05-20' },
      { id: 3, user: 'Robert K.', rating: 5, comment: 'Professional quality field, definitely worth the price.', date: '2023-04-15' },
    ],
    rules: [
      'Proper footwear required',
      'No unauthorized vehicles on field',
      'No food or drinks on field',
      'Please leave the field clean after use',
      'Cancellations must be made 24 hours in advance',
    ],
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Olympic-size swimming pool with temperature control and lanes.',
    longDescription: 'Our Olympic-size swimming pool features temperature control and proper lane markings. The pool is regularly maintained to ensure the best swimming experience. Amenities include changing rooms, showers, and equipment rental.',
    image: swimmingPool,
    images: [
      swimmingPool,
      swimmingPool,
      swimmingPool,
      swimmingPool,
    ],
    price: '$20/hour',
    priceValue: 20,
    location: '101 Aquatic Center, Sportsville',
    openingHours: 'Mon-Fri: 6am-9pm, Sat-Sun: 8am-7pm',
    amenities: ['Temperature Control', 'Lane Markings', 'Changing Rooms', 'Showers'],
    rating: 4.9,
    reviewCount: 210,
    reviews: [
      { id: 1, user: 'Lisa M.', rating: 5, comment: 'Excellent pool, well maintained and perfect temperature.', date: '2023-06-15' },
      { id: 2, user: 'James P.', rating: 5, comment: 'Great facilities, clean and professional.', date: '2023-05-25' },
      { id: 3, user: 'Karen L.', rating: 4, comment: 'Very good pool, but sometimes gets crowded.', date: '2023-04-20' },
    ],
    rules: [
      'Shower before entering pool',
      'Proper swimwear required',
      'No running on pool deck',
      'No diving in shallow areas',
      'Children under 12 must be supervised',
    ],
  },
  {
    id: 5,
    name: 'Badminton Court',
    description: 'Indoor badminton courts with proper flooring and equipment.',
    longDescription: 'Our indoor badminton courts feature proper flooring, nets, and lighting. The courts are climate-controlled for year-round comfort. Amenities include changing rooms, water fountains, and equipment rental.',
    image: badmintonCourt,
    images: [
      badmintonCourt,
      badmintonCourt,
      badmintonCourt,
      badmintonCourt,
    ],
    price: '$20/hour',
    priceValue: 20,
    location: '202 Sports Complex, Sportsville',
    openingHours: 'Mon-Fri: 7am-10pm, Sat-Sun: 8am-8pm',
    amenities: ['Indoor', 'Climate Control', 'Equipment Rental', 'Proper Lighting'],
    rating: 4.5,
    reviewCount: 87,
    reviews: [
      { id: 1, user: 'Thomas H.', rating: 5, comment: 'Great courts with excellent lighting and flooring.', date: '2023-06-20' },
      { id: 2, user: 'Nancy W.', rating: 4, comment: 'Good courts, but equipment rental could be improved.', date: '2023-05-30' },
      { id: 3, user: 'George B.', rating: 5, comment: 'Perfect for casual and competitive play.', date: '2023-04-25' },
    ],
    rules: [
      'Non-marking shoes required',
      'Maximum 4 players per court',
      'No food or drinks on court',
      'Please report any equipment issues to staff',
      'Cancellations must be made 24 hours in advance',
    ],
  },
  {
    id: 6,
    name: 'Volleyball Court',
    description: 'Beach volleyball courts with proper sand and equipment.',
    longDescription: 'Our beach volleyball courts feature proper sand, nets, and boundary markings. The courts are regularly maintained to ensure the best playing experience. Amenities include changing rooms, water fountains, and equipment rental.',
    image: volleyballCourt,
    images: [
      volleyballCourt,
      volleyballCourt,
      volleyballCourt,
      volleyballCourt,
    ],
    price: '$25/hour',
    priceValue: 25,
    location: '303 Beach Sports, Sportsville',
    openingHours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-7pm',
    amenities: ['Beach Sand', 'Nets', 'Changing Rooms', 'Showers'],
    rating: 4.7,
    reviewCount: 112,
    reviews: [
      { id: 1, user: 'Patricia C.', rating: 5, comment: 'Excellent beach volleyball courts, well maintained.', date: '2023-06-25' },
      { id: 2, user: 'Steven R.', rating: 4, comment: 'Good courts, but could use more shade for spectators.', date: '2023-06-05' },
      { id: 3, user: 'Linda K.', rating: 5, comment: 'Perfect sand quality and net height.', date: '2023-05-15' },
    ],
    rules: [
      'No glass containers on sand',
      'Maximum 8 players per court',
      'Please clean up after use',
      'No pets allowed on courts',
      'Cancellations must be made 24 hours in advance',
    ],
  }
];

// Map amenity names to icons
const amenityIcons: Record<string, React.ReactElement> = {
  'Changing Rooms': <Wc />,
  'Equipment Rental': <Info />,
  'Parking': <LocalParking />,
  'Lighting': <Info />,
  'Indoor': <Info />,
  'Climate Control': <Info />,
  'Spectator Seating': <Info />,
  'Water Fountains': <LocalDrink />,
  'Seating Area': <Info />,
  'Vending Machines': <Restaurant />,
  'Wifi': <Wifi />,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`facility-tabpanel-${index}`}
      aria-labelledby={`facility-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const FacilityDetailPage: React.FC = () => {
  const { facilityId } = useParams<{ facilityId: string }>();
  const [tabValue, setTabValue] = React.useState(0);
  
  // Find the selected facility
  const facility = facilities.find(f => f.id === Number(facilityId)) || facilities[0];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 0, overflow: 'hidden' }}>
            <Box sx={{ position: 'relative', height: 400 }}>
              <CardMedia
                component="img"
                height="400"
                image={facility.image}
                alt={facility.name}
                sx={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  p: 2,
                }}
              >
                <Typography variant="h4" component="h1">
                  {facility.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Rating value={facility.rating} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({facility.reviewCount} reviews)
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="facility tabs">
                <Tab label="Overview" />
                <Tab label="Amenities" />
                <Tab label="Rules" />
                <Tab label="Reviews" />
              </Tabs>
            </Box>
            
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" gutterBottom>
                About this facility
              </Typography>
              <Typography variant="body1" paragraph>
                {facility.longDescription}
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <LocationOn color="action" sx={{ mt: 0.5, mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Location
                      </Typography>
                      <Typography variant="body2">
                        {facility.location}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTime color="action" sx={{ mt: 0.5, mr: 1 }} />
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Opening Hours
                      </Typography>
                      <Typography variant="body2">
                        {facility.openingHours}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Gallery
              </Typography>
              <Grid container spacing={2}>
                {facility.images.map((image, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="120"
                        image={image}
                        alt={`${facility.name} image ${index + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" gutterBottom>
                Amenities
              </Typography>
              <Grid container spacing={2}>
                {facility.amenities.map((amenity, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon>
                        {amenityIcons[amenity] || <Check />}
                      </ListItemIcon>
                      <Typography variant="body1">{amenity}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" gutterBottom>
                Facility Rules
              </Typography>
              <List>
                {facility.rules.map((rule, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Check color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={rule} />
                  </ListItem>
                ))}
              </List>
            </TabPanel>
            
            <TabPanel value={tabValue} index={3}>
              <Typography variant="h6" gutterBottom>
                Customer Reviews
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Typography variant="h3" component="span" sx={{ mr: 2 }}>
                  {facility.rating}
                </Typography>
                <Box>
                  <Rating value={facility.rating} precision={0.1} readOnly />
                  <Typography variant="body2" color="text.secondary">
                    Based on {facility.reviewCount} reviews
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ mb: 3 }} />
              {facility.reviews.map((review) => (
                <Box key={review.id} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.user}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.date}
                    </Typography>
                  </Box>
                  <Rating value={review.rating} size="small" readOnly sx={{ my: 1 }} />
                  <Typography variant="body1">
                    {review.comment}
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </TabPanel>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Booking Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MonetizationOn color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4" component="span" color="primary">
                {facility.price}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Price per hour, includes access to all standard amenities.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              component={Link}
              to={`/booking/${facility.id}`}
              sx={{ mb: 2 }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              component="a"
              href={`tel:+1234567890`}
            >
              Call for Inquiry
            </Button>
          </Paper>
          
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Need Help?
            </Typography>
            <Typography variant="body2" paragraph>
              Have questions about this facility or the booking process? Our customer support team is here to help.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              to="/contact"
              sx={{ mb: 1 }}
            >
              Contact Us
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before your booking. Late cancellations may be subject to a fee.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FacilityDetailPage;