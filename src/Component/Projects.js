import "./Projects.css";
import React from "react";
import FindOmar from "../imgs/FindOmar.jpg";
import { Card, Image } from "react-bootstrap";

const Projects = () => {
  return (
    <Card className="card text-center" id="Project">
      <h4 className="card-header border-0" style={{ backgroundColor: "white" }}>
        PROJECTS
      </h4>
      <Image className="FindOmar" src={FindOmar} alt="Projects"></Image>
      <div className="card-body">
        <p className="Intern">Fall 2021</p>
      </div>
      <div className="description">
        <ul className="list">
          <li>
            Built a Website where users can share their places with each other
            (with images & locations).
          </li>
          <li>
            Added an option where users can view the locations on GoogleMaps.
          </li>
          <li>
            Completed project with React, Node.js, Express.js, HTML, CSS
            (bootstrap), JavaScript, MongoDB and JQuery.
          </li>
          <li>
            Gave me an overall understanding of backend calls from client-side
            JavaScript, and the concept of Reverse Engineer.
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Projects;
