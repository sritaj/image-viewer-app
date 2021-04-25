import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import ImageViewer from "./ImageViewer";
import { BrowserRouter as Router } from "react-router-dom";

//ReactDOM.render(<Login />, document.getElementById("root"));

ReactDOM.render(
  <Router>
    <ImageViewer />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
