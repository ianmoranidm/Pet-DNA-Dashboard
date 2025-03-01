import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <p>Get in touch with the Pet DNA Dashboard team!</p>
    </Container>
  );
};

export default ContactPage;
