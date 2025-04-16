import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTitle = ({ title, highlight, caption }) => {
  return (
    <Container data-aos="fade-up" className="page-title text-center">
      <Row className="justify-content-center">
        <Col xs={12} md={7}>
          <h2> {title} <span className="text-blue-600">{highlight}</span></h2>
          <p> {caption}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageTitle;
