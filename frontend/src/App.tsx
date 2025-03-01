import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PetListPage from './pages/PetListPage';
import AddPetPage from './pages/AddPetPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensure the layout occupies the full height of the viewport
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1, // Ensures the main content area grows to push the footer down
            padding: '16px',
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/pets" element={<PetListPage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <Box
          component="footer"
          sx={{
            mt: 'auto', // Pushes the footer to the bottom
            py: 2, // Adds vertical padding
            backgroundColor: 'primary.main', // Footer background color
            color: 'white', // Footer text color
            textAlign: 'center',
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
