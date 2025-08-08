import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const ConstructionForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => {
      const features = [...prev.additionalFeatures];
      const index = features.indexOf(feature);
      if (index > -1) {
        features.splice(index, 1);
      } else {
        features.push(feature);
      }
      return { ...prev, additionalFeatures: features };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Select 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange}
                  required
                >
                  <option value="Multan">Multan</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Area Unit</Form.Label>
                <Form.Select 
                  name="areaUnit" 
                  value={formData.areaUnit} 
                  onChange={handleChange}
                  required
                >
                  <option value="marla">Marla</option>
                  <option value="square feet">Square Feet</option>
                  <option value="kanal">Kanal</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Basic Fields */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Area Size</Form.Label>
                <Form.Control
                  type="number"
                  name="areaSize"
                  value={formData.areaSize}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Construction Type</Form.Label>
                <Form.Select 
                  name="constructionType" 
                  value={formData.constructionType} 
                  onChange={handleChange}
                  required
                >
                  <option value="grey structure">Grey Structure</option>
                  <option value="furnished">Furnished</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button 
            variant="outline-primary" 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="mb-3"
          >
            {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
          </Button>

          {showAdvanced && (
            <>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Covered Area (in {formData.areaUnit})</Form.Label>
                    <Form.Control
                      type="number"
                      name="coveredArea"
                      value={formData.coveredArea}
                      onChange={handleChange}
                      min="1"
                      max={formData.areaSize}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select 
                      name="propertyType" 
                      value={formData.propertyType} 
                      onChange={handleChange}
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Apartment">Apartment</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {/* Additional advanced fields */}
            </>
          )}

          <Button variant="primary" type="submit" className="w-100">
            Calculate Cost
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ConstructionForm;