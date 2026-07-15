import React from "react";
import ReactDOM from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </React.StrictMode>
);