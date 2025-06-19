import React from 'react'; 
import { Paper, Typography, Box, Chip } from '@mui/material';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from 'recharts';

const heartbeatData = [
  { bpm: 0 }, { bpm: 30 }, { bpm: 10 }, { bpm: 80 }, { bpm: 0 },
  { bpm: 30 }, { bpm: 10 }, { bpm: 90 }, { bpm: 0 }, { bpm: 20 },
  { bpm: 10 }, { bpm: 80 }, { bpm: 0 },
];

const glucoseData = [
  { time: '8 AM', level: 220 },
  { time: '10 AM', level: 230 },
  { time: '12 PM', level: 240 },
  { time: '2 PM', level: 230 },
  { time: '4 PM', level: 235 },
];

const VitalsGraphs = () => (
  <Paper
    sx={{
      width: '100%',
      p: 3,
      px: 6,
      borderRadius: 3,
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}
  >
    <Box mb={4}>
      <Box display="flex" alignItems="center" gap={1} mb={0.5}>
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
          83 <Box component="span" fontSize={14} fontWeight={500} display="inline">bpm</Box>
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

    <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={10} mb={4}>
      <Box>
        <Typography fontSize={16} fontWeight={700} mb={0.5}>
          Blood status
        </Typography>

        <Box
          sx={{
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#f9f9f9',
            borderRadius: 2,
            px: 2,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 4,
                height: i === 10 ? 80 : i === 11 ? 60 : 50,
                backgroundColor: i === 10 || i === 11 ? '#0aa4f4' : '#d3d3d3',
                borderRadius: 1,
              }}
            />
          ))}
        </Box>

        <Typography fontWeight={700} fontSize={20} mt={0.8}>
          120/80 <Box component="span" fontSize={14} color="gray" display="inline">mmHg</Box>
        </Typography>
      </Box>

      <Box>
        <Typography fontSize={16} fontWeight={700} mb={0.5}>
          Glucose Level
        </Typography>
        <Typography fontSize={22} fontWeight={800} mb={0.2}>
          230/<Box component="span" fontSize={14} fontWeight={500} display="inline">ml</Box>
        </Typography>
        <Box sx={{ height: 100, position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={glucoseData}>
              <defs>
                <linearGradient id="sharpArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0aa4f4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0aa4f4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Area
                type="linear"
                dataKey="level"
                stroke="#0aa4f4"
                fill="url(#sharpArea)"
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>

          <Box
            sx={{
              position: 'absolute',
              right: 6,
              top: 12,
              backgroundColor: '#0aa4f4',
              color: '#fff',
              fontSize: 12,
              fontWeight: 600,
              px: 1.5,
              py: 0.2,
              borderRadius: 10,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            230/ml
          </Box>
        </Box>
      </Box>
    </Box>

    <Box>
      <Typography fontSize={16} fontWeight={700} mb={0.5}>
        Blood Count
      </Typography>
      <Box sx={{ height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={[
              { name: 'WBC', count: 70 },
              { name: 'WBC', count: 80 },
              { name: 'WBC', count: 75 },
              { name: 'RBC', count: 85 },
              { name: 'RBC', count: 90 },
              { name: 'RBC', count: 88 },
              { name: 'Platelets', count: 92 },
              { name: 'Platelets', count: 95 },
              { name: 'Platelets', count: 90 },
            ]}
          >
            <defs>
              <linearGradient id="glucoseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0aa4f4" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#0aa4f4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Area
              type="natural"
              dataKey="count"
              stroke="#0aa4f4"
              fill="url(#glucoseGradient)"
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
