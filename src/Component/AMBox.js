import React from "react";
import "./AMBox.css";
import OmarF from "../imgs/OmarF.jpg";
import { Card, Image } from "react-bootstrap";
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { SiGmail, SiIconfinder } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

const AMBox = () => {
  return (
    <Card className="mb-3" id="AMBox">
      <div className="AboutMe">
        <h4
          className="card-header border-0"
          style={{ backgroundColor: "white", paddingBottom: "5px" }}
        >
          ABOUT ME
        </h4>
      </div>
      <Image className="BossOmar" src={OmarF} alt="Boss Omar"></Image>

      <div className="card-body">
        <p>
          As a third-year software engineering student at Concordia University,
          I am constantly seeking new opportunities to apply my skills and gain
          practical experience in the field. I am passionate about technology
          and enjoy experimenting with different programming languages and
          frameworks. I am a proactive learner with a strong desire to
          constantly improve and grow my abilities. If you have any
          opportunities that could benefit from my skills and enthusiasm, please
          don't hesitate to reach out to me.
        </p>
      </div>
      <p className="ola">Blog, coming up soon!</p>
      <div className="myInfo">
        <Link to="/blog">
          <SiIconfinder size={30} />
        </Link>
      </div>
      <div className="myInfo">
        <div className="child">
          <a
            href="mailto:omar.fsm02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="invisible-link"
          >
            <SiGmail size={30} color="green" />
          </a>
        </div>
        <div className="child">
          <a
            href="https://www.linkedin.com/in/omar-fares-83a95b200/"
            target="_blank"
            rel="noopener noreferrer"
            className="invisible-link"
          >
            <FiLinkedin size={30} color="green" />
          </a>
        </div>
        <div className="child">
          <a
            href="https://twitter.com/omar_fsm02"
            target="_blank"
            rel="noopener noreferrer"
            className="invisible-link"
          >
            <SlSocialTwitter size={30} color="green" />
          </a>
        </div>
        <div className="child">
          <a
            href="https://www.instagram.com/omar.fsm02/"
            target="_blank"
            rel="noopener noreferrer"
            className="invisible-link"
          >
            <FaInstagram size={30} color="green" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default AMBox;
