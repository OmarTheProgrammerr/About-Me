import "./Experience.css";
import { Card, Image } from "react-bootstrap";
import React from "react";

import GoodFood from "../imgs/GoodFood.jpg";
import Meta from "../imgs/meta-logo.jpg";
import Ubisoft from "../imgs/Ubisoft_logo.svg.jpg";

const Experience = () => {
  return (
    <Card class="card text-center " id="Experience">
      <h4 class="card-header border-0" style={{ backgroundColor: "white" }}>
        EXPERIENCE
      </h4>
      <Image className="Ubisoft" src={Ubisoft} alt="Software Engineer/"></Image>
      <div class="card-body">
        <p class="Intern">Montreal, QC, Canada</p>
        <p class="Intern"> Back-end SWE </p>
        <p class="Intern"> Jan 2023 - Present</p>
      </div>
      <div class="description">
        <ul>
          <li>
            Built password configurations for the profile entities service using
            Amazon secret manager, C# and TypeScript.
          </li>
        </ul>
      </div>
      <hr></hr>
      <Image className="Meta" src={Meta} alt="Software Engineer/"></Image>
      <div class="card-bodsy">
        <p class="Intern">Montreal, QC, Canada</p>
        <p class="Intern"> August 2022 - November 2022</p>
      </div>
      <div class="description">
        <ul>
          <li>
            Attended weekly development program geared towards enhancing
            knowledge of programming fundamentals, engaging with industry
            professionals, and ensuring career readiness.
          </li>
          <li>
            Implemented data structures and algorithms with a focus on
            optimizing time & space complexities on the notification department
            of instagram using Java and Python.
          </li>
        </ul>
      </div>
      <hr></hr>
      <Image className="GoodFood" src={GoodFood} alt="Internship"></Image>
      <div class="card-body">
        <p class="Intern">Montreal, QC, Canada</p>
        <p class="Intern">SWE Intern </p>
        <p class="Intern"> Jan 2022 - April 2022</p>
      </div>
      <div class="description">
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
