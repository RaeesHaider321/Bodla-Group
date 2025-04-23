import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from './Button';

import logo from '../images/footer-logo.png';
export default function UnlockProperty() {
  return (
    <Container className='unlockProperty'>
      <Row className='justify-content-center'>
        <Col xs={12} sm={12} md={11} lg={10} className='card'>
          <Row className='content gy-3'>
            <Col xs={12} md={6}>
              <h3>Join the REAL Estate Conversation.</h3>
              <p>By Sending this Form I conform that I’ve read and accepted the privacy policy.</p>
              <BodlaButton text="Let’s Get Connected! " icon={<Icons name="rightArrow" />} variant="primary" link="/Contact" />
            </Col>
            <Col xs={12} md={6} className='unlock-blue-card'>
              <div className='logo'>
                <Image src={logo} />
              </div>
              <p>By Sending this Form I conform that I’ve read and accepted the privacy policy. By Sending this Form I conform that I’ve read and accepted the privacy policy.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
