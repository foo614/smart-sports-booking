import React from 'react';
import { Box, Container, Typography, GridLegacy as Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
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
          What Our Users Say
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
                <CardContent>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <FormatQuote 
                      sx={{ 
                        fontSize: 40, 
                        background: mode === 'dark'
                          ? 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)'
                          : 'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        transform: 'rotate(180deg)',
                        opacity: 0.6,
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
                      <Typography 
                        variant="subtitle1" 
                        fontWeight="bold"
                        sx={{
                          color: mode === 'dark' ? '#e3f2fd' : '#1565c0'
                        }}
                      >
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