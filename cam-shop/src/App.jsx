import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import CamHome from "./components/CamHome";
import CamAbout from "./components/CamAbout";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CamHome />} />
        <Route path="/about" element={<CamAbout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;