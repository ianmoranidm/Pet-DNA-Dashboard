import React, { useEffect, useState } from 'react';
import { fetchPets } from './api';
import AddPetForm from './AddPetForm';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const App = () => {
  const [pets, setPets] = useState<{ id: string; name: string; breed: string }[]>([]);

  useEffect(() => {
    const getPets = async () => {
      const data = await fetchPets();
      setPets(data);
    };
    getPets();
  }, []);

  return (
    <Container>
      <h1>Pet List</h1>
      <List>
        {pets.map((pet) => (
          <ListItem key={pet.id}>
            <ListItemText primary={pet.name} secondary={pet.breed} />
          </ListItem>
        ))}
      </List>
      <AddPetForm />
    </Container>
  );
};

export default App;
