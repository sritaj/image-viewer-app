import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";

ReactDOM.render(<Login />, document.getElementById("root"));
registerServiceWorker();
