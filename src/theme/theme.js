import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0038FF',
    },
    secondary: {
      main: '#7C7C7C',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.9rem',
      color: '#7C7C7C',
    },
  },
});

export default theme;
