import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1e88e5',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Smart Sports Booking
            </Typography>
            <Typography variant="body2">
              Book your favorite sports facilities with ease.
              Find the perfect venue for your next game or practice session.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              <Link href="/facilities" color="inherit" underline="hover">
                Facilities
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              <Link href="/booking" color="inherit" underline="hover">
                Book Now
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2" display="block" gutterBottom>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" gutterBottom>
              123 Sports Avenue, Sportsville
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@smartsportsbooking.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              Hours: Monday-Friday 9am-6pm
            </Typography>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Smart Sports Booking. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;