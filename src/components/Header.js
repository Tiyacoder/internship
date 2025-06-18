import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const InfoCard = ({ label, value }) => (
  <Paper
    elevation={0}
    sx={{
      px: 2,
      py: 1,
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      border: '1px solid #E0E0E0',
      backgroundColor: '#F9F9F9',
    }}
  >
    <Box
      sx={{
        width: 24,
        height: 24,
        borderRadius: 1,
        background: 'linear-gradient(to bottom, #d4ecff, #ffffff)',
      }}
    />
    <Box>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="subtitle2" fontWeight={600}>
        {value}
      </Typography>
    </Box>
  </Paper>
);

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
        backgroundColor: '#fff',
        borderRadius: '16px',
        mb: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          alt="Ajay Pal"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Box
            sx={{
              backgroundColor: '#2196f3',
              color: '#fff',
              fontSize: '14px',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              display: 'inline-block',
              fontWeight: 600,
              mb: 1,
            }}
          >
            61984164984
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            Ajay Pal
          </Typography>
          <Typography color="textSecondary" fontSize="14px">
            Employee Id
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <InfoCard label="Age" value="34 years old" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <InfoCard label="Weight" value="82 Kg" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <InfoCard label="Height" value="182 cm" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <InfoCard label="Blood" value="O +" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          mt: { xs: 2, md: 0 },
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon fontSize="small" />
          <Typography variant="body1" fontWeight={600}>
            +91 - 0000000000
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon fontSize="small" />
          <Typography variant="body1" fontWeight={600}>
            imied@trash.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
