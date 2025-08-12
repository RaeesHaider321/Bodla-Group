// ConstructionCostCalculator.jsx
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import InnerHeader from "../../InnerHeaderWithCard";
import headerBg from '../../../images/header-bg.jpg';
import '../../../components/InnerHeader.css';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const POPULAR_CALCULATIONS = [
    {
        label: "3 Marla Basic",
        areaSize: 3,
        areaUnit: "marla",
        constructionQuality: "Basic",
        materialType: "Grey Structure",
        constructionType: "grey structure",
        constructionMode: "with material",
        numFloors: 1
    },
    {
        label: "5 Marla Standard",
        areaSize: 5,
        areaUnit: "marla",
        constructionQuality: "Standard",
        materialType: "Grey Structure",
        constructionType: "grey structure",
        constructionMode: "with material",
        numFloors: 1
    },
    {
        label: "7 Marla Premium",
        areaSize: 7,
        areaUnit: "marla",
        constructionQuality: "Premium",
        materialType: "Grey Structure",
        constructionType: "grey structure",
        constructionMode: "with material",
        numFloors: 1
    },
    {
        label: "10 Marla Furnished",
        areaSize: 10,
        areaUnit: "marla",
        constructionQuality: "Standard",
        materialType: "Finishing Only",
        constructionType: "furnished",
        constructionMode: "with material",
        numFloors: 1
    },
    {
        label: "1 Kanal Turnkey",
        areaSize: 1,
        areaUnit: "kanal",
        constructionQuality: "Premium",
        materialType: "Full Turnkey",
        constructionType: "full turnkey",
        constructionMode: "with material",
        numFloors: 1
    },
];

function toSqft(value, unit) {
    if (unit === "square feet") return value;
    if (unit === "marla") return value * MARLA_TO_SQFT;
    return value * KANAL_TO_SQFT;
}

function formatNumber(n) {
    return Math.round(n).toLocaleString();
}

function formatCurrency(n) {
    return `PKR ${formatNumber(n)}`;
}

