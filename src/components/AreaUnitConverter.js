import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

const AreaUnitConverter = () => {
  // Conversion factors (base unit is square meters)
  const units = {
    squareMeters: {
      name: 'Square Meters',
      abbreviation: 'm²',
      toBase: 1,
      fromBase: 1
    },
    squareFeet: {
      name: 'Square Feet',
      abbreviation: 'ft²',
      toBase: 0.092903,
      fromBase: 1 / 0.092903
    },
    squareYards: {
      name: 'Square Yards',
      abbreviation: 'yd²',
      toBase: 0.836127,
      fromBase: 1 / 0.836127
    },
    marla: {
      name: 'Marla',
      abbreviation: 'Marla',
      toBase: 25.2929,
      fromBase: 1 / 25.2929
    },
    kanal: {
      name: 'Kanal',
      abbreviation: 'Kanal',
      toBase: 505.857, // 1 Kanal = 20 Marla
      fromBase: 1 / 505.857
    },
    acre: {
      name: 'Acre/Killa',
      abbreviation: 'Acre',
      toBase: 4046.86,
      fromBase: 1 / 4046.86
    },
    murabba: {
      name: 'Murabba',
      abbreviation: 'Murabba',
      toBase: 101171, // 1 Murabba = 25 Acre
      fromBase: 1 / 101171
    },
    hectare: {
      name: 'Hectare',
      abbreviation: 'ha',
      toBase: 10000,
      fromBase: 1 / 10000
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('squareMeters');
  const [toUnit, setToUnit] = useState('squareFeet');
  const [result, setResult] = useState('');

  const convertArea = () => {
    if (inputValue === '' || isNaN(inputValue)) {
      setResult('');
      return;
    }

    const value = parseFloat(inputValue);
    // Convert to base unit (square meters) first
    const inBase = value * units[fromUnit].toBase;
    // Then convert to target unit
    const convertedValue = inBase * units[toUnit].fromBase;
    
    setResult(convertedValue.toFixed(6));
  };

  // Swap units
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Auto-convert when input or units change
  useEffect(() => {
    convertArea();
  }, [inputValue, fromUnit, toUnit]);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h2 className="mb-0 text-center">Area Unit Converter</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="inputValue" className="mb-4">
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                  />
                </Form.Group>

                <Row className="align-items-center mb-4">
                  <Col xs={5}>
                    <Form.Group controlId="fromUnit">
                      <Form.Label>From</Form.Label>
                      <Form.Select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                      >
                        {Object.keys(units).map((unitKey) => (
                          <option key={`from-${unitKey}`} value={unitKey}>
                            {units[unitKey].name} ({units[unitKey].abbreviation})
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={2} className="text-center">
                    <Button
                      variant="outline-primary"
                      onClick={handleSwap}
                      className="rounded-circle"
                      style={{ width: '40px', height: '40px' }}
                      aria-label="Swap units"
                    >
                      ↔
                    </Button>
                  </Col>

                  <Col xs={5}>
                    <Form.Group controlId="toUnit">
                      <Form.Label>To</Form.Label>
                      <Form.Select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                      >
                        {Object.keys(units).map((unitKey) => (
                          <option key={`to-${unitKey}`} value={unitKey}>
                            {units[unitKey].name} ({units[unitKey].abbreviation})
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {result && (
                  <Card className="mt-4 border-primary">
                    <Card.Body className="text-center">
                      <Card.Title>Result</Card.Title>
                      <p className="display-6">
                        {inputValue} {units[fromUnit].abbreviation} = {result} {units[toUnit].abbreviation}
                      </p>
                    </Card.Body>
                  </Card>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AreaUnitConverter;