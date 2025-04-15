import { Container, Row, Col, Image } from "react-bootstrap";
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
            <Col xs={12} sm={4} md={2} lg={2} className="logo mb-4 mb-md-0" data-aos="fade-up" data-aos-duration="1200">
              <Image src={logo} fluid />
            </Col>
            <Col xs={12} sm={8} md={10} lg={10}>
              <Row xs={12} sm={12} md={12} lg={4}>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1400">
                  <h5>Others</h5>
                  <ul className="list-unstyled">
                    <li><a href="/AreaUnitConvertor">Area Unit Convertor</a></li>
                    <li><a href="/ConstructionCostCalculator">Construction Cost Calculator</a></li>
                    <li><a href="/MediaCentre">Media Centre</a></li>
                    <li><a href="/Careers">Careers</a></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1600">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Team">Our Team</a></li>
                    <li><a href="/Contact">Contact</a></li>
                  </ul>
                </Col>
                <Col className="mb-4" data-aos="fade-up" data-aos-duration="1800">
                  <h5>Services</h5>
                  <ul className="list-unstyled">
                    <li><a href="/constructors">Constructors</a></li>
                    <li><a href="/land-providers">Land Providers</a></li>
                    <li><a href="/developers">Developers</a></li>
                    <li><a href="/plot-traders">Plot Traders</a></li>
                    <li><a href="/marketers">Marketers</a></li>
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
