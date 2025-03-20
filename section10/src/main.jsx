import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // 브라우저 현재 주소 저장, 감지
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
