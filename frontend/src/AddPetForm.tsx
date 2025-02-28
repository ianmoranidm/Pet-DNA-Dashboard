import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const AddPetForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [breed, setBreed] = useState('');
  const [healthRisks, setHealthRisks] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!name || !age || !breed || !healthRisks) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          age: Number(age),
          breed: { [breed]: 100 }, // Simple structure for breed
          health_risks: { [healthRisks]: 'Moderate' }, // Simple structure for health risks
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add pet');
      }

      const data = await response.json();
      setSuccessMessage(`Pet "${data.name}" added successfully!`);
      setName('');
      setAge('');
      setBreed('');
      setHealthRisks('');
    } catch (err) {
      setError('Error adding pet. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Add a Pet
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {successMessage && <Typography color="primary">{successMessage}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Age"
          fullWidth
          margin="normal"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <TextField
          label="Breed"
          fullWidth
          margin="normal"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <TextField
          label="Health Risks"
          fullWidth
          margin="normal"
          value={healthRisks}
          onChange={(e) => setHealthRisks(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Pet
        </Button>
      </form>
    </Container>
  );
};

export default AddPetForm;
