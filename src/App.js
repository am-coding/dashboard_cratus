import Navbar from "./components/organisms/Navbar";
import Analytics from "./components/templates/Analytics";
import Customers from "./components/templates/Customers";
import Billing from "./components/templates/Billing";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import { THEME } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={THEME}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard">
              <Analytics />
            </Route>
            <Route exact path="/customers">
              <Customers />
            </Route>
            <Route exact path="/billing">
              <Billing />
            </Route>
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
