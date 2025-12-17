import { createTheme } from '@mui/material/styles';

// Palette: "The Jazz Lounge" (Claret Remix)
// Primary: Claret - A deep berry tone. Sweet spot between Red and Purple.
// Secondary: Di Serria (Gold) - Retains the brass accent.
// Text: Valhalla (Deep Purple) - Soft "Ink" black.

const theme = createTheme({
  palette: {
    primary: {
      main: '#952b4e', // Claret - Rich, sophisticated, not too red or purple.
      light: '#c95b7a',
      dark: '#630028',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d9a65e', // Di Serria - Brassy Gold.
      light: '#f0d7a6',
      dark: '#c76b4d',
      contrastText: '#2e1a47',
    },
    error: {
      main: '#ef4444',
    },
    background: {
      default: '#faf9f6', // Alabaster
      paper: '#ffffff',
    },
    text: {
      primary: '#2e1a47', // Valhalla (Deep Purple) for main text.
      secondary: '#4b2e5c', // Bossanova (Purple) for subtitles/metadata.
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: [
      'Inter', 
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 700, letterSpacing: '-0.025em', color: '#2e1a47' },
    h2: { fontWeight: 700, letterSpacing: '-0.025em', color: '#2e1a47' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em', color: '#2e1a47' },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#2e1a47', 
    },
    h5: { fontWeight: 600, color: '#2e1a47' },
    h6: { fontWeight: 600, color: '#2e1a47' },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    subtitle1: {
      color: '#4b2e5c',
      lineHeight: 1.6,
    },
    body1: {
      color: '#2e1a47',
    },
  },
  shape: {
    borderRadius: 16, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          padding: '8px 24px',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(149, 43, 78, 0.2)', // Updated shadow to match Claret
          },
        },
        containedPrimary: {
          // Gradient from Claret to Bossanova
          background: 'linear-gradient(135deg, #952b4e 0%, #4b2e5c 100%)',
        },
        containedSecondary: {
          // Gradient from Di Serria (Gold) to Fuzzy Wuzzy (Terracotta)
          background: 'linear-gradient(135deg, #d9a65e 0%, #c76b4d 100%)',
          color: '#2e1a47',
        },
        outlinedPrimary: {
          borderColor: '#952b4e',
          color: '#952b4e',
          '&:hover': {
            backgroundColor: 'rgba(149, 43, 78, 0.04)',
            borderColor: '#630028',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #f3e9e2',
          boxShadow: '0px 2px 8px rgba(46, 26, 71, 0.05)',
        },
        elevation1: {
          boxShadow: '0px 2px 8px rgba(46, 26, 71, 0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
        filledPrimary: {
           backgroundColor: '#fdf2f6', // Very light claret/pink background
           color: '#952b4e',
           '&:hover': {
             backgroundColor: '#f8dbe5',
           }
        },
        outlined: {
          borderColor: '#d9a65e',
          color: '#2e1a47',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#e5dcd3',
            },
            '&:hover fieldset': {
              borderColor: '#d9a65e',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#952b4e',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#2e1a47',
          boxShadow: '0px 1px 0px rgba(0,0,0,0.05)',
        }
      }
    }
  },
});

export default theme;