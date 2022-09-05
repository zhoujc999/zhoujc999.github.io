import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      secondary: "rgba(0, 0, 0, 0.68)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 544,
      md: 768,
      lg: 1012,
      xl: 1280,
    },
  },
});

export default theme;
