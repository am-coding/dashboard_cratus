import Navbar from './components/Navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Inter", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
   "fontWeightBold": 600,
  }
});


function App() {
  return (
    <MuiThemeProvider theme={THEME}>
    <div className="App">
     <Navbar />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
