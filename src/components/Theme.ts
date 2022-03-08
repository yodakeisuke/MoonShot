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
      main: indigo[50],
      contrastText: indigo[900],
    },
    info: {
      main: indigo[900],
      contrastText: indigo[900]
    },
    text: {
      primary: blue[900],
    },
  },
  typography: {
    button: {
        textTransform: "none"
    }
  },
  // Todo: コンポーネントのstyleに移す
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.3);",
          borderRadius: '50%',
          fontSize: "clamp(21px, 2.5vw, 30px)"
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: "clamp(15px, 2vw, 17px)"
        },
      },
    },
  },
})

export default lighttheme;
