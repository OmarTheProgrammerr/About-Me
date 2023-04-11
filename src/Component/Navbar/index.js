import React from "react";
// import { FaBars } from "react-icons/fa";
// import { FaHamburger } from "react-icons/fa";
import "../Button2.scss";
import "../Button1.sass";
import "../Sidebar/AppD.js";

import {
  Nav,
  NavbarContainer,
  NavName,
  // MobileIcon,
  // NavMenu,
  // NavItem,
  // NavBtn,
  NavNameBurger,
  //Link,
  NavTwoButtons,
  //NavBtnLink,
  NavLinks,
} from "./NavbarElements";
//import { BrowseRouter as Router } from "react-router-dom";
import AppD from "../Sidebar/AppD";
const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavNameBurger>
          <AppD />
          <NavName to="/">OMAR FARES</NavName>
        </NavNameBurger>
        {/* <NavMenu>
          <NavItem>
            <NavLinks to="About">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Experience">Experience</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Education">Education</NavLinks>
          </NavItem>
        </NavMenu> */}
        <svg id="myClass2" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gooey">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="5"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="highContrastGraphic"
              />
              <feComposite
                in="SourceGraphic"
                in2="highContrastGraphic"
                operator="atop"
              />
            </filter>
          </defs>
        </svg>

        <NavTwoButtons>
          <NavLinks to="/">
            <svg id="myClass2" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="gooey">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="5"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="highContrastGraphic"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="highContrastGraphic"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>

            <button id="gooey-button">
              <text x="147" y="227" fill="#000">
                Resume
              </text>
              <span class="bubbles">
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
              </span>
            </button>
          </NavLinks>

          <NavLinks to="Memory">
            <svg
              class="myClass1"
              viewBox="45 60 400 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                mask="url(#knockout-text)"
              ></path>
              <mask id="knockout-text">
                <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                <text x="147" y="227" fill="#000">
                  Memory
                </text>
              </mask>
            </svg>
          </NavLinks>
        </NavTwoButtons>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
