import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "react-hot-toast";

/* Initialize animations */
AOS.init({
  duration: 900,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* ✅ GLOBAL TOAST NOTIFICATIONS */}
    <Toaster position="top-right" reverseOrder={false} />
  </BrowserRouter>
);
