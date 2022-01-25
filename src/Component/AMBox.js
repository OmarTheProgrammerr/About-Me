import React from "react";
import "./AMBox.css";
import BossOmar from "../imgs/BossOmar.jpg";
import Facebook from "../imgs/Facebook.jpg";
import Email from "../imgs/Email.jpg";
import Instagram from "../imgs/Instagram.jpg";
import LinkedIn from "../imgs/LinkedIn.jpg";
import { Card, Image } from "react-bootstrap";

const AMBox = () => {
  return (
    <Card class="mb-3" id="AMBox">
      <div class="AboutMe">
        <h4
          class="card-header border-0"
          style={{ backgroundColor: "white", paddingBottom: "5px" }}
        >
          ABOUT ME
        </h4>
      </div>
      <Image className="BossOmar" src={BossOmar} alt="Boss Omar"></Image>

      <div class="card-body">
        <p>
          Second-year Software Engineer student at Concordia University with a
          growth mindset looking to acquire real-world software development
          experience. love to dabble in code and anything technology! Feel free
          to ping me below.
        </p>
      </div>
      <div class="myInfo">
        <div class="child">
          <Image className="Email" src={Email} alt="Email Image"></Image>{" "}
          omar.fsm02@gmail.com
        </div>
        <div class="child">
          <a href="https://www.linkedin.com/in/omar-fares-83a95b200/">
            <Image
              className="LinkedIn"
              src={LinkedIn}
              alt="LinkedIn Image"
            ></Image>{" "}
            linkedin.com/in/omarf2
          </a>
        </div>
        <div class="child">
          <a href="https://www.facebook.com/omar.fares.3766952/">
            <Image
              className="Facebook"
              src={Facebook}
              alt="Facebook Image"
            ></Image>{" "}
            facebook.com/omarf02
          </a>
        </div>
        <div class="child">
          <a href="https://www.instagram.com/omar.fsm02/">
            <Image
              className="Instagram"
              src={Instagram}
              alt="Instagram Image"
            ></Image>{" "}
            instagram.com/omar.f2..
          </a>
        </div>
      </div>
    </Card>
  );
};

export default AMBox;
