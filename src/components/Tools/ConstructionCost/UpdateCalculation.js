// UpdateCalculation.jsx
import React from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormSelect,
  FormControl,
  FormCheck,
} from "react-bootstrap";

export default function UpdateCalculation({
  city,
  propertyType,
  areaSize,
  areaUnit,
  coveredArea,
  numFloors,
  constructionQuality,
  materialType,
  constructionType,
  constructionMode,
  additionalFeatures,
  onCityChange,
  onPropertyTypeChange,
  onAreaSizeChange,
  onAreaUnitChange,
  onCoveredAreaChange,
  onNumFloorsChange,
  onConstructionQualityChange,
  onMaterialTypeChange,
  onConstructionTypeChange,
  onConstructionModeChange,
  onAdditionalFeaturesChange,
  onRecalculate,
  onReset,
  errors
}) {
  return (
    <div className="areaUnitConverter">
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">Update Calculation</Card.Title>
        <Form>
          <Row>
            <Col md={12}>
              {/* Left Column */}
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City/Location</Form.Label>
                <FormSelect 
                  value={city} 
                  onChange={onCityChange}
                  isInvalid={!!errors.city}
                >
                  <option value="">Select City</option>
                  <option value="Multan">Multan</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Karachi">Karachi</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="propertyType">
                <Form.Label>Property Type</Form.Label>
                <FormSelect 
                  value={propertyType} 
                  onChange={onPropertyTypeChange}
                  isInvalid={!!errors.propertyType}
                >
                  <option value="">Select Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Apartment">Apartment</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.propertyType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="areaSize">
                <Form.Label>Area size</Form.Label>
                <InputGroup hasValidation>
                  <FormControl
                    type="number"
                    min="0"
                    step="0.01"
                    value={areaSize}
                    onChange={onAreaSizeChange}
                    isInvalid={!!errors.areaSize}
                  />
                  <FormSelect 
                    value={areaUnit} 
                    onChange={onAreaUnitChange}
                    isInvalid={!!errors.areaUnit}
                  >
                    <option value="">Select Unit</option>
                    <option value="square feet">Square feet</option>
                    <option value="marla">Marla</option>
                    <option value="kanal">Kanal</option>
                  </FormSelect>
                  <Form.Control.Feedback type="invalid">
                    {errors.areaSize || errors.areaUnit}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="coveredArea">
                <Form.Label>Covered Area (sq ft)</Form.Label>
                <FormControl
                  type="number"
                  min="0"
                  step="0.01"
                  value={coveredArea}
                  onChange={onCoveredAreaChange}
                  isInvalid={!!errors.coveredArea}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.coveredArea}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              {/* Right Column */}
              <Form.Group className="mb-3" controlId="numFloors">
                <Form.Label>Number of Floors</Form.Label>
                <FormControl
                  type="number"
                  min="1"
                  value={numFloors}
                  onChange={onNumFloorsChange}
                  isInvalid={!!errors.numFloors}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.numFloors}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="constructionQuality">
                <Form.Label>Construction Quality</Form.Label>
                <FormSelect 
                  value={constructionQuality} 
                  onChange={onConstructionQualityChange}
                  isInvalid={!!errors.constructionQuality}
                >
                  <option value="">Select Quality</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.constructionQuality}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="materialType">
                <Form.Label>Material Type</Form.Label>
                <FormSelect 
                  value={materialType} 
                  onChange={onMaterialTypeChange}
                  isInvalid={!!errors.materialType}
                >
                  <option value="">Select Material Type</option>
                  <option value="Grey Structure">Grey Structure</option>
                  <option value="Finishing Only">Finishing Only</option>
                  <option value="Full Turnkey">Full Turnkey</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.materialType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="constructionType">
                <Form.Label>Construction type</Form.Label>
                <FormSelect 
                  value={constructionType} 
                  onChange={onConstructionTypeChange}
                  isInvalid={!!errors.constructionType}
                >
                  <option value="">Select Construction Type</option>
                  <option value="grey structure">Grey structure</option>
                  <option value="furnished">Furnished</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.constructionType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="constructionMode">
                <Form.Label>Construction mode</Form.Label>
                <FormSelect 
                  value={constructionMode} 
                  onChange={onConstructionModeChange}
                  isInvalid={!!errors.constructionMode}
                >
                  <option value="">Select Construction Mode</option>
                  <option value="with material">With material</option>
                  <option value="without material">Without material</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  {errors.constructionMode}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="additionalFeatures">
            <Form.Label>Additional Features</Form.Label>
            <Row>
              {[
                { key: "basement", label: "Basement" },
                { key: "terrace", label: "Terrace" },
                { key: "parking", label: "Parking Area" },
                { key: "lawn", label: "Lawn/Garden" },
                { key: "boundary", label: "Boundary Wall" },
              ].map((feat) => (
                <Col xs={12} key={feat.key}>
                  <FormCheck
                    type="checkbox"
                    id={`feature-${feat.key}`}
                    label={feat.label}
                    checked={additionalFeatures[feat.key] || false}
                    onChange={(e) =>
                      onAdditionalFeaturesChange(feat.key, e.target.checked)
                    }
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        
          <div className="d-flex gap-2 mt-4">
            <Button variant="primary" onClick={onRecalculate}>
              Recalculate
            </Button>
            <Button variant="outline-secondary" onClick={onReset}>
              Reset
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
}