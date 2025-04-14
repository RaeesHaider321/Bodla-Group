import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import CardComponent from "./CardComponent";

const services = [
  { id: 1, title: "Constructors", description: "Building high-quality residential and commercial projects with expert craftsmanship.", link: "/Services" },
  { id: 2, title: "Land Providers", description: "Connecting investors with prime real estate locations for development and growth.", link: "/Services" },
  { id: 3, title: "Developers", description: "Designing and executing modern infrastructure projects with innovative solutions.", link: "/Services" },
  { id: 4, title: "Finishing Materials", description: "Supplying top-tier finishing materials to enhance the aesthetics and durability of properties.", link: "/Services" },
  { id: 5, title: "Plot Trading", description: "Facilitating seamless buying and selling of plots with secure and transparent transactions.", link: "/Services" },
  { id: 6, title: "Marketing", description: "Promoting real estate ventures through strategic marketing and digital outreach.", link: "/Services" },
];

export default function HomeServices() {
  return (
    <Container>
      <h2 className='text-start text-md-end'>Our Areas of <span>Expertise</span></h2>
      <Row className="gy-3">
        {services.map((service, index) => (
          <Col xs={12} md={4} key={service.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <CardComponent
              serviceIcon={<FaArrowRight />}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
