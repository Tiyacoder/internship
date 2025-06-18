import React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    <InputBase
      sx={{ backgroundColor: '#FFF', borderRadius: 1, px: 1, flex: 1 }}
      placeholder="Search or type"
      startAdornment={<SearchIcon sx={{ mr: 1 }} />}
    />
    <IconButton><HomeIcon /></IconButton>
    <IconButton><LocationOnIcon /></IconButton>
    <IconButton><CalendarTodayIcon /></IconButton>
    <IconButton><HeadsetMicIcon /></IconButton>
    <IconButton><NotificationsIcon /></IconButton>
  </Box>
);

export default Topbar;
