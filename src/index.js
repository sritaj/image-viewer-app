import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Login />, document.getElementById("root"));
registerServiceWorker();
