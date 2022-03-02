import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Component_Navbar = () => {
  return (
    <Navbar bg='dark' sticky="top" variant='dark' expand='lg'>
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
            <Link className='nav-link' to='/business'>
              Business
            </Link>
            <Link className='nav-link' to='/entertainment'>
              Entertainment
            </Link>
            <Link className='nav-link' to='/health'>
              Health
            </Link>
            <Link className='nav-link' to='/science'>
              Science
            </Link>
            <Link className='nav-link' to='/sports'>
              Sports
            </Link>
            <Link className='nav-link' to='/technology'>
              Technology
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Component_Navbar;
