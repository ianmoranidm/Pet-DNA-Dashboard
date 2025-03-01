import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <p>Learn more about Pet DNA Dashboard!</p>
    </Container>
  );
};

export default AboutPage;
