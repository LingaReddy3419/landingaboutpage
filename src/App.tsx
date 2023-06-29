import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/home-page/LandingPage";
import AboutPage from "./components/about-page/AboutPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
