import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Row, Col, ButtonGroup, Table } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';

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
      toBase: 25.2929, // Default to standard Marla (272 sq ft)
      fromBase: 1 / 25.2929
    },
    kanal: {
      name: 'Kanal',
      abbreviation: 'Kanal',
      toBase: 505.857, // 1 Kanal = 20 Marla (Standard)
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

  // Marla types with their conversion factors
  const marlaTypes = {
    marla225: {
      name: '225 sq.ft.',
      toBase: 225 * 0.092903,
      fromBase: 1 / (225 * 0.092903)
    },
    marla250: {
      name: '250 sq.ft.',
      toBase: 250 * 0.092903,
      fromBase: 1 / (250 * 0.092903)
    },
    marla272: {
      name: '272 sq.ft.',
      toBase: 272 * 0.092903,
      fromBase: 1 / (272 * 0.092903)
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('squareMeters');
  const [toUnit, setToUnit] = useState('squareFeet');
  const [result, setResult] = useState('');
  const [activeMarla, setActiveMarla] = useState('marla272'); // Default to standard Marla

  // Check if Marla is selected in either from or to units
  const showMarlaSizes = fromUnit === 'marla' || toUnit === 'marla';

  // Popular conversions
  const popularConversions = [
    { label: '1 Kanal to Marla', from: 'kanal', to: 'marla', value: 1 },
    { label: 'Marla to Kanal', from: 'marla', to: 'kanal', value: 1 },
    { label: 'Square Feet to Square Meters', from: 'squareFeet', to: 'squareMeters', value: 1 },
    { label: '1 Square Yard to Square Feet', from: 'squareYards', to: 'squareFeet', value: 1 },
    { label: 'Square Yards to Square Meters', from: 'squareYards', to: 'squareMeters', value: 1 },
    { label: 'Acre to Kanal', from: 'acre', to: 'kanal', value: 1 },
    { label: 'Murabba to Kanal', from: 'murabba', to: 'kanal', value: 1 },
    { label: 'Murabba to Acre', from: 'murabba', to: 'acre', value: 1 },
    { label: 'Kanal to Acre', from: 'kanal', to: 'acre', value: 1 },
    { label: 'Square Meter to Square Feet', from: 'squareMeters', to: 'squareFeet', value: 1 },
    { label: 'Hectare to Kanal', from: 'hectare', to: 'kanal', value: 1 },
    { label: 'Square Feet to Acre', from: 'squareFeet', to: 'acre', value: 1 }
  ];

  const convertArea = () => {
    if (inputValue === '' || isNaN(inputValue)) {
      setResult('');
      return;
    }

    const value = parseFloat(inputValue);

    // Handle Marla conversions with selected type
    let fromConversion, toConversion;

    if (fromUnit === 'marla') {
      fromConversion = marlaTypes[activeMarla].toBase;
    } else {
      fromConversion = units[fromUnit].toBase;
    }

    if (toUnit === 'marla') {
      toConversion = marlaTypes[activeMarla].fromBase;
    } else {
      toConversion = units[toUnit].fromBase;
    }

    const inBase = value * fromConversion;
    const convertedValue = inBase * toConversion;

    setResult(convertedValue.toFixed(6));
  };

  // Swap units
  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Set Marla type
  const handleMarlaSelect = (marlaType) => {
    setActiveMarla(marlaType);
  };

  // Handle popular conversion selection
  const handlePopularConversion = (conversion) => {
    setFromUnit(conversion.from);
    setToUnit(conversion.to);
    setInputValue(conversion.value.toString());
    if (conversion.from === 'marla' || conversion.to === 'marla') {
      setActiveMarla('marla272'); // Default to standard Marla for popular conversions
    }
  };

  // Auto-convert when input, units, or Marla type changes
  useEffect(() => {
    convertArea();
  }, [inputValue, fromUnit, toUnit, activeMarla]);


  const conversionData = [
    { marla: 1, kanal: 0.05, sqft: 225, sqm: 21, sqyd: 25 },
    { marla: 2, kanal: 0.1, sqft: 450, sqm: 42, sqyd: 50 },
    { marla: 3, kanal: 0.15, sqft: 675, sqm: 63, sqyd: 75 },
    { marla: 4, kanal: 0.2, sqft: 900, sqm: 84, sqyd: 100 },
    { marla: 5, kanal: 0.25, sqft: 1125, sqm: 105, sqyd: 125 },
    { marla: 6, kanal: 0.3, sqft: 1350, sqm: 126, sqyd: 150 },
    { marla: 7, kanal: 0.35, sqft: 1575, sqm: 147, sqyd: 175 },
    { marla: 8, kanal: 0.4, sqft: 1800, sqm: 168, sqyd: 200 },
    { marla: 9, kanal: 0.45, sqft: 2025, sqm: 189, sqyd: 225 },
    { marla: 10, kanal: 0.5, sqft: 2250, sqm: 210, sqyd: 250 },
    { marla: 11, kanal: 0.55, sqft: 2475, sqm: 231, sqyd: 275 },
    { marla: 12, kanal: 0.6, sqft: 2700, sqm: 252, sqyd: 300 },
    { marla: 13, kanal: 0.65, sqft: 2925, sqm: 273, sqyd: 325 },
    { marla: 14, kanal: 0.7, sqft: 3150, sqm: 294, sqyd: 350 },
    { marla: 15, kanal: 0.75, sqft: 3375, sqm: 315, sqyd: 375 },
    { marla: 16, kanal: 0.8, sqft: 3600, sqm: 336, sqyd: 400 },
    { marla: 17, kanal: 0.85, sqft: 3825, sqm: 357, sqyd: 425 },
    { marla: 18, kanal: 0.9, sqft: 4050, sqm: 378, sqyd: 450 },
    { marla: 19, kanal: 0.95, sqft: 4275, sqm: 399, sqyd: 475 },
    { marla: 20, kanal: 1, sqft: 4500, sqm: 420, sqyd: 500 }
  ];

  return (
    <>
      

      <section>
      <PageTitle title="Area Unit " highlight="Converter" />
        <Container className="areaUnitConverter mt-2">
          <Row className="justify-content-center">
            <Col md={12} lg={8}>
              <Card className="shadow">
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
                    <Row className="align-items-end mb-4">
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
                          variant="primary"
                          onClick={handleSwap}
                          className="swap"
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
                    {/* Show Marla size buttons only when Marla is selected */}
                    {showMarlaSizes && (
                      <Form.Group className="mb-4">
                        <Form.Label>Select Marla Size:</Form.Label>
                        <ButtonGroup className="w-100">
                          <Button
                            variant={activeMarla === 'marla225' ? 'secondary' : 'outline-secondary'}
                            onClick={() => handleMarlaSelect('marla225')}
                          >
                            225 sq.ft.
                          </Button>
                          <Button
                            variant={activeMarla === 'marla250' ? 'secondary' : 'outline-secondary'}
                            onClick={() => handleMarlaSelect('marla250')}
                          >
                            250 sq.ft.
                          </Button>
                          <Button
                            variant={activeMarla === 'marla272' ? 'secondary' : 'outline-secondary'}
                            onClick={() => handleMarlaSelect('marla272')}
                          >
                            272 sq.ft.
                          </Button>
                        </ButtonGroup>
                      </Form.Group>
                    )}
                    {/* Always show result card */}
                    <p>Result</p>
                    <Card className="result">
                        <h2>
                          {result ? (
                            <>
                              {/* {inputValue} {fromUnit === 'marla' ? `Marla (${marlaTypes[activeMarla].name})` : units[fromUnit].abbreviation} =  */}
                              {result} {toUnit === 'marla' ? `Marla (${marlaTypes[activeMarla].name})` : units[toUnit].abbreviation}
                            </>
                          ) : (
                            <p>Enter a value to see the conversion result</p>
                          )}
                        </h2>
                    </Card>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={12} className='my-5 popularConversions'>
              <h2>Popular Conversions</h2>
              <div className="d-flex flex-wrap gap-2">
                {popularConversions.map((conversion, index) => (
                  <Button
                    key={index}
                    variant="outline-light"
                    size="sm"
                    onClick={() => handlePopularConversion(conversion)}
                  >
                    {conversion.label}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <h2>Area Unit Conversion in Pakistan</h2>
              <div className="area-conversion-table">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Marla</th>
                      <th>Kanal</th>
                      <th>Square Feet <span>(Sq. ft.)</span></th>
                      <th>Square Meter <span>(Sq. m.)</span></th>
                      <th>Square Yard <span>(Sq. yd. / Gazz)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversionData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.marla} Marla</td>
                        <td>{item.kanal} Kanal</td>
                        <td>{item.sqft} Sq. ft.</td>
                        <td>{item.sqm} Sq. m.</td>
                        <td>{item.sqyd} Sq. yd.</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AreaUnitConverter;