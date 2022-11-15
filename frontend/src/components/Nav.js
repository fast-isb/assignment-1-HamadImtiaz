import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to ='/Homepage'><Navbar.Brand>HAZ<i class="fa-solid fa-bus"></i></Navbar.Brand></Link>
          <Nav className="me-auto">
          <li className="nav-item">
                    <Link className="nav-link" to="/Homepage" activeStyle={{color: "red",textDecoration:"none"}}>Home</Link>
          </li>
          
                    <NavDropdown title="Modules" id="navbarScrollingDropdown">
    
                    <Link to ='/RouteHome'><NavDropdown.Item href='/RouteHome' >Routes</NavDropdown.Item></Link>
                   
                    </NavDropdown>
            
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;