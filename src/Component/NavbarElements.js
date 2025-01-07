import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";
// import ReactDOM from "react-dom";
// import React from "react";
// import PropTypes from "prop-types";

export const Nav = styled.nav`
  // background-image: linear-gradient(to right, rgb(93, 238, 93), #61ca37);
  height: 80px;
  background-color: white;
  margin-top: -80px;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0px;
  color: black;
  padding: 18px 24px;
  // width: fit-content;
  box-shadow: 0 6px 9px rgb(0 0 0 / 0.2);
  @media screen and (max-width: 960 px) {
    transition: 0.8s all escape;
  }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding:0 24px
max-width: 1100px

`;
export const NavName = styled(LinkR)`
  justify-self: flex-start;
  position: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 90px;
  display: flex;
  align-items: center;
  font-weight: 500;
  width: 350px;
  color: inherit;
  text-decoration: none;
  @media screen and (max-width: 960px) {
    margin-left: 10px;
    width: 250px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: rgb(11 200 0 / 1);
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 16%;
    left: 10px;
    transform: tranlate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavTwoButtons = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavNameBurger = styled.ul`
margin-right= 20px;
margin-top: 15px;
display: flex;
width: inherit;
align-items: center;
list-style: none;
text-align: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  margin-top: 15px;
  @media screen and (max-width: 1040px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 941px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
  padding: 0 1rem;
  margin-right: 20px;
  height: 100%;
  cursor: Pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  @media screen and (max-width: 960px) {
    margin-right: 4px;
  }
`;

export const Link = styled(LinkS)``;

export const NavBtn = styled.nav``;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: point;
  transition: all0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: black;
  }
`;
