import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import avatarMale1 from '../../assets/images/avatar-male-1.svg';
import avatarFemale1 from '../../assets/images/avatar-female-1.svg';
import avatarMale2 from '../../assets/images/avatar-male-2.svg';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Tennis Player',
    avatar: avatarMale1,
    comment: 'Smart Sports Booking made it so easy to find and book tennis courts. The interface is intuitive and the booking process is seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Basketball Coach',
    avatar: avatarFemale1,
    comment: 'As a coach, I need to book courts regularly. This platform has saved me so much time with its easy scheduling and payment system.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Football Enthusiast',
    avatar: avatarMale2,
    comment: 'I love how I can see all available time slots at once and book instantly. The reminder system is also very helpful.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
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
          What Our Users Say
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Hear from sports enthusiasts who use our platform
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} sm={6} md={4}>
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
                <CardContent>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <FormatQuote 
                      sx={{ 
                        fontSize: 40, 
                        color: 'primary.main',
                        transform: 'rotate(180deg)',
                        opacity: 0.3,
                      }} 
                    />
                  </Box>
                  <Typography variant="body1" paragraph>
                    {testimonial.comment}
                  </Typography>
                  <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;