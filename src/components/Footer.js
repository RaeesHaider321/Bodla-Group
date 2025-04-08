import { Container, Row, Col, Image } from "react-bootstrap";
import SocialMedia from './SocialMedia';
import UnlockProperty from './UnlockProperty';
import logo from '../images/footer-logo.png';
import { FaEnvelope, FaPhone, FaHeadphones } from 'react-icons/fa';
import { FaLocationPinLock } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-white">
      <div className="overlay">
        <Container>
          <div data-aos="fade-up">
            <UnlockProperty />
          </div>

          <Row className="my-5">
            <Col md={2} className="logo" data-aos="fade-up" data-aos-duration="1200">
              <Image src={logo} />
            </Col>
            <Col md={10}>
              <Row>
                <Col md={3} data-aos="fade-up" data-aos-duration="1400">
                  <h5>Others</h5>
                  <ul className="list-unstyled">
                    <li><a href="/AreaUnitConvertor" className="text-light">Area Unit Convertor</a></li>
                    <li><a href="/ConstructionCostCalculator" className="text-light">Construction Cost Calculator</a></li>
                    <li><a href="/MediaCentre" className="text-light">Media Centre</a></li>
                    <li><a href="/Careers" className="text-light">Careers</a></li>
                  </ul>
                </Col>
                <Col md={3} data-aos="fade-up" data-aos-duration="1600">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><a href="/About" className="text-light">About Us</a></li>
                    <li><a href="/Projects" className="text-light">Projects</a></li>
                    <li><a href="/Team" className="text-light">Our Team</a></li>
                    <li><a href="/Contact" className="text-light">Contact</a></li>
                  </ul>
                </Col>
                <Col md={3} data-aos="fade-up" data-aos-duration="1800">
                  <h5>Services</h5>
                  <ul className="list-unstyled">
                    <li><a href="/constructors" className="text-light">Constructors</a></li>
                    <li><a href="/land-providers" className="text-light">Land Providers</a></li>
                    <li><a href="/developers" className="text-light">Developers</a></li>
                    <li><a href="/plot-traders" className="text-light">Plot Traders</a></li>
                    <li><a href="/marketers" className="text-light">Marketers</a></li>
                  </ul>
                </Col>
                <Col md={3} data-aos="fade-up" data-aos-duration="2000">
                  <h5>Contact</h5>
                  <ul className="list-unstyled conract">
                    <li>
                      <FaPhone size={30} /> 061-1111-26352
                    </li>
                    <li>
                      <FaEnvelope size={30} /> info@bodlagroup.com
                    </li>
                    <li>
                      <FaHeadphones size={30} /> support@bodlagroup.com
                    </li>
                    <li>
                      <span><FaLocationPinLock size={30} /></span>
                      <span>Business Hub, Central Square, Sector K Phase I DHA Multan</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="2200">
            <Col md={8}>
              <SocialMedia />
            </Col>
          </Row>

          <p className="text-center">
            &copy; {new Date().getFullYear()} Bodla Builders. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
