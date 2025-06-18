import React from 'react';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const MedicalOfficerDetails = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        borderRadius: 3,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* Header */}
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: 1,
              background: 'linear-gradient(145deg, #d1ecf1, #f1f9fc)',
              flexShrink: 0,
            }}
          />
          <Typography fontSize={16} fontWeight={600} lineHeight={1.2}>
            Medical Officer Details
          </Typography>
        </Grid>
        <IconButton size="small" sx={{ p: 0 }}>
          <OpenInNewIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Grid>

      {/* Name + Email + Degree */}
      <Grid container justifyContent="space-between" alignItems="center" mt={3}>
        <Grid item>
          <Typography fontSize={16} fontWeight={700} lineHeight={1.2}>
            Ajay Pal
          </Typography>
          <Typography fontSize={16} color="text.secondary" lineHeight={1.2}>
            Medical@gamil.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={16} fontWeight={600} color="#0aa4f4" lineHeight={1.2}>
            MBBS
          </Typography>
        </Grid>
      </Grid>

      {/* Designation + Regd No. 1 */}
      <Grid container spacing={0.5} mt={3}>
        <Grid item xs={4}>
          <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
            Designation 1
          </Typography>
          <Typography fontSize={16} color="#0aa4f4" lineHeight={1.2}>
            Designation 1
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
            Designation 1
          </Typography>
          <Typography fontSize={16} color="#0aa4f4" lineHeight={1.2}>
            Designation 1
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
            Regd No. 1
          </Typography>
          <Typography fontSize={16} color="#0aa4f4" lineHeight={1.2}>
            99005853
          </Typography>
        </Grid>
      </Grid>

      {/* Regd No. 1 Details */}
      <Box mt={3}>
        <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
          Regd No. 1 Details
        </Typography>
        <Typography
          fontSize={16}
          color="#0aa4f4"
          noWrap
          sx={{ textOverflow: 'ellipsis', overflow: 'hidden', lineHeight: 1.2 }}
        >
          Lorem ipsum dolor sit amet consectetur. Nunc lectus porttitor pellentesque sem. Id...
        </Typography>
      </Box>

      {/* Regd No. 2 + Details */}
      <Grid container spacing={0.5} mt={3}>
        <Grid item xs={4}>
          <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
            Regd No. 2
          </Typography>
          <Typography fontSize={16} color="#0aa4f4" lineHeight={1.2}>
            99005853
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography fontSize={16} fontWeight={600} color="text.secondary" lineHeight={1.2}>
            Regd No. 2 Details
          </Typography>
          <Typography
            fontSize={16}
            color="#0aa4f4"
            noWrap
            sx={{ textOverflow: 'ellipsis', overflow: 'hidden', lineHeight: 1.2 }}
          >
            Lorem ipsum dolor sit amet consectetur. Nunc
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MedicalOfficerDetails;
