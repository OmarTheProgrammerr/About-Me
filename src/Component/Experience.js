import "./Experience.css";
import { Card, Image } from "react-bootstrap";
import React from "react";
import GoodFood from "../imgs/GoodFood.jpg";
import Meta from "../imgs/meta-logo.jpg";
import Ubisoft from "../imgs/Ubisoft_logo.svg.jpg";
import Stealth from "../imgs/Stealth.jpeg";
//import LinkedIn2 from "../imgs/LinkedIn2.svg.png";
import LinkedIn3 from "../imgs/LinkedIn3.webp";

const Experience = () => {
  return (
    <Card className="card text-center " id="Experience">
      <h4 className="card-header border-0" style={{ backgroundColor: "white" }}>
        EXPERIENCE
      </h4>
      <Image
        className="LinkedIn3"
        src={LinkedIn3}
        alt="Software Engineer/"
      ></Image>
      <div className="card-body">
        <p className="Intern">Sunnyvale, California, USA</p>
        <p className="Intern"> Incoming Software Engineer Intern </p>
        <p className="Intern"> June 17th </p>
      </div>
      <div className="description">
        <ul>
          <li>Incoming Back-End SWE Intern at LinkedIn, Summer 2024!</li>
        </ul>
      </div>
      <hr></hr>
      <Image className="Stealth" src={Stealth} alt="Software Engineer/"></Image>
      <div className="card-body">
        <p className="Intern">Montreal, QC, Canada</p>
        <p className="Intern"> Co-Founder </p>
        <p className="Intern"> August 2023 - present</p>
      </div>
      <div className="description">
        <ul>
          <li>
            Building VisionGuard, a mission to help retail stores maintain their
            products!{" "}
          </li>
        </ul>
      </div>
      <hr></hr>
      <Image className="Ubisoft" src={Ubisoft} alt="Software Engineer/"></Image>
      <div className="card-body">
        <p className="Intern">Montreal, QC, Canada</p>
        <p className="Intern"> Back-End SWE </p>
        <p className="Intern"> Jan 2023 - April 2023</p>
      </div>
      <div className="description">
        <ul>
          <li>
            Built password configurations for S2S certificates in entities and
            gateway microservices using AWS, C#, and TS.
          </li>
          <li>
            Leveraged AWS CDK to develop an automated deployment system for
            making changes to the infrastructure.
          </li>
          <li>
            Implemented CI/CD pipelines, resulting in a 60% reduction in
            deployment time and enabling faster and more reliable releases.
          </li>
        </ul>
      </div>
      <hr></hr>
      <Image className="Meta" src={Meta} alt="Software Engineer/"></Image>
      <div className="card-body">
        <p className="Intern">NYC, USA</p>
        <p className="Intern"> August 2022 - November 2022</p>
      </div>
      <div className="description">
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
      <div className="card-body">
        <p className="Intern">Montreal, QC, Canada</p>
        <p className="Intern">SWE Intern </p>
        <p className="Intern"> Jan 2022 - April 2022</p>
      </div>
      <div className="description">
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
