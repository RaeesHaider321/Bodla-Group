import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const popularCalculations = [
  {
    title: "3 Marla Constructing Cost",
    subtext: "Double Story",
    size: "1,215  sq. ft.",
  },
  {
    title: "4 Marla Constructing Cost",
    subtext: "Double Story",
    size: "1,215  sq. ft.",
  },
  {
    title: "5 Marla Constructing Cost",
    subtext: "Double Story",
    size: "1,215  sq. ft.",
  },
  {
    title: "10 Marla Construction Cost",
    subtext: "Double Story",
    size: "1,215  sq. ft.",
  },
];

const PopularCalculations = () => {
  return (
    <div className="mb-5">
      <h2 className="mb-4">Popular Calculations</h2>
      <Row md={4}>
        {popularCalculations.map((calc, index) => (
          <Col key={index}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{calc.title}</Card.Title>
                <Card.Text>{calc.subtext}</Card.Text>
                <p>{calc.size}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularCalculations;
