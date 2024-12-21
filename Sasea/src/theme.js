import { experimental_extendTheme as extendTheme } from '@mui/material/styles';


// Create a theme instance.
const theme = extendTheme({
    trello:{
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
            default: '#f5f5f5', // Màu nền xám nhạt
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
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            textTransform:'none'
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({theme}) => {
            return {
              colors: theme.palette.primary.secondary,
              fontSize: '0.875rem',
              '.MuiOutlinedInput-notchedOutline':{
                BorderColor: theme.palette.primary.light
              },
              '&:hover':{
                '.MuiOutlinedInput-notchedOutline':{
                BorderColor: theme.palette.primary.main
              },
              }
            }
          }
        },
      },
    },
  });

export default theme;