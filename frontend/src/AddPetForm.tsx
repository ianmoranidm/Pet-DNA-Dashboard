import React, { useState } from 'react';
import { createPet } from './api';
import { Container, TextField, Button } from '@mui/material';

const AddPetForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [healthRisks, setHealthRisks] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPet({ name, breed, healthRisks });
    setName('');
    setBreed('');
    setHealthRisks('');
  };

  return (
    <Container>
      <h2>Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Health Risks"
          value={healthRisks}
          onChange={(e) => setHealthRisks(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Pet
        </Button>
      </form>
    </Container>
  );
};

export default AddPetForm;
