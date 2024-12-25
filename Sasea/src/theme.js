import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '48px';
const BOARD_BAR_HEIGHT = '50px';
const BOARDCONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARDCONTENT_HEIGHT,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6200ea', // A deep purple for primary actions
          contrastText: '#ffffff', // White text for contrast
        },
        secondary: {
          main: '#03dac6', // A soft teal for secondary actions
          contrastText: '#000000', // Black text for contrast
        },
        background: {
          default: '#fafafa', // A very light gray background for a soft, clean look
          paper: '#ffffff', // White paper background
        },
        text: {
          primary: '#212121', // Dark gray text for better readability
          secondary: '#757575', // Lighter gray for secondary text
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#bb86fc', // Soft purple for primary actions
          contrastText: '#000000', // Black text for contrast in dark mode
        },
        secondary: {
          main: '#03dac6', // Same soft teal for consistency
          contrastText: '#000000', // Black text for secondary buttons
        },
        background: {
          default: '#121212', // Very dark background for dark mode
          paper: '#1e1e1e', // Slightly lighter paper background for contrast
        },
        text: {
          primary: '#ffffff', // White text for primary text on dark backgrounds
          secondary: '#bbbbbb', // Light gray text for secondary text
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bb86fc',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#6200ea',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
        }),
      },
    },
  },
});

export default theme;