// ResultComponent.jsx
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import UpdateCalculation from "./UpdateCalculation";

import InnerHeader from '../../../components/InnerHeaderWithCard';
import headerBg from '../../../images/header-bg.jpg';
import '../../../components/InnerHeader.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ResultComponent({
  result,
  onEdit,
  onPopularCalculation,
  activePreset,
  isMobile,
  // State values
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
  errors,
  // State setters
  setCity,
  setPropertyType,
  setAreaSize,
  setAreaUnit,
  setCoveredArea,
  setNumFloors,
  setConstructionQuality,
  setMaterialType,
  setConstructionType,
  setConstructionMode,
  setAdditionalFeatures,
  setErrors,
  setActivePreset,
  calculateCost
}) {
  const chartData = {
    labels: result.breakdown.map((b) => b.label),
    datasets: [
      {
        data: result.breakdown.map((b) => b.amount),
        backgroundColor: [
          "#4F46E5",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#6B7280",
        ],
        borderColor: "transparent",
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${formatCurrency(context.raw)}`;
          },
        },
      },
    },
  };

  return (
    <>
      <InnerHeader
        heading={`${result.areaSize} ${result.areaUnit} ${result.propertyType.toLowerCase()} construction cost`}
        highlight={result.city ? ` — ${result.city}` : ""}
        subtext="Easily convert between square feet, meters, yards, and more."
        backgroundImage={headerBg}
      >
        <Container className="areaUnitConverter mt-2">
          <button
            className="mb-4 px-3 py-1 rounded border text-sm hover:bg-gray-100"
            onClick={onEdit}
          >
            ← Edit inputs
          </button>
        </Container>
      </InnerHeader>

      <section>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <UpdateCalculation
                city={result.city}
                propertyType={result.propertyType}
                areaSize={result.areaSize.toString()}
                areaUnit={result.areaUnit}
                coveredArea={result.coveredArea}
                numFloors={result.numFloors}
                constructionQuality={result.constructionQuality}
                materialType={result.materialType}
                constructionType={result.constructionType}
                constructionMode={result.constructionMode}
                additionalFeatures={result.additionalFeatures}
                onCityChange={(e) => setCity(e.target.value)}
                onPropertyTypeChange={(e) => setPropertyType(e.target.value)}
                onAreaSizeChange={(e) => setAreaSize(e.target.value)}
                onAreaUnitChange={(e) => setAreaUnit(e.target.value)}
                onCoveredAreaChange={(e) => setCoveredArea(e.target.value)}
                onNumFloorsChange={(e) => setNumFloors(parseInt(e.target.value))}
                onConstructionQualityChange={(e) => setConstructionQuality(e.target.value)}
                onMaterialTypeChange={(e) => setMaterialType(e.target.value)}
                onConstructionTypeChange={(e) => setConstructionType(e.target.value)}
                onConstructionModeChange={(e) => setConstructionMode(e.target.value)}
                onAdditionalFeaturesChange={(key, value) =>
                  setAdditionalFeatures({
                    ...additionalFeatures,
                    [key]: value,
                  })
                }
                onRecalculate={calculateCost}
                onReset={() => {
                  setAreaSize("");
                  setCoveredArea("");
                  setErrors({});
                  setActivePreset(null);
                }}
                errors={errors}
              />
            </Col>
            <Col xs={12} md={8}>
              <div className="mb-2">
                <strong>Property Details:</strong>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>Type: <strong>{result.propertyType}</strong></div>
                  <div>Floors: <strong>{result.numFloors}</strong></div>
                  <div>Quality: <strong>{result.constructionQuality}</strong></div>
                  <div>Material: <strong>{result.materialType}</strong></div>
                </div>
              </div>
              <div className="mb-2">
                Construction Type:{" "}
                <strong>
                  {result.constructionType} / {result.constructionMode}
                </strong>
              </div>
              <div className="mb-2">
                Area used for calculation:{" "}
                <strong>
                  {result.usedAreaInInputUnit} {result.areaUnit} (
                  {formatNumber(result.usedSqft)} sqft)
                </strong>
              </div>
              <div className="mb-2">
                Rate applied:{" "}
                <strong>{formatCurrency(result.rate)} / sqft</strong>
              </div>

              {Object.values(result.additionalFeatures).some(v => v) && (
                <div className="mb-2">
                  <strong>Additional Features:</strong>{" "}
                  {Object.entries(result.additionalFeatures)
                    .filter(([_, value]) => value)
                    .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
                    .join(", ")}
                </div>
              )}

              <div className="text-xl font-bold mt-3">
                Estimated Total Cost:{" "}
                <span className="ml-2">
                  {formatCurrency(result.totalCost)}
                </span>
              </div>
              <h2 className="text-lg font-medium mb-2">Cost Breakdown</h2>

              <Row className="align-items-center">
                <Col sm={12} md={6}>
                  <Pie data={chartData} options={chartOptions} />
                </Col>
                <Col sm={12} md={6}>
                  {result.breakdown.map((b) => (
                    <div key={b.key} className="d-flex gap-3">
                      <p>{b.label}</p>
                      <p>{b.pct}%</p>
                      <h6>
                        {formatCurrency(b.amount)}
                      </h6>
                    </div>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

function formatNumber(n) {
  return Math.round(n).toLocaleString();
}

function formatCurrency(n) {
  return `PKR ${formatNumber(n)}`;
}