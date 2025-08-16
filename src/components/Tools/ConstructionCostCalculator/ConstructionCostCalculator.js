// ConstructionCostCalculator.jsx
import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Form, } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import InnerHeader from "../../InnerHeaderWithCard";
import headerBg from '../../../images/header-bg.jpg';
import '../../../components/InnerHeader.css';
import Icons from "../../../components/Icon";
import Button from '../../../components/Button';

import CraftedProjects from '../../CraftedProjects';

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


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

    const handleShareResults = () => {
        if (!result) return;

        const shareText = `Construction Cost Estimate:
  - Property: ${result.areaSize} ${result.areaUnit} ${result.propertyType}
  - Total Cost: ${formatCurrency(result.totalCost)}
  - Rate: ${formatCurrency(result.rate)} per sqft
  - Quality: ${result.constructionQuality}
  - Type: ${result.constructionType} (${result.constructionMode})
  
  View full details at: ${window.location.href}`;

        if (navigator.share) {
            navigator.share({
                title: 'Construction Cost Estimate',
                text: shareText,
                url: window.location.href,
            }).catch(err => {
                console.error('Error sharing:', err);
                // Fallback to copy to clipboard
                navigator.clipboard.writeText(shareText);
                alert('Results copied to clipboard!');
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(shareText);
            alert('Results copied to clipboard!');
        }
    };

    const resultCardRef = useRef(null); // Add this line

    const handleDownloadPDF = async () => {
        if (!result || !resultCardRef.current) return;

        try {
            // Create a temporary container for PDF content
            const pdfContainer = document.createElement('div');
            pdfContainer.style.position = 'fixed';
            pdfContainer.style.left = '0';
            pdfContainer.style.top = '0';
            pdfContainer.style.width = '800px';
            pdfContainer.style.padding = '20px';
            pdfContainer.style.backgroundColor = 'white';
            pdfContainer.style.zIndex = '10000';

            // Add title
            const title = document.createElement('h2');
            title.textContent = `Construction Cost Estimate - ${new Date().toLocaleDateString()}`;
            title.style.textAlign = 'center';
            title.style.marginBottom = '20px';
            pdfContainer.appendChild(title);

            // Clone the result card content
            const resultCard = resultCardRef.current.cloneNode(true);

            // Remove the PDF and Share buttons from the clone
            const buttons = resultCard.querySelector('.pdf-buttons');
            if (buttons) {
                buttons.remove();
            }

            pdfContainer.appendChild(resultCard);

            // Add the chart separately with higher resolution
            const chartContainer = document.createElement('div');
            chartContainer.style.width = '600px';
            chartContainer.style.height = '400px';
            chartContainer.style.margin = '0 auto';

            const chartCanvas = document.querySelector('canvas');
            if (chartCanvas) {
                const newCanvas = document.createElement('canvas');
                newCanvas.width = chartCanvas.width * 2;
                newCanvas.height = chartCanvas.height * 2;
                const ctx = newCanvas.getContext('2d');
                ctx.scale(2, 2);
                ctx.drawImage(chartCanvas, 0, 0);
                chartContainer.appendChild(newCanvas);
            }

            pdfContainer.appendChild(chartContainer);

            // Add to document
            document.body.appendChild(pdfContainer);

            // Generate PDF
            const canvas = await html2canvas(pdfContainer, {
                scale: 2,
                logging: true,
                useCORS: true,
                allowTaint: true
            });

            // Clean up
            document.body.removeChild(pdfContainer);

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`construction-cost-${result.areaSize}-${result.areaUnit}.pdf`);
        } catch (error) {
            console.error('PDF generation error:', error);
            alert('Failed to generate PDF. Please try again or check the console for errors.');
        }
    };

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
        if (!areaSize) return; // Guard against empty values

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

        const baseRate = RATES[rateType]?.[constructionQuality]?.[constructionMode];
        if (!baseRate) return; // Guard against undefined rates

        // Apply floor multiplier (10% increase per floor above 1)
        const floorMultiplier = 1 + (Math.max(1, numFloors) - 1) * 0.1;

        // Apply additional features multipliers
        let featureMultiplier = 1;
        Object.entries(additionalFeatures).forEach(([key, value]) => {
            if (value && FEATURE_MULTIPLIERS[key]) {
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

    useEffect(() => {
        if (activePreset) {
            calculateCost();
        }
    }, [activePreset, areaSize, areaUnit, constructionQuality, materialType,
        constructionType, constructionMode, numFloors, additionalFeatures]);

    // Then simplify handlePopularCalculation to just update state:
    function handlePopularCalculation(preset) {
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
                        {/* <button
                            className="mb-4 px-3 py-1 rounded border text-sm hover:bg-gray-100"
                            onClick={() => setPage("form")}
                        >
                            ← Edit inputs
                        </button> */}
                        <Button variant="light" onClick={() => setPage("form")} > <i>← Edit inputs</i></Button>
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
                                            <Row className="justify-content-center">
                                                <Col className="text-center d-flex gap-3">
                                                    <Button variant="light" onClick={handleStartCalculation} icon={<Icons name="rightArrow"/>}> <i>Recalculate</i></Button>
                                                    <Button variant="primary" onClick={() => {setAreaSize("");setCoveredArea("");setErrors({}); setActivePreset(null);}} icon={<Icons name="rightArrow" />}> <i>Reset</i></Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={8}>
                                <div className="areaUnitConverter">
                                    <Card className="mb-4 p-4 " ref={resultCardRef}>
                                        <div className="d-flex justify-content-end gap-2 mb-3 pdf-buttons">
                                            <Button variant="light" onClick={handleShareResults} icon={<Icons name="rightArrow" />}> <i>Share Results</i></Button>
                                            <Button variant="light" onClick={handleDownloadPDF} icon={<Icons name="rightArrow" />}> <i>Download</i></Button>
                                        </div>
                                        <div className="mb-2">
                                            <strong>Property Details: </strong>
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
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <h5>Breakdown of Overall Construction Cost By Percentage (PKR)</h5>
                                    <Row className="aligh-items-center mt-4">
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
                        <Row className="mb-4">
                            <h3>Disclaimer</h3>
                            <p>This cost is for 3 Marla double storey House. All the information in this calculator is published for general information purpose only. All product prices are subject to change according to the market fluctuation and may not be 100% accurate.</p>
                        </Row>
                        <h2>Popular Calculations</h2>
                        <Row>
                            {POPULAR_CALCULATIONS.map((calc, index) => (
                                <Col sm={6} md={4} lg={3} key={index} className="mb-3">
                                    <Card
                                        onClick={() => handlePopularCalculation(calc)}
                                        className={`cursor-pointer ${activePreset === calc.label
                                            ? 'bg-primary text-white'
                                            : ''}`}
                                    >
                                        <Card.Body className="text-center">
                                            {calc.label}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <CraftedProjects />
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
                                    <Button variant="link" onClick={() => setShowMore(!showMore)} > <i>{showMore ? "Show less" : "Show more"}</i></Button>
                                    <Button variant="light" onClick={handleStartCalculation} icon={<Icons name="rightArrow" />}><i>Start calculation</i></Button>
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
                    <Row>
                        {POPULAR_CALCULATIONS.map((calc, index) => (
                            <Col sm={6} md={4} lg={3} key={index} className="mb-3">
                                <Card
                                    onClick={() => handlePopularCalculation(calc)}
                                    className={`cursor-pointer ${activePreset === calc.label
                                        ? 'bg-primary text-white'
                                        : ''}`}
                                >
                                    <Card.Body className="text-center">
                                        {calc.label}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}