import React from 'react';
import { Container, Typography } from '@mui/material';

const PetListPage: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Pet List
      </Typography>
      <p>View all your pets here.</p>
    </Container>
  );
};

export default PetListPage;
