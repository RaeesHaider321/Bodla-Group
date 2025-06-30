import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import BodlaButton from '../components/Button';
import Icons from "../components/Icon";

const PlotPriceCalculator = () => {
  const [formData, setFormData] = useState({
    plotSize: '',
    areaUnit: 'marla',
    isCornerPlot: false,
    isPremium: false
  });

  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  // Fixed price per square foot
  const PRICE_PER_SQ_FT = 15000;

  const areaUnits = {
    squareFeet: { label: 'Square Feet', conversion: 1 },
    marla: { label: 'Marla', conversion: 272.25 }, // 1 Marla = 272.25 sq ft
    kanal: { label: 'Kanal', conversion: 5445 },     // 1 Kanal = 5445 sq ft
    squareMeter: { label: 'Square Meter', conversion: 10.764 } // 1 sq m = 10.764 sq ft
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.plotSize || isNaN(formData.plotSize)) {
      newErrors.plotSize = 'Please enter a valid plot size';
    } else if (parseFloat(formData.plotSize) <= 0) {
      newErrors.plotSize = 'Plot size must be greater than 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePrice = () => {
    if (!validateForm()) return;

    const { plotSize, areaUnit, isCornerPlot, isPremium } = formData;
    
    // Calculate area in square feet
    const areaInSqFt = parseFloat(plotSize) * areaUnits[areaUnit].conversion;
    
    // Base price calculation
    let totalPrice = areaInSqFt * PRICE_PER_SQ_FT;
    
    // Apply premium for corner plot (10%)
    if (isCornerPlot) {
      totalPrice *= 1.10;
    }
    
    // Apply additional premium (10%)
    if (isPremium) {
      totalPrice *= 1.10;
    }
    
    setResult({
      totalPrice,
      areaInSqFt,
      plotSize,
      selectedUnit: areaUnits[areaUnit].label,
      isCornerPlot,
      isPremium,
      basePrice: areaInSqFt * PRICE_PER_SQ_FT
    });
  };

  return (
    <section>
      <PageTitle title="Plot Price" highlight="Calculator" />
    <Container className='areaUnitConverter mt-2'>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="plotSize" className="mb-3">
                      <Form.Label>Plot Size</Form.Label>
                      <Form.Control
                        type="number"
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleChange}
                        isInvalid={!!errors.plotSize}
                        placeholder="Enter plot size"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.plotSize}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="areaUnit" className="mb-3">
                      <Form.Label>Area Unit</Form.Label>
                      <Form.Select
                        name="areaUnit"
                        value={formData.areaUnit}
                        onChange={handleChange}
                      >
                        {Object.entries(areaUnits).map(([key, unit]) => (
                          <option key={key} value={key}>{unit.label}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Check
                      type="checkbox"
                      id="isCornerPlot"
                      label="Corner Plot (10% premium)"
                      name="isCornerPlot"
                      checked={formData.isCornerPlot}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="checkbox"
                      id="isPremium"
                      label="Premium Location (10% additional)"
                      name="isPremium"
                      checked={formData.isPremium}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                  <BodlaButton
                    icon={<Icons name="rightArrow" />}
                    variant="primary"
                    type="button"
                    text="Calculate Cost"
                    className="mt-2"
                    onClick={calculatePrice}
                  />
              </Form>

              {result && (
                <Card className="result mt-4">
                  <Alert.Heading>Calculation Results</Alert.Heading>
                  <hr />
                  <p>
                    <strong>Plot Size:</strong> {result.plotSize} {result.selectedUnit} 
                    ({result.areaInSqFt.toFixed(2)} sq ft)
                  </p>
                  <p>
                    <strong>Base Price:</strong> {result.basePrice.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'PKR',
                      maximumFractionDigits: 0
                    })}
                  </p>
                  {result.isCornerPlot && (
                    <p>
                      <strong>Corner Plot Premium (10%):</strong> +{(result.basePrice * 0.10).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'PKR',
                        maximumFractionDigits: 0
                      })}
                    </p>
                  )}
                  {result.isPremium && (
                    <p>
                      <strong>Location Premium (10%):</strong> +{(result.basePrice * 0.10).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'PKR',
                        maximumFractionDigits: 0
                      })}
                    </p>
                  )}
                  <p className="h4 mt-3">
                    <strong>Total Price:</strong> {result.totalPrice.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'PKR',
                      maximumFractionDigits: 0
                    })}
                  </p>
                  </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default PlotPriceCalculator;