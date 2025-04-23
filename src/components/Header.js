import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this file for the hover styles

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar" data-bs-theme="dark">
      <Container>
        <Link to="/" className='navbar-brand'>
          <img src={logo} alt="Bodla Builders" className="h-10" />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/About">About Us</Link>
            <Link to="/DHAMultan">DHA Multan</Link>
            <Link to="/Team">Team</Link>
            
            {/* Projects Dropdown with hover functionality */}
            <NavDropdown 
              title="Projects" 
              id="projects-dropdown"
              className="dropdown-hover"
              renderMenuOnMount={true} // Ensures smooth hover transition
            >
              <NavDropdown.Item as={Link} to="/Projects/business-hub">Business Hub</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/one-destination">One Destination</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/bodla-homes">Bodla Homes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/golf-view-rumanza">Golf View Rumanza</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects">5 Active Projects</NavDropdown.Item>
            </NavDropdown>
            
            <Link to="/Services">Services</Link>
          </Nav>
          <Nav>
            <BodlaButton
              text="Contact Us"
              icon={<Icons name="rightArrow" />}
              variant="primary"
              link="/Contact"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;