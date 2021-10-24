import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
      <div>
        <Navbar bg="primary" fixed="top" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home" style={{fontFamily:'Oswald',fontWeight:500, color:'rgb(52, 224, 30)'}}>COVID 19</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className ='nav-link' style={{fontFamily:'Oswald',fontWeight:500}}  to="/india">Home</Link>
        <Link  className='nav-link' to="/world">World</Link>
        <Link  className='nav-link' to="/vaccine">Vaccine</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      </div>
         
    
    )
}

export default Header
