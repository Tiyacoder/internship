import React from 'react';
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Avatar,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

const Documents = () => {
  const reports = [1, 2, 3, 4];

  return (
    <Paper
      sx={{
        borderRadius: 3,
        p: 0,                       // remove all padding on paper
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        width: 180,                 // aggressively smaller width
        minWidth: 180,
        maxWidth: 180,
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={0.5}                   // less margin bottom
        px={1}                     // horizontal padding for header
        py={0.3}                   // vertical padding for header
      >
        <Typography fontWeight={700} fontSize={12}>
          Reports / Documents
        </Typography>
        <IconButton size="small" sx={{ p: 0 }}>
          <OpenInNewIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>

      {/* Report List */}
      <Box display="flex" flexDirection="column" gap={2}>
        {reports.map((_, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={1}                 // horizontal padding inside item
            py={1}                 // vertical padding for taller item height
            borderRadius={2}
            bgcolor="#f9f9f9"
            minHeight={45}          // make each item taller vertically
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: '#e6f7ff',
                  width: 18,
                  height: 18,
                }}
              />
              <Typography fontSize={11} fontWeight={600} noWrap>
                Blood Report
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.25}>
              <IconButton size="small" sx={{ color: '#0aa4f4', p: 0 }}>
                <VisibilityIcon sx={{ fontSize: 14 }} />
              </IconButton>
              <IconButton size="small" sx={{ color: '#0aa4f4', p: 0 }}>
                <DownloadIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Documents;
