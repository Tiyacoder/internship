import React from 'react';
import { Grid, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import EmployeeDetails from './components/EmployeeDetails';
import MedicalOfficerDetails from './components/MedicalOfficerDetails';
import MedicalExamination from './components/MedicalExamination';
import Documents from './components/Documents';
import VitalsGraphs from './components/VitalsGraphs';
import Consultations from './components/Consultations';
import StartExamButton from './components/StartExamButton';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 2, pb: 4 }}>
        <Topbar />

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <EmployeeDetails />

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <MedicalExamination />
                <Box mt={2}>
                  <Documents />
                </Box>
              </Grid>

              <Grid item xs={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <VitalsGraphs />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <MedicalOfficerDetails />
            <Box mt={2}>
              <Consultations />
              <Box mt={2}>
                <StartExamButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
