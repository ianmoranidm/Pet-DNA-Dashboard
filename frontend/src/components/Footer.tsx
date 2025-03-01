import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        textAlign: 'center',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Pet DNA Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
