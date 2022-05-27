import "./Experience.css";
import { Card, Image } from "react-bootstrap";
import React from "react";

import GoodFood from "../imgs/GoodFood.jpg";

const Experience = () => {
  return (
    <Card class="card text-center " id="Experience">
      <h4 class="card-header border-0" style={{ backgroundColor: "white" }}>
        EXPERIENCE
      </h4>

      <Image className="GoodFood" src={GoodFood} alt="Internship"></Image>
      <div class="card-body">
        <p class="Intern">Montreal, QC, Canada</p>
        <p class="Intern">SWE Intern </p>
        <p class="Intern"> Jan 2022 - April 2022</p>
      </div>
      <div class="Done">
        <ul>
          <li>
            Built a web app for both the Automation and Maintenance departments
            to submit work orders
          </li>
          <li>
            Developed a system to collect the automation data and calculate the
            performance and OEE using JavaScript
          </li>
          <li>
            Wrote scripts that allowed the employees to follow all the NCRs from
            the deliveries
          </li>
          <li>
            Improved performance of the old scripts which reduced the running
            time by 65%
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Experience;
