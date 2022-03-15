import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CoreContextProvider from "./context";

ReactDOM.render(
  <CoreContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CoreContextProvider>,
  document.getElementById("root")
);
