import React from 'react';
import GuestLayout from '../layouts/GuestLayout'; // pastikan path-nya sesuai
import AboutCardSection from '../components/guest/About';

const About = () => {
  return (
    <GuestLayout>
      <AboutCardSection />
    </GuestLayout>
  );
};

export default About;
