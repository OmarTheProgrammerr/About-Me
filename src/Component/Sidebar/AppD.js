import "./AppD.css";
import { FaHamburger as MenuBar } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { SiOctopusdeploy as Octopus } from "react-icons/si";
import { GiSpiralArrow as Arrow } from "react-icons/gi";
import { GiCaptainHatProfile as MAM } from "react-icons/gi";
import { IoIosArrowRoundBack as Back } from "react-icons/io";

function AppD() {
  const Navbar = (props) => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  };
  const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    console.log("somthing happened!");

    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
          <MenuBar />
        </a>

        {open && props.children}
      </li>
    );
  };

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30);
    }, []);

    function calcHeight(el) {
      const height = el.offsetHeight + 30;
      setMenuHeight(height);
    }
    function DropdownItem(props) {
      return (
        <a
          href="#"
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }

    return (
      <div
        className="dropdown"
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem leftIcon={<MAM />} goToMenu="Memory">
              More About Me?
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Memory"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<Back />}>
              Back
            </DropdownItem>
            <DropdownItem goToMenu="Memory" leftIcon={<Octopus />}>
              Memory
            </DropdownItem>
            <DropdownItem goToMenu="Memory" leftIcon={<Arrow />}>
              Resume
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  return (
    <body>
      <div className="overlay">
        <Navbar>
          <NavItem>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
      </div>
    </body>
  );
}

export default AppD;