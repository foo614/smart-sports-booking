import React from 'react';
import { Container } from '@mui/material';
import Hero from '../components/home/Hero';
import FeaturedFacilities from '../components/home/FeaturedFacilities';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedFacilities />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default HomePage;