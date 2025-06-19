import React from 'react';
import { Box, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Topbar = () => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <InputBase
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          px: 2,
          py: 0.5,
          width: 280,
          fontSize: 14,
        }}
        placeholder="Search or type"
        startAdornment={<SearchIcon sx={{ mr: 1, color: '#888' }} />}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton><LocationOnIcon /></IconButton>
        <IconButton><CalendarTodayIcon /></IconButton>
        <IconButton><HeadsetMicIcon /></IconButton>
        <IconButton><NotificationsIcon /></IconButton>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: '#febc9e',
          }}
        />
      </Box>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5, ml: 1 }}>
      <HomeIcon sx={{ fontSize: 18, color: '#7b7d8a' }} />
      <ChevronRightIcon sx={{ fontSize: 18, color: '#7b7d8a' }} />
      <Typography fontSize={14} color="#7b7d8a">Modules</Typography>
      <ChevronRightIcon sx={{ fontSize: 18, color: '#7b7d8a' }} />
      <Typography fontSize={14} color="#7b7d8a">Medical management</Typography>
    </Box>
  </Box>
);

export default Topbar;
