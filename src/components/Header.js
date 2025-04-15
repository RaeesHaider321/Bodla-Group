import { Container, Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
import logo from '../images/header-logo.png';
import Icons from "../components/Icon"; 
import BodlaButton from './Button';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar"data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Bodla Builders Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/DHAMultan">DHA Multan</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
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