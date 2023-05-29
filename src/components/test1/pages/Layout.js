import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand><Link className="brand fs-2 text-white text-decoration-none justify-content-start" to="/">0xwildcard</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav><Link className="text-decoration-none me-3 nav" to="/">Home</Link></Nav>
              <Nav><Link className="text-decoration-none me-3 nav" to="/blog">Blog</Link></Nav>
              <Nav><Link className="text-decoration-none nav" to="/contact">Contact</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;