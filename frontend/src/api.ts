const BASE_URL = 'http://localhost:5000'; // Backend URL

export const fetchPets = async () => {
  const response = await fetch(`${BASE_URL}/pets`);
  const data = await response.json();
  return data;
};

export const createPet = async (pet: { name: string; breed: string; healthRisks: string }) => {
  const response = await fetch(`${BASE_URL}/pets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet),
  });
  const data = await response.json();
  return data;
};
