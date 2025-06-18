import React from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const EmployeeDetails = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.5,
        borderRadius: 3,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2,
        }}
      >
        <Box flex={1}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/41.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Box>
              <Box
                sx={{
                  backgroundColor: '#0aa4f4',
                  color: 'white',
                  borderRadius: 1,
                  px: 1,
                  py: 0.25,
                  fontSize: 12,
                  fontWeight: 500,
                  mb: 0.5,
                  display: 'inline-block',
                }}
              >
                61984164984
              </Box>
              <Typography fontWeight="700" fontSize={16} lineHeight={1.1}>
                Ajay Pal
              </Typography>
              <Typography color="text.secondary" fontSize={12}>
                Employee Id
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mt: 1,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon sx={{ fontSize: 14 }} />
              <Typography fontSize={12}>+91 - 0000000000</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 14 }} />
              <Typography fontSize={12}>imied@trash.com</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            flex: '0 0 260px',
            justifyContent: 'flex-end',
          }}
        >
          {[
            { label: 'Age', value: '34 years old' },
            { label: 'Weight', value: '82 Kg' },
            { label: 'Height', value: '182 cm' },
            { label: 'Blood', value: 'O +' },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f8f9fb',
                borderRadius: 2,
                p: 0.75,
                gap: 1,
                height: 44,
                flex: '1 1 46%',
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: 1.5,
                  background: 'linear-gradient(145deg, #d1ecf1, #f1f9fc)',
                }}
              />
              <Box>
                <Typography fontSize={11} color="text.secondary">
                  {item.label}
                </Typography>
                <Typography fontSize={12.5} fontWeight={500}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default EmployeeDetails;
