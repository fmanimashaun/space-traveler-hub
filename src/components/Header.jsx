import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from 'assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={LOGO}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}
            Space Travelers&apos; Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#rockkets">Rockets</Nav.Link>
              <Nav.Link href="#missions">Missions</Nav.Link>
              <Nav.Link href="#profile">My Profiles</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
