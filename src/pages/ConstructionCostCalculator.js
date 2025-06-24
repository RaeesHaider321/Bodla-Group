import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, ButtonGroup, Table } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import BodlaButton from '../components/Button';
import Icons from "../components/Icon";

const AREA_UNITS = [
  { label: 'Marla', value: 'marla', factor: 272.25 },
  { label: 'Kanal', value: 'kanal', factor: 5445 },
  { label: 'Acre', value: 'acre', factor: 43560 },
  { label: 'Square Feet', value: 'sqft', factor: 1 },
  { label: 'Square Yard', value: 'sqyd', factor: 9 },
];

const CONSTRUCTION_TYPES = [
  { label: 'Grey Structure', value: 'grey' },
  { label: 'Complete', value: 'complete' },
];

const CONSTRUCTION_MODES = [
  { label: 'With Material', value: 'with_material' },
  { label: 'Without Material', value: 'without_material' },
];

const COST_RATES = {
  with_material: {
    grey: 2000,
    complete: 3500,
  },
  without_material: {
    grey: 800,
    complete: 1500,
  },
};

const DETAILED_COSTS = {
  plumbing: 0.08,
  electrical: 0.10,
  wood_metal_tile: 0.15,
  fittings_fixtures: 0.07,
  foundation_structure: 0.20,
};

function ConstructionCostCalculator() {
  const [area, setArea] = useState('');
  const [areaUnit, setAreaUnit] = useState('marla');
  const [coveredArea, setCoveredArea] = useState('');
  const [constructionType, setConstructionType] = useState('grey');
  const [constructionMode, setConstructionMode] = useState('with_material');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    if (area <= 0) {
      alert('Please enter a valid area value');
      return;
    }

    // Convert area to sqft
    const areaInSqft = parseFloat(area) * (AREA_UNITS.find(u => u.value === areaUnit)?.factor || 1);
    const covered = coveredArea ? parseFloat(coveredArea) : areaInSqft;
    const rate = COST_RATES[constructionMode][constructionType];
    const totalCost = covered * rate;
    
    // Detailed breakdown
    const breakdown = {
      plumbing: totalCost * DETAILED_COSTS.plumbing,
      electrical: totalCost * DETAILED_COSTS.electrical,
      wood_metal_tile: totalCost * DETAILED_COSTS.wood_metal_tile,
      fittings_fixtures: totalCost * DETAILED_COSTS.fittings_fixtures,
      foundation_structure: totalCost * DETAILED_COSTS.foundation_structure,
    };
    
    setResult({
      totalCost,
      breakdown,
      covered,
      rate,
      areaInSqft,
    });
  };

  return (
    <section>
      <PageTitle title="Construction Cost" highlight="Calculator" />
      <Container className="areaUnitConverter mt-2">
        <Row className="justify-content-center">
          <Col md={12} lg={8}>
            <Card className="shadow">
              <Card.Body>
                <Form onSubmit={handleCalculate}>
                  {/* Area Input */}
                  <Row>
                    <Col md={6} sm={12}>
                      <Form.Group controlId="areaInput" className="mb-3">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                          type="number"
                          min="0.01"
                          step="any"
                          value={area}
                          onChange={e => setArea(e.target.value)}
                          placeholder="Enter value"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                      <Form.Group controlId="areaUnitSelect" className="mb-3">
                        <Form.Label>Unit</Form.Label>
                        <Form.Select
                          value={areaUnit}
                          onChange={e => setAreaUnit(e.target.value)}
                        >
                          {AREA_UNITS.map(unit => (
                            <option key={unit.value} value={unit.value}>{unit.label}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Covered Area Input */}
                  <Form.Group controlId="coveredArea" className="mb-3">
                    <Form.Label>Construction Covered Area (sqft)</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      step="any"
                      value={coveredArea}
                      onChange={e => setCoveredArea(e.target.value)}
                      placeholder="Leave blank to use total area"
                    />
                  </Form.Group>

                  {/* Construction Type - Radio Buttons */}
                  <Form.Group controlId="constructionType" className="mb-3">
                    <Form.Label>Construction Type</Form.Label>
                    <div>
                      {CONSTRUCTION_TYPES.map(type => (
                        <Form.Check
                          key={type.value}
                          type="radio"
                          id={`construction-type-${type.value}`}
                          name="constructionType"
                          label={type.label}
                          value={type.value}
                          checked={constructionType === type.value}
                          onChange={e => setConstructionType(e.target.value)}
                          inline
                          className="me-3"
                        />
                      ))}
                    </div>
                  </Form.Group>

                  {/* Construction Mode - Radio Buttons */}
                  <Form.Group controlId="constructionMode" className="mb-3">
                    <Form.Label>Construction Mode</Form.Label>
                    <div>
                      {CONSTRUCTION_MODES.map(mode => (
                        <Form.Check
                          key={mode.value}
                          type="radio"
                          id={`construction-mode-${mode.value}`}
                          name="constructionMode"
                          label={mode.label}
                          value={mode.value}
                          checked={constructionMode === mode.value}
                          onChange={e => setConstructionMode(e.target.value)}
                          inline
                          className="me-3"
                        />
                      ))}
                    </div>
                  </Form.Group>

                  {/* Submit Button - Using only one button */}
                  <BodlaButton
                    icon={<Icons name="rightArrow" />}
                    variant="primary"
                    type="submit"
                    text="Calculate Cost"
                    className="mt-2"
                  />
                </Form>

                {result && (
                  <div className="mt-4">
                    <Card className="result mb-3">
                      <h3>Total Cost: Rs. {result.totalCost.toLocaleString()}</h3>
                    </Card>
                    <ul className="list-unstyled">
                      <li><strong>Covered Area:</strong> {result.covered.toLocaleString()} sqft</li>
                      <li><strong>Rate:</strong> Rs. {result.rate.toLocaleString()} per sqft</li>
                      <li><strong>Plumbing Works:</strong> Rs. {result.breakdown.plumbing.toLocaleString()}</li>
                      <li><strong>Electrical Works:</strong> Rs. {result.breakdown.electrical.toLocaleString()}</li>
                      <li><strong>Wood, Metal & Tile Works:</strong> Rs. {result.breakdown.wood_metal_tile.toLocaleString()}</li>
                      <li><strong>Fittings & Fixtures:</strong> Rs. {result.breakdown.fittings_fixtures.toLocaleString()}</li>
                      <li><strong>Foundation & Structure:</strong> Rs. {result.breakdown.foundation_structure.toLocaleString()}</li>
                    </ul>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ConstructionCostCalculator;