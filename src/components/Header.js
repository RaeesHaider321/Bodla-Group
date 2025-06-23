import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import '../styles/Header.css';

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
        <NavLink to="/" className='navbar-brand'>
          <img 
            src={logo} 
            alt="Bodla Builders" 
            className="header-logo"
          />
        </NavLink>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          aria-label="Toggle navigation" 
          className="border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              as={NavLink} 
              to="/About" 
              className="px-lg-3" 
              onClick={closeNavbar}
              activeClassName="active" // This will add 'active' class when active
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/DHAMultan" 
              className="px-lg-3" 
              onClick={closeNavbar}
              activeClassName="active"
            >
              DHA Multan
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/Team" 
              className="px-lg-3" 
              onClick={closeNavbar}
              activeClassName="active"
            >
              Team
            </Nav.Link>
            
            {/* Projects Dropdown */}
            <NavDropdown 
              title="Projects" 
              id="projects-dropdown"
              className="dropdown-hover px-lg-3"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item as={NavLink} to="/Projects/business-hub" onClick={closeNavbar} activeClassName="active">Business Hub</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Projects/one-destination" onClick={closeNavbar} activeClassName="active">One Destination</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Projects/bodla-homes" onClick={closeNavbar} activeClassName="active">Bodla Homes</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Projects/golf-view-rumanza" onClick={closeNavbar} activeClassName="active">Golf View Rumanza</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Projects" onClick={closeNavbar} activeClassName="active">Projects</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link 
              as={NavLink} 
              to="/Services" 
              className="px-lg-3" 
              onClick={closeNavbar}
              activeClassName="active"
            >
              Services
            </Nav.Link>
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