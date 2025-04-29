import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically click the toggler to close the menu
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar" data-bs-theme="dark">
      <Container fluid="xxl">
        <Link to="/" className='navbar-brand' onClick={closeNavbar}>
          <img 
            src={logo} 
            alt="Bodla Builders" 
            className="header-logo"
          />
        </Link>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          aria-label="Toggle navigation" 
          className="border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/About" className="px-lg-3" onClick={closeNavbar}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/DHAMultan" className="px-lg-3" onClick={closeNavbar}>DHA Multan</Nav.Link>
            <Nav.Link as={Link} to="/Team" className="px-lg-3" onClick={closeNavbar}>Team</Nav.Link>
            
            {/* Projects Dropdown */}
            <NavDropdown 
              title="Projects" 
              id="projects-dropdown"
              className="dropdown-hover px-lg-3"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item as={Link} to="/Projects/business-hub" onClick={closeNavbar}>Business Hub</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/one-destination" onClick={closeNavbar}>One Destination</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/bodla-homes" onClick={closeNavbar}>Bodla Homes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects/golf-view-rumanza" onClick={closeNavbar}>Golf View Rumanza</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Projects" onClick={closeNavbar}>5 Active Projects</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/Services" className="px-lg-3" onClick={closeNavbar}>Services</Nav.Link>
          </Nav>
          
          <Nav className="ms-lg-3"> 
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