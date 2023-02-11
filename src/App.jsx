import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import CertificateGen from "./components/CertificateGen/CertificateGen";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Home />} />
          <Route path="/certificate" exact element={<CertificateGen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
