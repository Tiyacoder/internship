import React from 'react';
import { Button, Box } from '@mui/material';

const StartExamButton = () => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={4}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          px: 10,              
          py: 2,             
          fontSize: 20,       
          width: '100%',      
          maxWidth: 600 ,      
          borderRadius: 2,
        }}
      >
        Start Examination ➔
      </Button>
    </Box>
  );
};

export default StartExamButton;
