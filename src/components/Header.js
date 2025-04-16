import { Container, Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar"data-bs-theme="dark">
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
            <Link to="/Projects">Projects</Link>
            <Link to="/Services">Services</Link>
            {/* <Nav.Link href="/Contact">Contact Us</Nav.Link>
            <NavDropdown title="More" id="more" aria-label="More options">
              <NavDropdown.Item href="/Gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/Blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="/News">News</NavDropdown.Item>
              <NavDropdown.Item href="/Careers">Careers</NavDropdown.Item>
            </NavDropdown> */}
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