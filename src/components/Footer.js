import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SocialMedia from './SocialMedia';
import UnlockProperty from './UnlockProperty';
import logo from '../images/footer-logo.png';
import Icon from "../components/Icon";

function Footer() {
  return (
    <footer className="text-white">
      <div className="overlay">
        <Container>
          <div data-aos="fade-up">
            <UnlockProperty />
          </div>

          <Row className="my-3 my-md-5">
            <Col xs={12} sm={4} md={1} lg={2} className="logo mb-4 mb-md-0" data-aos="fade-up" data-aos-duration="1200">
            <Link to="/"><Image src={logo} fluid /></Link>
            </Col>
            <Col xs={12} sm={8} md={11} lg={10}>
              <Row xs={12} sm={12} md={12} lg={4}>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1400">
                  <h5>Others</h5>
                  <ul className="list-unstyled">
                    <li><Link to="/AreaUnitConverter">Area Unit Convertor</Link></li>
                    <li><Link to="/ConstructionCostCalculator">Construction Cost Calculator</Link></li>
                    <li><Link to="/MediaCenter">Media Center</Link></li>
                    <li><Link to="/Careers">Careers</Link></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1600">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Team">Our Team</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Terms">Terms & Conditions</Link></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1800">
                  <h5>Services</h5>
                  <ul className="list-unstyled">
                    <li><Link to="/services/construction">Constructors</Link></li>
                    <li><Link to="/services/land-acquisition">Land Providers</Link></li>
                    <li><Link to="/services/development">Development</Link></li>
                    <li><Link to="/services/plots-trading">Plot Traders</Link></li>
                    <li><Link to="/services/project-marketing">Marketers</Link></li>
                  </ul>
                </Col>
                <Col md={12} className="mb-4" data-aos="fade-up" data-aos-duration="2000">
                  <h5>Contact</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Icon name="phone" />
                      061-1111-26352
                    </li>
                    <li>
                      <Icon name="envelope" />
                      info@bodlagroup.com
                    </li>
                    <li>
                      <Icon name="support" />
                      support@bodlagroup.com
                    </li>
                    <li>
                      <Icon name="location" />
                      Business Hub, Central Square, Sector K Phase I DHA Multan
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mb-3" data-aos="fade-up" data-aos-duration="2200">
            <Col xs={12} sm={12} md={12} lg={8}>
              <SocialMedia />
            </Col>
          </Row>

          <p className="text-center mb-0 pb-3">
            &copy; {new Date().getFullYear()} Bodla Group. All Rights Reserved. <Link className="privacyPolicy" to="/PrivacyPolicy">Privacy Policy</Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;