import { createMuiTheme } from "@material-ui/core/styles";

export const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
    fontSize: "1rem",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.7rem",
    },
  },
  palette: {
    primary: {
      main: "#B9181E",
    },
    secondary: {
      main: "#808191",
      light: "#C4C4C4",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});
