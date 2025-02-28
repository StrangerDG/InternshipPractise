// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxProvider from "./ReduxProvider";
//import ReduxProvider from "./ReduxProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
