import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import "../ConstructionCost/ConstructionCost.css"
import InnerHeader from "../../InnerHeaderWithCard";



import headerBg from '../../../images/header-bg.jpg';
import '../../../components/InnerHeader.css';



export default function ResultsPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    propertyType: "Residential",
    coveredArea: location.state?.coveredArea || location.state?.areaSize || "",
    floors: 1,
    quality: "Basic",
    materialType: "Grey Structure",
    city: location.state?.city || "Multan",
    features: []
  });

  const [totalCost, setTotalCost] = useState(0);

  // Cost Calculation
  const calculateCost = () => {
    let ratePerSqFt = 1500; // base

    // Adjust by material type
    if (formData.materialType === "Finishing Only") ratePerSqFt = 2000;
    if (formData.materialType === "Full Turnkey") ratePerSqFt = 3500;

    // Adjust by quality
    if (formData.quality === "Standard") ratePerSqFt += 200;
    if (formData.quality === "Premium") ratePerSqFt += 500;

    // Additional features (5% each)
    const featuresCostMultiplier = 1 + formData.features.length * 0.05;

    // Total cost = rate * area * floors * features multiplier
    const cost =
      ratePerSqFt *
      Number(formData.coveredArea || 0) *
      Number(formData.floors) *
      featuresCostMultiplier;

    setTotalCost(Math.round(cost));
  };

  useEffect(() => {
    calculateCost();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
    <InnerHeader
            heading="Construction Cost"
            highlight="Calculator"
            subtext="Calculate the cost of your construction project"
            backgroundImage={headerBg}
          ></InnerHeader>
    <div className="container py-4">
      <Row>
        {/* Left Sidebar */}
        <Col md={4} className="border-end">
          <h4>Update Calculation</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Property Type</Form.Label>
              <Form.Select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Duplex</option>
                <option>Apartment</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Covered Area (sq ft)</Form.Label>
              <Form.Control
                type="number"
                name="coveredArea"
                value={formData.coveredArea}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Floors</Form.Label>
              <Form.Control
                type="number"
                name="floors"
                value={formData.floors}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Construction Quality</Form.Label>
              <Form.Select name="quality" value={formData.quality} onChange={handleChange}>
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Material Type</Form.Label>
              <Form.Select name="materialType" value={formData.materialType} onChange={handleChange}>
                <option>Grey Structure</option>
                <option>Finishing Only</option>
                <option>Full Turnkey</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City/Location</Form.Label>
              <Form.Select name="city" value={formData.city} onChange={handleChange}>
                <option>Multan</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Additional Features</Form.Label>
              {["Basement", "Terrace", "Parking Area", "Lawn/Garden", "Boundary Wall"].map((f) => (
                <Form.Check
                  key={f}
                  type="checkbox"
                  label={f}
                  value={f}
                  checked={formData.features.includes(f)}
                  onChange={handleChange}
                />
              ))}
            </Form.Group>
          </Form>
        </Col>

        {/* Right Results Section */}
        <Col md={8}>
          <h3>Calculation Results</h3>
          <Table bordered>
            <tbody>
              <tr>
                <th>Property Type</th>
                <td>{formData.propertyType}</td>
              </tr>
              <tr>
                <th>Covered Area (sq ft)</th>
                <td>{formData.coveredArea}</td>
              </tr>
              <tr>
                <th>Floors</th>
                <td>{formData.floors}</td>
              </tr>
              <tr>
                <th>Construction Quality</th>
                <td>{formData.quality}</td>
              </tr>
              <tr>
                <th>Material Type</th>
                <td>{formData.materialType}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{formData.city}</td>
              </tr>
              <tr>
                <th>Additional Features</th>
                <td>{formData.features.length ? formData.features.join(", ") : "None"}</td>
              </tr>
              <tr>
                <th>Total Estimated Cost</th>
                <td>
                  <strong>{totalCost.toLocaleString()} PKR</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
    </>
  );
}
