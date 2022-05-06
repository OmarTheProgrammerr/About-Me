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
      <div class="content">
        <Image className="Concordia" src={Concordia} alt="Education"></Image>
        <p class="card-body">
          Bechelor's Degree<br></br> Major Software Enginee<br></br> September
          2020 Present
        </p>
        <hr></hr>
        <Image className="school" src={school} alt="Education"></Image>
        <p class="card-body">
          Al-Ameer Hasan International school<br></br> BirZeit, West-bank
          Palestine<br></br> High School diploma<br></br> August 2018 - April
          2020
        </p>
        <hr></hr>

        <Image className="AlManhal" src={AlManhal} alt="Education"></Image>
        <p class="card-body">
          Abu Dhabi, United Arab Emirates<br></br> 2007 - 2018
        </p>
      </div>
    </Card>
  );
};

export default Education;
