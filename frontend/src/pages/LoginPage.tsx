import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = formData;

    // Basic validation
    if (!username || !password) {
      setErrorMessage('Username and password are required.');
      return;
    }

    // Simulate successful login
    setErrorMessage('');
    setSuccessMessage('Login successful!');
    setFormData({ username: '', password: '' });

    // Implement API integration here
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: '100px' }} // Adds spacing between title and navbar
      >
        Login
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Enter your credentials to access your account.
      </Typography>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}

      <Box component="form" onSubmit={handleSubmit} noValidate mt={2}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="password"
          required
        />

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link component={RouterLink} to="/signup" color="primary">
              Create an account
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
