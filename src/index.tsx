import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextController } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextController>
      <App />
    </UserContextController>
  </React.StrictMode>,
  document.getElementById("root")
);
