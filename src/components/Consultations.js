import React from 'react';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  Avatar,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const ConsultationRow = ({ doctor, designation, date, time, treatment }) => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-between"
    spacing={2}
    sx={{ mt: 3 }} 
  >
    <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: '#ccc',
          border: '2px solid #0aa4f4',
        }}
      />
      <Box>
        <Typography fontSize={16} fontWeight={700} lineHeight={1.2}>
          {doctor}
        </Typography>
        <Typography fontSize={16} color="text.secondary" lineHeight={1.2}>
          {designation}
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={6} container>
      <Grid item xs={6}>
        <Typography fontSize={16} fontWeight={700} lineHeight={1.2}>
          {date}
        </Typography>
        <Typography fontSize={16} color="text.secondary" lineHeight={1.2}>
          {time}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography fontSize={16} fontWeight={700} lineHeight={1.2}>
          Treatment
        </Typography>
        <Typography fontSize={16} color="text.secondary" lineHeight={1.2}>
          {treatment}
        </Typography>
      </Grid>
    </Grid>

    <Grid
      item
      xs={2}
      sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}
    >
      <IconButton size="small" sx={{ color: '#0aa4f4' }}>
        <DescriptionOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" sx={{ color: '#0aa4f4' }}>
        <EditIcon fontSize="small" />
      </IconButton>
    </Grid>
  </Grid>
);

const Consultations = () => {
  const data = [
    {
      doctor: 'Doctor Name',
      designation: 'Designation',
      date: 'Date',
      time: 'Time',
      treatment: 'Treatment Name',
    },
    {
      doctor: 'Doctor Name',
      designation: 'Designation',
      date: 'Date',
      time: 'Time',
      treatment: 'Treatment Name',
    },
    {
      doctor: 'Doctor Name',
      designation: 'Designation',
      date: 'Date',
      time: 'Time',
      treatment: 'Treatment Name',
    },
    {
      doctor: 'Doctor Name',
      designation: 'Designation',
      date: 'Date',
      time: 'Time',
      treatment: 'Treatment Name',
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        height: '100%',
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={700}>
          Consultations
        </Typography>
        <IconButton size="small" sx={{ p: 0.5 }}>
          <OpenInNewIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Grid>

      {data.map((item, index) => (
        <ConsultationRow key={index} {...item} />
      ))}
    </Paper>
  );
};

export default Consultations;
