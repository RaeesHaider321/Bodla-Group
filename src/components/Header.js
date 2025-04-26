import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar" data-bs-theme="dark">
      <Container fluid="xxl"> {/* Changed to fluid="xxl" for better width control */}
        <Link to="/" className='navbar-brand'>
          <img 
            src={logo} 
            alt="Bodla Builders" 
            className="header-logo" // Changed to class for better responsive control
          />
        </Link>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          aria-label="Toggle navigation" 
          className="border-0" // Remove border from toggle
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center"> {/* Added align-items for vertical centering */}
            <Nav.Link as={Link} to="/About" className="px-lg-3">About Us</Nav.Link>
            <Nav.Link as={Link} to="/DHAMultan" className="px-lg-3">DHA Multan</Nav.Link>
            <Nav.Link as={Link} to="/Team" className="px-lg-3">Team</Nav.Link>
            
            {/* Projects Dropdown */}
            <NavDropdown 
              title="Projects" 
              id="projects-dropdown"
              className="dropdown-hover px-lg-3"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item as={Link} to="/Projects/business-hub">Business Hub</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/one-destination">One Destination</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/bodla-homes">Bodla Homes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/golf-view-rumanza">Golf View Rumanza</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects">5 Active Projects</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/Services" className="px-lg-3">Services</Nav.Link>
          </Nav>
          
          <Nav className="ms-lg-3"> 
            <BodlaButton
              text="Contact Us"
              icon={<Icons name="rightArrow" />}
              variant="primary"
              link="/Contact"
              className="my-2 my-lg-0" 
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;