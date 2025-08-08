import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function StartCalculation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "Multan",
    areaUnit: "marla",
    areaSize: "",
    coveredArea: "",
    constructionType: "grey structure",
    constructionMode: "with material"
  });
  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStart = () => {
    // Validation
    if (!formData.areaSize) {
      alert("Please enter Area Size");
      return;
    }
    if (showMore && Number(formData.coveredArea) > Number(formData.areaSize)) {
      alert("Covered area cannot be more than total area size");
      return;
    }
    navigate("/results", { state: formData });
  };

  return (
    <>
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select name="city" value={formData.city} onChange={handleChange}>
                <option>Multan</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Area Unit</Form.Label>
              <Form.Select name="areaUnit" value={formData.areaUnit} onChange={handleChange}>
                <option>marla</option>
                <option>square feet</option>
                <option>kanal</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Area Size</Form.Label>
              <Form.Control
                type="number"
                name="areaSize"
                value={formData.areaSize}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {showMore && (
          <>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Covered Area</Form.Label>
                  <Form.Control
                    type="number"
                    name="coveredArea"
                    value={formData.coveredArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Construction Type</Form.Label>
                  <Form.Select
                    name="constructionType"
                    value={formData.constructionType}
                    onChange={handleChange}
                  >
                    <option>grey structure</option>
                    <option>furnished</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Construction Mode</Form.Label>
                  <Form.Select
                    name="constructionMode"
                    value={formData.constructionMode}
                    onChange={handleChange}
                  >
                    <option>with material</option>
                    <option>without material</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <div className="d-flex gap-2">
          <Button variant="secondary" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </Button>
          <Button variant="primary" onClick={handleStart}>
            Start Calculation
          </Button>
        </div>
      </Form>
    </>
  );
}
