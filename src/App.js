import Navbar from './components/Navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
    <Router>
    <MuiThemeProvider theme={THEME}>
    <div className="App">
    <Switch>
          <Route path="/dashboard">
            <Navbar />
          </Route>
        </Switch>
        </div> 
    </MuiThemeProvider>
    </Router>
  );
}

export default App;
