import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Component_Navbar extends Component {

  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Link to='/' className='navbar-brand'>
            NewsMonkey
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              <NavDropdown title='Categories' id='nav-dropdown'>
                <Link className='dropdown-item' to='/business'>
                  Business
                </Link>
                <Link className='dropdown-item' to='/entertainment'>
                  Entertainment
                </Link>
                <Link className='dropdown-item' to='/health'>
                  Health
                </Link>
                <Link className='dropdown-item' to='/science'>
                  Science
                </Link>
                <Link className='dropdown-item' to='/sports'>
                  Sports
                </Link>
                <Link className='dropdown-item' to='/technology'>
                  Technology
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Component_Navbar;
