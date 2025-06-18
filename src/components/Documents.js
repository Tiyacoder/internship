import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';

const Documents = () => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Typography variant="subtitle1" fontWeight={600}>Reports / Documents</Typography>
    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[1, 2, 3, 4].map((i) => (
        <Button key={i} variant="outlined" size="small">Blood Report</Button>
      ))}
    </Box>
  </Paper>
);

export default Documents;
