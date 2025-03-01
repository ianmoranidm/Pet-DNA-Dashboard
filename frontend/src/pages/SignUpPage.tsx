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

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, username, password, confirmPassword } = formData;

    // Basic validation
    if (!email || !username || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Simulate successful signup
    setErrorMessage('');
    setSuccessMessage('Signup successful!');
    setFormData({ email: '', username: '', password: '', confirmPassword: '' });

    // Implement API integration here
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: '100px' }} // Adds spacing between title and navbar
      >
        Sign Up
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Create an account to start managing your pet information.
      </Typography>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}

      <Box component="form" onSubmit={handleSubmit} noValidate mt={2}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
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
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="password"
          required
        />

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account?{' '}
            <Link component={RouterLink} to="/login" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
