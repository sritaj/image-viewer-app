import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Home from "./screens/home/Home";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
