import "./Experience.css";
import { Card, Image } from "react-bootstrap";
import React from "react";

import GoodFood from "../imgs/GoodFood.jpg";

const Experience = () => {
  return (
    <Card class="card text-center ">
      <h4 class="card-header border-0" style={{ backgroundColor: "white" }}>
        EXPERIENCE
      </h4>

      <Image className="GoodFood" src={GoodFood} alt="Internship"></Image>
      <div class="card-body">
        <p class="Intern">Montreal, QC, Canada</p>
        <p class="Intern">SWE Intern </p>
        <p class="Intern"> Jan 2022 - April 2022</p>
      </div>
    </Card>
  );
};

export default Experience;
