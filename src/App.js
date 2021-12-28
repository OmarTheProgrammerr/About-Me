import "./App.css";
import React from "react";
import HeaderBox from "./Component/HeaderBox";
import AMBox from "./Component/AMBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Projects from "./Component/Projects";
import BossOmar from "./imgs/BossOmar.jpg";
// import { Card } from "react-bootstrap";

const App = () => {
  return (
    <main>
      <HeaderBox></HeaderBox>
      <AMBox></AMBox>
      <Experience></Experience>
      <Projects></Projects>
      <Education></Education>
    </main>
  );
};

export default App;
