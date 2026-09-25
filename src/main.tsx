import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import PrivacyPage from "./pages/PrivacyPage";
import AboutPage from "./pages/AboutPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/game/:id"   element={<GamePage />} />
        <Route path="/privacy"    element={<PrivacyPage />} />
        <Route path="/about"      element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
