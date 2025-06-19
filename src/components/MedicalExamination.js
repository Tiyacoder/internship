import React from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';

const Consultations = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.5,
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography fontWeight={500} fontSize={14}>
          Medical Examination
        </Typography>
        <IconButton size="small" sx={{ p: 0.5 }}>
          <OpenInNewIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      <List disablePadding>
        {[1, 2, 3, 4].map((_, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{
              px: 0,
              py: 0.4,
              minHeight: 42,
              alignItems: 'center',
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#ccc',
                  border: '1px solid #0aa4f4',
                }}
              />
            </ListItemAvatar>

            <ListItemText
              sx={{ mr: 1 }}
              primary={
                <Box lineHeight={1}>
                  <Typography fontWeight={600} fontSize={16}>
                    Date
                  </Typography>
                  <Typography fontSize={16} color="text.secondary">
                    PME
                  </Typography>
                </Box>
              }
            />

            <Box display="flex" alignItems="center" gap={0.5}>
              <IconButton size="small">
                <DescriptionIcon sx={{ fontSize: 16, color: '#0aa4f4' }} />
              </IconButton>
              <IconButton size="small">
                <EditIcon sx={{ fontSize: 15, color: '#0aa4f4' }} />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Consultations;
