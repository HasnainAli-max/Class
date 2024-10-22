import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navebar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-dark ">
      <Container >
        <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex gap-5">
            <Link to="/" className='text-white  text-decoration-none'>DB-From</Link>
            <Link to="/user" className='text-white text-decoration-none'>User</Link>
            <Link to="/formthree" className='text-white text-decoration-none'>Form3</Link>
            <Link to="/formtwo" className='text-white text-decoration-none'>Form2</Link>
          </Nav>
          <Nav>
            <Link to="/signup" className='btn btn-success '>Sign-up</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navebar
