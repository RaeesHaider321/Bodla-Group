import React from "react";
import { Col, Row } from "react-bootstrap";

const PageTitle = ({ title, highlight }) => {
  return (
    <div className="page-title text-center mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1>
            {title} <span className="text-blue-600">{highlight}</span>
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default PageTitle;
