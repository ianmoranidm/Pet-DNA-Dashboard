import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Pet DNA Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Discover more about your pet's genetics and health risks!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/signup" style={{ marginRight: '10px' }}>
        Sign Up
      </Button>
      <Button variant="outlined" color="primary" component={Link} to="/login">
        Login
      </Button>
    </Container>
  );
};

export default HomePage;
