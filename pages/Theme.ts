import { createTheme } from '@mui/material/styles';
import { indigo,  yellow, blue } from '@mui/material/colors';

const lighttheme = createTheme({
  palette: {
    background: {
      default: "#F5F5F5",
      paper: indigo[50],
    },
    primary: {
      main: yellow[600],
      contrastText: indigo[900]
    },
    secondary: {
      main: indigo[900],
      contrastText: indigo[900],
    },
    text: {
      primary: blue[900],
    },
  },
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.3);",
          borderRadius: '50%',
          fontSize: "1.3rem",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: "0.8rem",
        },
      },
    },
  },
})

export default lighttheme;
