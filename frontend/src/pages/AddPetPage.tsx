import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
} from '@mui/material';

const AddPetPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
  });

  const [breeds, setBreeds] = useState<{ breed: string; percentage: number }[]>([
    { breed: '', percentage: 0 },
  ]);  const [healthRisks, setHealthRisks] = useState([{ risk: '', level: '' }]);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleBreedChange = (
    index: number,
    field: keyof { breed: string; percentage: number }, // Specify that `field` is a key of the breeds object
    value: string | number
  ) => {
    const updatedBreeds = [...breeds];
    updatedBreeds[index][field] = value as never; 
    setBreeds(updatedBreeds);
  };
  

  const handleHealthRiskChange = (index: number, field: 'risk' | 'level', value: string) => {
    const updatedHealthRisks = [...healthRisks];
    updatedHealthRisks[index][field] = value;
    setHealthRisks(updatedHealthRisks);
  };

  const addBreed = () => {
    setBreeds([...breeds, { breed: '', percentage: 0 }]);
  };

  const removeBreed = (index: number) => {
    setBreeds(breeds.filter((_, i) => i !== index));
  };

  const addHealthRisk = () => {
    setHealthRisks([...healthRisks, { risk: '', level: '' }]);
  };

  const removeHealthRisk = (index: number) => {
    setHealthRisks(healthRisks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, age } = formData;

    if (!name || age <= 0 || breeds.some((b) => !b.breed) || healthRisks.some((h) => !h.risk || !h.level)) {
      setErrorMessage('All fields are required.');
      return;
    }

    const payload = {
      name,
      age,
      breed: breeds.reduce((acc: { [key: string]: number }, curr) => {
        acc[curr.breed] = curr.percentage;
        return acc;
      }, {}),
      health_risks: healthRisks.reduce((acc: { [key: string]: string }, curr) => {
        acc[curr.risk] = curr.level;
        return acc;
      }, {}),
    };

    try {
      const response = await fetch('http://localhost:5000/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to add pet.');
      }

      const data = await response.json();
      setSuccessMessage(`Pet ${data.name} added successfully!`);
      setErrorMessage('');
      setFormData({ name: '', age: 0 });
      setBreeds([{ breed: '', percentage: 0 }]);
      setHealthRisks([{ risk: '', level: '' }]);
    } catch (error) {
      setErrorMessage('Error adding pet. Please try again.');
    }
  };

  return (
    <Container>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ marginTop: '100px' }} // Adjust the margin value as needed
      >
        Add a Pet
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Please fill in all the required fields to add a new pet.
      </Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      {successMessage && <Typography color="primary">{successMessage}</Typography>}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="h6">Name</Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Typography variant="h6">Age</Typography>
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
          fullWidth
          margin="normal"
          InputProps={{ inputProps: { min: 0 } }}
        />

        <Typography variant="h6" mt={3}>
          Breeds
        </Typography>
        {breeds.map((breed, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
            <TextField
              label="Breed"
              value={breed.breed}
              onChange={(e) => handleBreedChange(index, 'breed', e.target.value)}
            />
            <TextField
              label="Percentage"
              type="number"
              value={breed.percentage}
              onChange={(e) => handleBreedChange(index, 'percentage', +e.target.value)}
              InputProps={{ inputProps: { min: 0, max: 100, step: 1 } }}
            />
            <Button variant="outlined" color="secondary" onClick={() => removeBreed(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" onClick={addBreed}>
          Add Breed
        </Button>

        <Typography variant="h6" mt={3}>
          Health Risks
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          If there are none, please write "None" and select "N/A" from the risk level.
        </Typography>
        {healthRisks.map((risk, index) => (
          <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
            <TextField
              label="Health Risk"
              value={risk.risk}
              onChange={(e) => handleHealthRiskChange(index, 'risk', e.target.value)}
            />
            <TextField
              select
              label="Risk Level"
              value={risk.level}
              onChange={(e) => handleHealthRiskChange(index, 'level', e.target.value)}
              style={{ width: '150px' }} // Ensure dropdown is wider to display "Risk Level"
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
            </TextField>
            <Button variant="outlined" color="secondary" onClick={() => removeHealthRisk(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button variant="contained" onClick={addHealthRisk}>
          Add Health Risk
        </Button>

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPetPage;
