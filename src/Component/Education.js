import "./Education.css";
import { Card, Image } from "react-bootstrap";
import React from "react";

import Concordia from "../imgs/Concordia.jpg";
import AlManhal from "../imgs/AlManhal.jpg";
import school from "../imgs/School.jpg";

const Education = () => {
  return (
    <Card class="card text-center" id="Education">
      <h4 class="card-header border-0" style={{ backgroundColor: "white" }}>
        EDUCATION
      </h4>
      <Image className="Concordia" src={Concordia} alt="Education"></Image>
      <div class="card-body">
        <p class="Education">Bechelor's Degree</p>
        <p class="Education">Major Software Engineer</p>
        <p class="Education"> September 2020 Present</p>
        <hr></hr>
      </div>
      <Image className="school" src={school} alt="Education"></Image>
      <div class="card-body">
        <p class="Education">Al-Ameer Hasan International school</p>
        <p class="Education">BirZeit, West-bank Palestine </p>
        <p class="Education"> High School diploma</p>
        <p class="Education">August 2018 - April 2020</p>
        <hr></hr>
      </div>
      <Image className="AlManhal" src={AlManhal} alt="Education"></Image>
      <div class="card-body">
        <p class="Education">Abu Dhabi, United Arab Emirates </p>
        <p class="Education">2007 - 2018</p>
      </div>
    </Card>
  );
};

export default Education;