export default function ConstructionCostCalculator() {
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

    if (page === "result" && result) {
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
                            onClick={() => setPage("form")}
                        >
                            ← Edit inputs
                        </button>
                    </Container>
                </InnerHeader>
                <section>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} className="areaUnitConverter">
                                <Card className="p-4 mb-4">
                                    <Card.Body>
                                        <h5>Update Calculation</h5>
                                        <Form>
                                            <Row className="g-4" md={1}>
                                                {/* Left Column */}
                                                <Col>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
                                                            <option>Multan</option>
                                                            <option>Lahore</option>
                                                            <option>Islamabad</option>
                                                            <option>Karachi</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Property Type</Form.Label>
                                                        <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                                                            <option>Residential</option>
                                                            <option>Commercial</option>
                                                            <option>Duplex</option>
                                                            <option>Apartment</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Area size</Form.Label>
                                                        <Row>
                                                            <Col>
                                                                <Form.Control
                                                                    type="number"
                                                                    min="0"
                                                                    step="0.01"
                                                                    value={areaSize}
                                                                    onChange={(e) => setAreaSize(e.target.value)}
                                                                />
                                                            </Col>
                                                            <Col xs="auto">
                                                                <Form.Select value={areaUnit} onChange={(e) => setAreaUnit(e.target.value)}>
                                                                    <option value="square feet">Square feet</option>
                                                                    <option value="marla">Marla</option>
                                                                    <option value="kanal">Kanal</option>
                                                                </Form.Select>
                                                            </Col>
                                                        </Row>
                                                        {errors["areaSize"] && (
                                                            <div className="text-danger small mt-1">{errors["areaSize"]}</div>
                                                        )}
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Covered Area (sq ft)</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="0"
                                                            step="0.01"
                                                            value={coveredArea}
                                                            onChange={(e) => setCoveredArea(e.target.value)}
                                                        />
                                                        {errors["coveredArea"] && (
                                                            <div className="text-danger small mt-1">{errors["coveredArea"]}</div>
                                                        )}
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Number of Floors</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="1"
                                                            value={numFloors}
                                                            onChange={(e) => setNumFloors(parseInt(e.target.value))}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Construction Quality</Form.Label>
                                                        <Form.Select
                                                            value={constructionQuality}
                                                            onChange={(e) => setConstructionQuality(e.target.value)}
                                                        >
                                                            <option>Basic</option>
                                                            <option>Standard</option>
                                                            <option>Premium</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Material Type</Form.Label>
                                                        <Form.Select
                                                            value={materialType}
                                                            onChange={(e) => setMaterialType(e.target.value)}
                                                        >
                                                            <option>Grey Structure</option>
                                                            <option>Finishing Only</option>
                                                            <option>Full Turnkey</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Construction type</Form.Label>
                                                        <Form.Select
                                                            value={constructionType}
                                                            onChange={(e) => setConstructionType(e.target.value)}
                                                        >
                                                            <option value="grey structure">Grey structure</option>
                                                            <option value="furnished">Furnished</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Construction mode</Form.Label>
                                                        <Form.Select
                                                            value={constructionMode}
                                                            onChange={(e) => setConstructionMode(e.target.value)}
                                                        >
                                                            <option value="with material">With material</option>
                                                            <option value="without material">Without material</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
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
                                                                    <Form.Check
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
                                            </Row>
                                            <Row className="d-flex gap-2 mt-4">
                                                <Button onClick={handleStartCalculation} variant="light">Recalculate</Button>
                                                <Button
                                                    onClick={() => {
                                                        setAreaSize("");
                                                        setCoveredArea("");
                                                        setErrors({});
                                                        setActivePreset(null);
                                                    }}
                                                    variant="dark"
                                                >
                                                    Reset
                                                </Button>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={8}>
                                <Card className="mb-4 p-4">
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
                                        <h2 className="ml-2">
                                            {formatCurrency(result.totalCost)}
                                        </h2>
                                    </div>
                                </Card>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <h4>Breakdown of Overall Construction Cost By Percentage (PKR)</h4>
                                    <Row className="aligh-items-center">
                                        <Col md={6}>
                                            <Pie data={chartData} options={chartOptions} />
                                        </Col>
                                        <Col md={6}>
                                            {result.breakdown.map((b) => (
                                                <Row key={b.key} className="justify-content-justify">
                                                    <Col><p>{b.label}</p></Col>
                                                    <Col><p>{b.pct}%</p></Col>
                                                    <Col>
                                                    <p>
                                                        <b>{formatCurrency(b.amount)}</b>
                                                    </p></Col>
                                                </Row>
                                            ))}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <h3>Popular Calculations</h3>
                            <Row className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                {POPULAR_CALCULATIONS.map((calc, index) => (
                                    <Col sm={12} md={2}>
                                    <Card
                                        key={index}
                                        onClick={() => handlePopularCalculation(calc)}
                                        className={`whitespace-nowrap ${activePreset === calc.label
                                            ? 'bg-blue-100 border-blue-500'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        <Card.Body>{calc.label}</Card.Body>
                                    </Card></Col>
                                ))}
                            </Row>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }

    return (
        <>
            <InnerHeader
                heading='Construction Cost '
                highlight='Calculation'
                subtext="Easily convert between square feet, meters, yards, and more."
                backgroundImage={headerBg}
            >
                <Container className="areaUnitConverter mt-2">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={1} md={3}>{/* City */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
                                            <option>Multan</option>
                                            <option>Lahore</option>
                                            <option>Islamabad</option>
                                            <option>Karachi</option>
                                        </Form.Select>
                                    </Form.Group></Col>
                                <Col sm={12} md={3}>{/* Property Type */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Property Type</Form.Label>
                                        <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                            <option>Duplex</option>
                                            <option>Apartment</option>
                                        </Form.Select>
                                    </Form.Group></Col>
                                <Col sm={12} md={3}>{/* Area size */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Area size</Form.Label>
                                        <Row className="g-2">
                                            <Col>
                                                <Form.Control
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    value={areaSize}
                                                    onChange={(e) => setAreaSize(e.target.value)}
                                                />
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Select value={areaUnit} onChange={(e) => setAreaUnit(e.target.value)}>
                                                    <option value="square feet">Square feet</option>
                                                    <option value="marla">Marla</option>
                                                    <option value="kanal">Kanal</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        {errors["areaSize"] && <div className="text-danger small mt-1">{errors["areaSize"]}</div>}
                                    </Form.Group></Col>
                                <Col sm={12} md={3}>{/* Construction Quality */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Construction Quality</Form.Label>
                                        <Form.Select value={constructionQuality} onChange={(e) => setConstructionQuality(e.target.value)}>
                                            <option>Basic</option>
                                            <option>Standard</option>
                                            <option>Premium</option>
                                        </Form.Select>
                                    </Form.Group></Col>

                            </Row>

                            {/* Extra Fields */}
                            {showMore && (
                                <>
                                    <Row>
                                        {/* Covered Area */}
                                        <Col sm={12} md={3}><Form.Group className="mb-3">
                                            <Form.Label>Covered Area (same unit as Area size)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                value={coveredArea}
                                                onChange={(e) => setCoveredArea(e.target.value)}
                                            />
                                            {errors["coveredArea"] && (
                                                <div className="text-danger small mt-1">{errors["coveredArea"]}</div>
                                            )}
                                        </Form.Group></Col>

                                        <Col sm={12} md={3}>{/* Number of Floors */}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Number of Floors</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    min="1"
                                                    value={numFloors}
                                                    onChange={(e) => setNumFloors(parseInt(e.target.value))}
                                                />
                                            </Form.Group></Col>

                                        <Col sm={12} md={3}>{/* Material Type */}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Material Type</Form.Label>
                                                <Form.Select value={materialType} onChange={(e) => setMaterialType(e.target.value)}>
                                                    <option>Grey Structure</option>
                                                    <option>Finishing Only</option>
                                                    <option>Full Turnkey</option>
                                                </Form.Select>
                                            </Form.Group></Col>

                                        <Col sm={12} md={3}>{/* Construction Type */}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Construction type</Form.Label>
                                                <Form.Select value={constructionType} onChange={(e) => setConstructionType(e.target.value)}>
                                                    <option value="grey structure">Grey structure</option>
                                                    <option value="furnished">Furnished</option>
                                                </Form.Select>
                                            </Form.Group></Col>

                                        <Col sm={12} md={3}>{/* Construction Mode */}
                                            <Form.Group className="mb-3">
                                                <Form.Label>Construction mode</Form.Label>
                                                <Form.Select value={constructionMode} onChange={(e) => setConstructionMode(e.target.value)}>
                                                    <option value="with material">With material</option>
                                                    <option value="without material">Without material</option>
                                                </Form.Select>
                                            </Form.Group></Col>

                                        <Col sm={12} md={3}>{/* Additional Features */}
                                            <Form.Group className="mb-3">
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
                                                            <Form.Check
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
                                            </Form.Group></Col>
                                    </Row>
                                </>
                            )}
                            <Row className="g-3 justify-content-end">
                                <Col className="text-end">{/* Show more button */}
                                    {/* Buttons */}
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => setShowMore(!showMore)}
                                    >
                                        {showMore ? "Show less" : "Show more"}
                                    </Button>
                                    <Button variant="light" onClick={handleStartCalculation}>
                                        Start calculation
                                    </Button>
                                    <Button
                                        variant="dark"
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

                                </Col>
                            </Row>


                            {/* Tip */}
                            <div className="small mt-2">
                                Tip: Covered Area should be in the same unit as Area size.
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </InnerHeader>
            <section>
                <Container>
                    <h2>Popular Calculations</h2>
                    <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
                        {POPULAR_CALCULATIONS.map((calc, index) => (
                            <button
                                key={index}
                                onClick={() => handlePopularCalculation(calc)}
                                className={`px-3 py-2 border rounded text-sm whitespace-nowrap ${activePreset === calc.label
                                    ? 'bg-blue-100 border-blue-500'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                {calc.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}