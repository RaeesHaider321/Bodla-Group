import React, { useState, useEffect } from "react";
import {
  Container, Card, Form, Button, Row, Col, FormSelect, FormControl, FormCheck, InputGroup, Alert
} from "react-bootstrap";
import ConstructionResults from "./ConstructionResults";
import PopularCalculations from "./PopularCalculations";


import InnerHeader from '../../../components/InnerHeaderWithCard';
import headerBg from '../../../images/header-bg.jpg';
import '../../../components/InnerHeader.css';

const MARLA_TO_SQFT = 272.25;
const KANAL_TO_SQFT = MARLA_TO_SQFT * 20;

const RATES = {
  "grey structure": {
    "Basic": { "with material": 2500, "without material": 1800 },
    "Standard": { "with material": 3000, "without material": 2200 },
    "Premium": { "with material": 4000, "without material": 3000 }
  },
  "furnished": {
    "Basic": { "with material": 4000, "without material": 3000 },
    "Standard": { "with material": 5200, "without material": 3800 },
    "Premium": { "with material": 6500, "without material": 5000 }
  },
  "full turnkey": {
    "Basic": { "with material": 5500, "without material": 4200 },
    "Standard": { "with material": 7000, "without material": 5500 },
    "Premium": { "with material": 9000, "without material": 7000 }
  }
};

const BREAKDOWN = [
  { key: "foundation", label: "Foundation & Structure", pct: 40 },
  { key: "plumbing", label: "Plumbing", pct: 10 },
  { key: "electrical", label: "Electrical", pct: 10 },
  { key: "wood", label: "Wood / Metal / Tile", pct: 20 },
  { key: "fittings", label: "Fittings & Fixtures", pct: 10 },
  { key: "misc", label: "Misc / Fees", pct: 10 },
];

const FEATURE_MULTIPLIERS = {
  basement: 1.15,
  terrace: 1.1,
  parking: 1.05,
  lawn: 1.07,
  boundary: 1.03
};

