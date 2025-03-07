import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./contexts/TaskContext";
// import "../src/styles/index.css";
import './index.css'; // or './App.css'


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
