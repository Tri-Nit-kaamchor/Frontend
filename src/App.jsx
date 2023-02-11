import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

import CertificateGen from "./components/CertificateGen/CertificateGen";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