export default function ConstructionCostCalculation() {
  const [city, setCity] = useState("Multan");
  const [areaSize, setAreaSize] = useState("3");
  const [areaUnit, setAreaUnit] = useState("marla");
  const [coveredArea, setCoveredArea] = useState("");
  const [constructionType, setConstructionType] = useState("grey structure");
  const [constructionMode, setConstructionMode] = useState("with material");
  const [showMore, setShowMore] = useState(false);

  const [propertyType, setPropertyType] = useState("Residential");
  const [numFloors, setNumFloors] = useState(1);
  const [constructionQuality, setConstructionQuality] = useState("Basic");
  const [materialType, setMaterialType] = useState("Grey Structure");
  const [additionalFeatures, setAdditionalFeatures] = useState({
    basement: false,
    terrace: false,
    parking: false,
    lawn: false,
    boundary: false,
  });

  const [page, setPage] = useState("form");
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activePreset, setActivePreset] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function validate() {
    const e = {};
    const area = parseFloat(areaSize);
    if (Number.isNaN(area) || area <= 0)
      e["areaSize"] = "Enter a valid area size (> 0)";

    if (showMore && coveredArea.trim() !== "") {
      const c = parseFloat(coveredArea);
      if (Number.isNaN(c) || c <= 0)
        e["coveredArea"] = "Covered area must be a number > 0";
      else if (c > area)
        e["coveredArea"] = "Covered area can't be greater than total area";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function calculateCost() {
    const rawArea = parseFloat(areaSize);
    const rawCovered = coveredArea.trim() === "" ? null : parseFloat(coveredArea);
    const usedAreaInInputUnit = rawCovered !== null ? rawCovered : rawArea;

    const usedSqft = toSqft(usedAreaInInputUnit, areaUnit);

    // Get the correct rate based on all parameters
    let rateType = constructionType;
    if (materialType === "Full Turnkey") {
      rateType = "full turnkey";
    } else if (materialType === "Finishing Only") {
      rateType = "furnished";
    }

    const baseRate = RATES[rateType][constructionQuality][constructionMode];

    // Apply floor multiplier (10% increase per floor above 1)
    const floorMultiplier = 1 + (Math.max(1, numFloors) - 1) * 0.1;

    // Apply additional features multipliers
    let featureMultiplier = 1;
    Object.entries(additionalFeatures).forEach(([key, value]) => {
      if (value) {
        featureMultiplier *= FEATURE_MULTIPLIERS[key];
      }
    });

    const finalRate = baseRate * floorMultiplier * featureMultiplier;
    const totalCost = usedSqft * finalRate;

    const breakdown = BREAKDOWN.map((b) => ({
      ...b,
      amount: Math.round((totalCost * b.pct) / 100),
    }));

    setResult({
      city,
      areaSize: rawArea,
      areaUnit,
      usedAreaInInputUnit,
      usedSqft,
      constructionType,
      constructionMode,
      rate: finalRate,
      totalCost,
      breakdown,
      propertyType,
      numFloors,
      constructionQuality,
      materialType,
      additionalFeatures
    });

    setPage("result");
  }

  function handleStartCalculation() {
    if (!validate()) return;
    setActivePreset(null); // Clear active preset when doing manual calculation
    calculateCost();
  }

  async function handlePopularCalculation(preset) {
    // Set all relevant state values from the preset
    setAreaSize(preset.areaSize.toString());
    setAreaUnit(preset.areaUnit);
    setConstructionQuality(preset.constructionQuality);
    setMaterialType(preset.materialType);
    setConstructionType(preset.constructionType);
    setConstructionMode(preset.constructionMode);
    setNumFloors(preset.numFloors);
    setAdditionalFeatures({
      basement: false,
      terrace: false,
      parking: false,
      lawn: false,
      boundary: false,
    });

    setActivePreset(preset.label);

    // Use a small timeout to ensure state updates before calculation
    await new Promise(resolve => setTimeout(resolve, 0));
    calculateCost();
  }

  function toSqft(value, unit) {
    if (unit === "square feet") return value;
    if (unit === "marla") return value * MARLA_TO_SQFT;
    return value * KANAL_TO_SQFT;
  }

  if (page === "result" && result) {
    return (
      <ConstructionResults
        result={result}
        onEdit={() => setPage("form")}
        onPopularCalculation={handlePopularCalculation}
        activePreset={activePreset}
        isMobile={isMobile}
        calculateCost={calculateCost}
        setCity={setCity}
        setPropertyType={setPropertyType}
        setAreaSize={setAreaSize}
        setAreaUnit={setAreaUnit}
        setCoveredArea={setCoveredArea}
        setNumFloors={setNumFloors}
        setConstructionQuality={setConstructionQuality}
        setMaterialType={setMaterialType}
        setConstructionType={setConstructionType}
        setConstructionMode={setConstructionMode}
        setAdditionalFeatures={setAdditionalFeatures}
        setErrors={setErrors}
        setActivePreset={setActivePreset}
        errors={errors}
      />
    );
  }

  return (
    <>
      <InnerHeader
        heading='Construction Cost'
        highlight=' Calculator'
        subtext="Easily convert between square feet, meters, yards, and more."
        backgroundImage={headerBg}
      >
        <Container className="areaUnitConverter mt-2">
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col xs={12} sm={6} md={3}>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <FormSelect
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option>Multan</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                      </FormSelect>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} md={3}>
                    <Form.Group controlId="propertyType">
                      <Form.Label>Property Type</Form.Label>
                      <FormSelect
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Duplex</option>
                        <option>Apartment</option>
                      </FormSelect>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} md={3}>
                    <Form.Group controlId="areaSize">
                      <Form.Label>Area size</Form.Label>
                      <InputGroup>
                        <FormControl
                          type="number"
                          min="0"
                          step="0.01"
                          value={areaSize}
                          onChange={(e) => setAreaSize(e.target.value)}
                        />
                        <FormSelect
                          value={areaUnit}
                          onChange={(e) => setAreaUnit(e.target.value)}
                          style={{ maxWidth: '150px' }}
                        >
                          <option value="square feet">Square feet</option>
                          <option value="marla">Marla</option>
                          <option value="kanal">Kanal</option>
                        </FormSelect>
                      </InputGroup>
                      {errors["areaSize"] && (
                        <Alert variant="danger" className="mt-2">
                          {errors["areaSize"]}
                        </Alert>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} md={3}>
                    <Form.Group controlId="constructionQuality">
                      <Form.Label>Construction Quality</Form.Label>
                      <FormSelect
                        value={constructionQuality}
                        onChange={(e) => setConstructionQuality(e.target.value)}
                      >
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Premium</option>
                      </FormSelect>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      variant="link"
                      onClick={() => setShowMore(!showMore)}
                      className="p-0"
                    >
                      {showMore ? "Show less" : "Show more options"}
                    </Button>
                  </Col>

                  {showMore && (
                    <>
                      <Col xs={12} sm={6} md={3}>
                        <Form.Group controlId="coveredArea">
                          <Form.Label>Covered Area (same unit as Area size)</Form.Label>
                          <FormControl
                            type="number"
                            min="0"
                            step="0.01"
                            value={coveredArea}
                            onChange={(e) => setCoveredArea(e.target.value)}
                          />
                          {errors["coveredArea"] && (
                            <Alert variant="danger" className="mt-2">
                              {errors["coveredArea"]}
                            </Alert>
                          )}
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={6} md={3}>
                        <Form.Group controlId="numFloors">
                          <Form.Label>Number of Floors</Form.Label>
                          <FormControl
                            type="number"
                            min="1"
                            value={numFloors}
                            onChange={(e) => setNumFloors(parseInt(e.target.value))}
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={6} md={3}>
                        <Form.Group controlId="materialType">
                          <Form.Label>Material Type</Form.Label>
                          <FormSelect
                            value={materialType}
                            onChange={(e) => setMaterialType(e.target.value)}
                          >
                            <option>Grey Structure</option>
                            <option>Finishing Only</option>
                            <option>Full Turnkey</option>
                          </FormSelect>
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={6} md={3}>
                        <Form.Group controlId="constructionType">
                          <Form.Label>Construction type</Form.Label>
                          <FormSelect
                            value={constructionType}
                            onChange={(e) => setConstructionType(e.target.value)}
                          >
                            <option value="grey structure">Grey structure</option>
                            <option value="furnished">Furnished</option>
                          </FormSelect>
                        </Form.Group>
                      </Col>

                      <Col xs={12} sm={6} md={3}>
                        <Form.Group controlId="constructionMode">
                          <Form.Label>Construction mode</Form.Label>
                          <FormSelect
                            value={constructionMode}
                            onChange={(e) => setConstructionMode(e.target.value)}
                          >
                            <option value="with material">With material</option>
                            <option value="without material">Without material</option>
                          </FormSelect>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group controlId="additionalFeatures">
                          <Form.Label>Additional Features</Form.Label>
                          <Row>
                            {[
                              { key: "basement", label: "Basement" },
                              { key: "terrace", label: "Terrace" },
                              { key: "parking", label: "Parking Area" },
                              { key: "lawn", label: "Lawn/Garden" },
                              { key: "boundary", label: "Boundary Wall" },
                            ].map((feat) => (
                              <Col xs={6} key={feat.key}>
                                <FormCheck
                                  type="checkbox"
                                  label={feat.label}
                                  checked={additionalFeatures[feat.key]}
                                  onChange={(e) =>
                                    setAdditionalFeatures({
                                      ...additionalFeatures,
                                      [feat.key]: e.target.checked,
                                    })
                                  }
                                />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>
                      </Col>
                    </>
                  )}

                  <Col xs={12} className="mt-3">
                    <div className="d-flex gap-2">
                      <Button
                        variant="primary"
                        onClick={handleStartCalculation}
                      >
                        Start calculation
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => {
                          setAreaSize("");
                          setCoveredArea("");
                          setShowMore(false);
                          setErrors({});
                          setActivePreset(null);
                        }}
                      >
                        Reset
                      </Button>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <p className="mt-3">
                      Tip: Covered Area should be in the same unit as Area size.
                      Update the constants at the top to match your market rates.
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </InnerHeader>
      <section>
        <Container>
          <PopularCalculations
            onPopularCalculation={handlePopularCalculation}
            activePreset={activePreset}
            isMobile={isMobile}
          />
        </Container>
      </section>
    </>
  );
}