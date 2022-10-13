import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CounterContextProvider } from "./components/context/CounterContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Router>
        <App />
      </Router>
    </CounterContextProvider>
  </React.StrictMode>
);
