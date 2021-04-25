import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./History";

//ReactDOM.render(<Login />, document.getElementById("root"));

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
