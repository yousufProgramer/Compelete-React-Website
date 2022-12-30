import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Navbar.css'
function NavBar() {
  return (
    <Navbar className='mainNav' variant = 'dark'  expand="lg">
      <Container>
        <Navbar.Brand  as  = {Link} to = {'./'} className='header'>Developer <span>.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nabBar">
            <Nav.Link className='navLink' as = {Link} to = {'/'}>Home</Nav.Link>
            <Nav.Link className='navLink'  as = {Link} to = {'/about'}>About</Nav.Link>
            <Nav.Link className='navLink'  as = {Link} to = {'/services'}>Services</Nav.Link>
            <Nav.Link className='navLink'  as = {Link} to = {'/blog'}>Blog</Nav.Link>
            <Nav.Link className='navLink'  as = {Link} to = {'/team'}>Team</Nav.Link>
            <Nav.Link className='navLink'  as = {Link} to = {'/contact'}>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;