import { createMuiTheme } from '@material-ui/core/styles';

export const THEME = createMuiTheme({
    typography: {
     "fontFamily": `"Inter", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500,
     "fontWeightBold": 600,
    },
    palette: {
      primary: {
        main: '#B9181E'
      },
      secondary: {
        main: '#808191'
      },
      white: {
        main: '#FFFFFF'
      }
    },
  });
  