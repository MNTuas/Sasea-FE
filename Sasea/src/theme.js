import { experimental_extendTheme as extendTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#f48fb1', // Màu xanh lam chủ đạo
          contrastText: '#ffffff', // Văn bản trắng trên màu nền xanh
        },
        secondary: {
          main: '#f50057', // Màu hồng đậm
          contrastText: '#ffffff',
        },
        background: {
          default: 'white', // Màu nền xám nhạt
          paper: '#ffffff', // Màu trắng cho card và container
        },
        text: {
          primary: '#333333', // Văn bản đen xám
          secondary: '#666666', // Văn bản xám nhạt hơn
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9', // Màu xanh nhạt
          contrastText: '#000000', // Văn bản đen trên màu nền xanh nhạt
        },
        secondary: {    
          main: '#f48fb1', // Màu hồng nhạt
          contrastText: '#000000',
        },
        background: {
          default: '#121212', // Màu nền xám đậm
          paper: '#1e1e1e', // Màu đen nhạt hơn cho card và container
        },
        text: {
          primary: '#ffffff', // Văn bản trắng
          secondary: '#bbbbbb', // Văn bản xám nhạt
        },
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(236, 21, 21, 0.2)',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(69, 12, 12, 0.2)',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
              },
            }
          }
        }
      },
    },
  },
});

export default theme;