import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UtilitiesCard from "../components/UtilitiesCard";
import Icons from "../components/Icon"; // Import Icons component

const utilities = [
  { id: 1, icon: <Icons name="mathematics" />, title: "Area Unit Converter", link: "/Services" },
  { id: 2, icon: <Icons name="calculator" />, title: "Construction Cost Calculator", link: "/Services" },
  { id: 3, icon: <Icons name="propertyMarketing" />, title: "Unit Price Calculator", link: "/Services" },
  { id: 4, icon: <Icons name="plotPriceCalculator" />, title: "Plot Price Calculator", link: "/Services" },
  { id: 5, icon: <Icons name="propertyFinder" />, title: "Property Finder", link: "/Services" },
];

export default function UtilitiesList() {
  return (
    <section>
      <Container >
        {/* Heading Section */}
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12} md={8} data-aos="fade-up" data-aos-delay="200">
            <h2>Explore More on <br /><span>Bodla Group</span></h2>
            <p>Duis vel eros non libero blandit iaculis. Suspendisse potenti. Maecenas eu lorem et sapien accumsan pretium. Donec dolor mauris</p>
          </Col>
        </Row>

        {/* Utilities Cards with Animations */}
        <Row className="g-4 justify-content-end">
          {utilities.map((utility, index) => (
            <Col
              xs={12}
              md={4}
              key={utility.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 150 + 300}`} // Staggered delay: 300ms, 450ms, 600ms, etc.
            >
              <UtilitiesCard icon={utility.icon} title={utility.title} link={utility.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
