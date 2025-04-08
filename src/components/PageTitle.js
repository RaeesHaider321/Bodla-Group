import React from "react";
import { Col, Row } from "react-bootstrap";

const PageTitle = ({ title, highlight }) => {
  return (
    <div className="page-title text-center mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={7}>
          <h2>
            {title} <span className="text-blue-600">{highlight}</span>
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default PageTitle;
