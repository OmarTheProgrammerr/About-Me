import "./AppD.css";
import { FaHamburger as MenuBar } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { SiOctopusdeploy as Octopus } from "react-icons/si";
import { GiSpiralArrow as Arrow } from "react-icons/gi";
import { GiCaptainHatProfile as MAM } from "react-icons/gi";
import { IoIosArrowRoundBack as Back } from "react-icons/io";
import { NavName } from "../NavbarElements.js";

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

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          open &&
          !event.target.closest(".dropdown") &&
          !event.target.closest(".icon-button")
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
      <div className="nav-item">
        <button className="icon-button" onClick={() => setOpen(!open)}>
          <MenuBar size={24} />
        </button>
        <div className={`menu-overlay ${open ? "active" : ""}`} />
        {open && props.children}
      </div>
    );
  };

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, [activeMenu]);

    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    function DropdownItem(props) {
      return (
        <a
          href="#HeyThere"
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button-inside">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }

    return (
      <div
        className={`dropdown ${activeMenu ? "active" : ""}`}
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
            <DropdownItem leftIcon={<Octopus />}>Memory</DropdownItem>
            <DropdownItem leftIcon={<Arrow />}>Resume</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  return (
    <div className="overlay">
      <Navbar>
        <NavItem>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default AppD;
