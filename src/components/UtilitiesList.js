import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UtilitiesCard from "../components/UtilitiesCard";
import Icons from "../components/Icon";

const utilities = [
  { id: 1, icon: <Icons name="mathematics" />, title: "Area Unit Converter", link: "/AreaUnitConverter" },
  { id: 1, icon: <Icons name="dhamaps" />, title: "Maps DHA Multan", link: "/dhaMaps" },
  { id: 2, icon: <Icons name="excavator" />, title: "Construction Cost Calculator", link: "/ConstructionCostCalculator" },
  { id: 3, icon: <Icons name="unitPriceCalculator" />, title: "Unit Price Calculator", link: "" },
  { id: 4, icon: <Icons name="plotPriceCalculator" />, title: "Plot Price Calculator", link: "/PlotPriceCalculator" },
  { id: 5, icon: <Icons name="propertyFinder" />, title: "Property Finder", link: "" },
];

export default function UtilitiesList() {
  return (
    <section>
      <Container >
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12} md={8} data-aos="fade-up" data-aos-delay="200">
            <h2>Explore More on <span>Bodla Group</span></h2>
            <p>Plan smarter with Bodla Group—estimate construction costs, find the perfect plot, convert land measurements effortlessly, and discover your ideal property, all in one place.</p>
          </Col>
        </Row>

        {/* Utilities Cards with Animations */}
        <Row className="g-4 justify-content-end">
          {utilities.map((utility, index) => (
            <Col xs={12} md={4} key={utility.id} data-aos="fade-up" data-aos-delay={`${index * 150 + 300}`} >
              <UtilitiesCard icon={utility.icon} title={utility.title} link={utility.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
