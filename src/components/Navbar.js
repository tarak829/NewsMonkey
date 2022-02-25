// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export class Component_Navbar extends Component {
  // static propTypes = {};

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>NewsMonkey</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href='#action1'>Home</Nav.Link>
              <Nav.Link href='#action2'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Component_Navbar;
