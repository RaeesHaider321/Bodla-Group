import React, { useState } from 'react';
import { Alert, Card, Table, Button, Row, Col, Form } from 'react-bootstrap';

const ConstructionResults = ({ results, formData, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedData, setUpdatedData] = useState(formData);

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedData);
    setShowUpdateForm(false);
  };

  return (
    <Card>
      <Card.Body>
        <Alert variant="success" className="text-center">
          <h2>Total Estimated Cost: PKR {results.totalCost.toLocaleString()}</h2>
        </Alert>

        <Row>
          <Col md={6}>
            <Table striped bordered>
              <tbody>
                <tr>
                  <td><strong>Property Type</strong></td>
                  <td>{results.details.propertyType}</td>
                </tr>
                <tr>
                  <td><strong>Construction Type</strong></td>
                  <td>{results.details.constructionType}</td>
                </tr>
                <tr>
                  <td><strong>Total Area</strong></td>
                  <td>{results.details.areaSize} {results.details.areaUnit}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base Construction</td>
                  <td>PKR {(results.areaInSqft * results.baseRate).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td>PKR {results.totalCost.toLocaleString()}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Button 
          variant="outline-primary" 
          onClick={() => setShowUpdateForm(!showUpdateForm)}
          className="mt-3"
        >
          {showUpdateForm ? 'Cancel Update' : 'Update Calculation'}
        </Button>

        {showUpdateForm && (
          <Card className="mt-3">
            <Card.Body>
              <Form onSubmit={handleUpdateSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Area Size</Form.Label>
                      <Form.Control
                        type="number"
                        name="areaSize"
                        value={updatedData.areaSize}
                        onChange={handleUpdateChange}
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
                        value={updatedData.constructionType} 
                        onChange={handleUpdateChange}
                        required
                      >
                        <option value="grey structure">Grey Structure</option>
                        <option value="furnished">Furnished</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="w-100">
                  Update Calculation
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Card.Body>
    </Card>
  );
};

export default ConstructionResults;