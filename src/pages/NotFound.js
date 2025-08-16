import React from 'react';
import Button from '../components/Button';
import Icons from "../components/Icon"; 
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
  return (
    <section>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col className="not-found">
            <h1>Comming Soon</h1>
            <p>We're working hard to bring you something amazing.</p>
            {/* <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p> */}
            <Button variant="light" to="/Contact" icon={<Icons name="rightArrow" />}> <i>Contact Us</i></Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;