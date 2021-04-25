import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route exact path="/home" render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
