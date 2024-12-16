import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About NelsonBot
        </Typography>
        <Typography variant="body1" paragraph>
          NelsonBot is an AI-powered assistant designed to provide quick and accurate information from the Nelson Textbook of Pediatrics. It's a valuable resource for medical students, pediatricians, and healthcare professionals seeking reliable pediatric information.
        </Typography>
        <Typography variant="body1">
          Powered by advanced natural language processing and machine learning algorithms, NelsonBot can understand complex medical queries and provide relevant, up-to-date information from the trusted Nelson Textbook of Pediatrics.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

