import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const heartbeatData = [
  { bpm: 0 }, { bpm: 30 }, { bpm: 10 }, { bpm: 80 }, { bpm: 0 },
  { bpm: 30 }, { bpm: 10 }, { bpm: 90 }, { bpm: 0 }, { bpm: 20 },
  { bpm: 10 }, { bpm: 80 }, { bpm: 0 },
];

const bloodStatusData = [
  { time: '8 AM', systolic: 120, diastolic: 80 },
  { time: '10 AM', systolic: 118, diastolic: 82 },
  { time: '12 PM', systolic: 122, diastolic: 81 },
  { time: '2 PM', systolic: 119, diastolic: 79 },
];

const glucoseData = [
  { time: '8 AM', level: 220 },
  { time: '10 AM', level: 230 },
  { time: '12 PM', level: 240 },
  { time: '2 PM', level: 230 },
  { time: '4 PM', level: 235 },
];

const bloodCountData = [
  { name: 'WBC', count: 80 },
  { name: 'RBC', count: 85 },
  { name: 'Platelets', count: 90 },
];

const VitalsGraphs = () => (
  <Paper
    sx={{
      width: '100%',
      maxWidth: 'none',
      p: 3,
      px: 4,
      borderRadius: 3,
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}
  >
    <Box mb={5}>
      <Box display="flex" alignItems="center" gap={1} mb={1.5}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 2,
            background: 'linear-gradient(to bottom right, #cceeff, #e6f7ff)',
          }}
        />
        <Typography fontSize={16} fontWeight={700}>
          Heartbeat
        </Typography>
        <Typography fontSize={22} fontWeight={800} ml={1}>
          83 <Typography component="span" fontSize={14} fontWeight={500}>bpm</Typography>
        </Typography>
      </Box>
      <Box sx={{ height: 100 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={heartbeatData}>
            <Line
              type="linear"
              dataKey="bpm"
              stroke="#0aa4f4"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>

    <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={6} mb={5}>
      <Box>
        <Typography fontSize={16} fontWeight={700} mb={1.5}>
          Blood status
        </Typography>
        <Box sx={{ height: 100 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bloodStatusData} barCategoryGap={12}>
              <Tooltip />
              <Bar dataKey="systolic" fill="#0aa4f4" barSize={8} radius={[4, 4, 0, 0]} />
              <Bar dataKey="diastolic" fill="#d2f2fc" barSize={8} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Typography fontWeight={700} fontSize={20} mt={-0.5}>
          120/80 <Typography component="span" fontSize={14} color="gray">mmHg</Typography>
        </Typography>
      </Box>

      <Box>
        <Typography fontSize={16} fontWeight={700} mb={1.5}>
          Glucose Level
        </Typography>
        <Box sx={{ height: 100 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={glucoseData}>
              <defs>
                <linearGradient id="glucoseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0aa4f4" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#0aa4f4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="level"
                stroke="#0aa4f4"
                fill="url(#glucoseGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Chip
            label="230/ml"
            size="small"
            sx={{
              backgroundColor: '#e6f7ff',
              color: '#0aa4f4',
              fontWeight: 600,
              fontSize: 12,
            }}
          />
        </Box>
      </Box>
    </Box>

    <Box>
      <Typography fontSize={16} fontWeight={700} mb={1.5}>
        Blood Count
      </Typography>
      <Box sx={{ height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={bloodCountData}>
            <defs>
              <linearGradient id="countGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0aa4f4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0aa4f4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#0aa4f4"
              fill="url(#countGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={-0.5}>
        <Chip
          label="80/90"
          size="small"
          sx={{
            backgroundColor: '#e6f7ff',
            color: '#0aa4f4',
            fontWeight: 600,
            fontSize: 12,
          }}
        />
      </Box>
    </Box>
  </Paper>
);

export default VitalsGraphs;
