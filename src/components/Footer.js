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

          <Row className="my-3 my-md-5">
            <Col xs={12} sm={4} md={2} lg={2} className="logo mb-4 mb-md-0" data-aos="fade-up" data-aos-duration="1200">
              <Image src={logo} fluid />
            </Col>
            <Col xs={12} sm={8} md={10} lg={10}>
              <Row xs={12} sm={12} md={12} lg={4}>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1400">
                  <h5>Others</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/AreaUnitConvertor" className="text-light">Area Unit Convertor</a></li>
                    <li className="mb-2"><a href="/ConstructionCostCalculator" className="text-light">Construction Cost Calculator</a></li>
                    <li className="mb-2"><a href="/MediaCentre" className="text-light">Media Centre</a></li>
                    <li className="mb-2"><a href="/Careers" className="text-light">Careers</a></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1600">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/About" className="text-light">About Us</a></li>
                    <li className="mb-2"><a href="/Projects" className="text-light">Projects</a></li>
                    <li className="mb-2"><a href="/Team" className="text-light">Our Team</a></li>
                    <li className="mb-2"><a href="/Contact" className="text-light">Contact</a></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1800">
                  <h5>Services</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/constructors" className="text-light">Constructors</a></li>
                    <li className="mb-2"><a href="/land-providers" className="text-light">Land Providers</a></li>
                    <li className="mb-2"><a href="/developers" className="text-light">Developers</a></li>
                    <li className="mb-2"><a href="/plot-traders" className="text-light">Plot Traders</a></li>
                    <li className="mb-2"><a href="/marketers" className="text-light">Marketers</a></li>
                  </ul>
                </Col>
                <Col md={12} className="mb-4" data-aos="fade-up" data-aos-duration="2000">
                  <h5>Contact</h5>
                  <ul className="list-unstyled contact">
                    <li className="mb-3 d-flex align-items-start">
                      <FaPhone className="mt-1 me-2" size={18} /> 
                      <span>061-1111-26352</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <FaEnvelope className="mt-1 me-2" size={18} /> 
                      <span>info@bodlagroup.com</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <FaHeadphones className="mt-1 me-2" size={18} /> 
                      <span>support@bodlagroup.com</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <FaLocationPinLock className="mt-1 me-2" size={18} />
                      <span>Business Hub, Central Square, Sector K Phase I DHA Multan</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-duration="2200">
            <Col xs={12} sm={12} md={12} lg={8}>
              <SocialMedia />
            </Col>
          </Row>

          <p className="text-center mb-0 pb-3">
            &copy; {new Date().getFullYear()} Bodla Builders. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
