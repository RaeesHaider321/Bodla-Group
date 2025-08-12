import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const POPULAR_CALCULATIONS = [
  { 
    label: "3 Marla Basic", 
    areaSize: 3, 
    areaUnit: "marla", 
    constructionQuality: "Basic", 
    materialType: "Grey Structure",
    constructionType: "grey structure",
    constructionMode: "with material",
    numFloors: 1
  },
  { 
    label: "5 Marla Standard", 
    areaSize: 5, 
    areaUnit: "marla", 
    constructionQuality: "Standard", 
    materialType: "Grey Structure",
    constructionType: "grey structure",
    constructionMode: "with material",
    numFloors: 1
  },
  { 
    label: "7 Marla Premium", 
    areaSize: 7, 
    areaUnit: "marla", 
    constructionQuality: "Premium", 
    materialType: "Grey Structure",
    constructionType: "grey structure",
    constructionMode: "with material",
    numFloors: 1
  },
  { 
    label: "10 Marla Furnished", 
    areaSize: 10, 
    areaUnit: "marla", 
    constructionQuality: "Standard", 
    materialType: "Finishing Only",
    constructionType: "furnished",
    constructionMode: "with material",
    numFloors: 1
  },
  { 
    label: "1 Kanal Turnkey", 
    areaSize: 1, 
    areaUnit: "kanal", 
    constructionQuality: "Premium", 
    materialType: "Full Turnkey",
    constructionType: "full turnkey",
    constructionMode: "with material",
    numFloors: 1
  },
];

export default function PopularCalculations({ 
  onPopularCalculation, 
  activePreset,
  isMobile 
}) {
  return (
    < >
      <h3 className="mb-3">Popular Calculations</h3>
          <Row className="g-2">
            {POPULAR_CALCULATIONS.map((calc, index) => (
              <Col key={index} xs={6} md={4}>
                <Card
                  variant={activePreset === calc.label ? "primary" : "outline-primary"}
                  onClick={() => onPopularCalculation(calc)}
                  className="w-100 text-nowrap"
                  size="sm"
                >
                  <Card.Body>{calc.label}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    </>
  );
}