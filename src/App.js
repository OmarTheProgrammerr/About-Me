import "./App.css";

import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import HeaderBox from "./Component/HeaderBox";
import AMBox from "./Component/AMBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Projects from "./Component/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BossOmar from "./imgs/BossOmar.jpg";
import Memory from "./Component/Memory/Memory";
import About from "./About";
// import { Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/memory" element={<Memory />} />
        <Route
          path="/"
          element={
            <>
              <AMBox />
              <Experience />
              <Projects />
              <Education />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
{
}
export default App;
