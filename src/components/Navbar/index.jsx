import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {navlist} from "../../utils/list";

function myNavbar() {
  return (
    <Navbar className='_navbar'>
      <Container>
        <Navbar.Brand href="#home">
          <img src='./images/BLAZAREX-logo.svg' alt="" />
        </Navbar.Brand>
        <Nav className="_nav__list">
          {
            navlist.map(({id, title, logo}) => (
              <Nav.Link className='_nav__item' href={`#${id}`} key={id}>
                <img src={logo} alt="" />
                {title}
              </Nav.Link>
            ))
          }
        </Nav>
        <Nav className="_nav__right">
          <button className="_nav__right_btn">
            <span>
              <img src="./images/arrow-down.svg" alt="" />
            </span>
            <span>
              <img src="./images/language.svg" alt=""/>
            </span>
            <span>
              Ru
            </span>
          </button>
          <Nav.Link href="#profile">
            <img src="./images/user-logo.svg" alt="" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default myNavbar;