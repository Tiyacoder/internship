import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
  Collapse,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
  Folder as ModulesIcon,
  AssignmentTurnedIn as MyActionsIcon,
  FormatListBulleted as AllActionsIcon,
  Description as ReportsIcon,
  Group as UsersIcon,
  HelpOutline as HelpIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  const [openModules, setOpenModules] = useState(false);
  const [openActions, setOpenActions] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);

  const toggleModules = () => setOpenModules(!openModules);
  const toggleActions = () => setOpenActions(!openActions);
  const toggleOthers = () => setOpenOthers(!openOthers);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#F6F6F6',
          paddingTop: '20px',
        },
      }}
    >
      <Box sx={{ px: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          System
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={toggleModules}>
            <ListItemIcon>
              <ModulesIcon />
            </ListItemIcon>
            <ListItemText primary="Modules" />
            {openModules ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openModules} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItem button onClick={toggleActions} sx={{ pl: 4 }}>
                <ListItemText primary="Actions" />
                {openActions ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openActions} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <ListItem button sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <MyActionsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="My Actions" />
                  </ListItem>
                  <ListItem button sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <AllActionsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="All Actions" />
                  </ListItem>
                </List>
              </Collapse>

             
              <ListItem button onClick={toggleOthers} sx={{ pl: 4 }}>
                <ListItemText primary="Others" />
                {openOthers ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openOthers} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <ListItem button sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <ReportsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="All Reports" />
                  </ListItem>
                  <ListItem button sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <UsersIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="User Management" />
                  </ListItem>
                  <ListItem button sx={{ pl: 6 }}>
                    <ListItemIcon>
                      <HelpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Help Manual" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
