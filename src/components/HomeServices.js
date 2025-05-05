import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from "./CardComponent";
import Icons from "../components/Icon";

const services = [
  { id: 1, title: "Land Acquisition", icon:"landProvider", description: "With a keen eye for potential growth, we navigate complex landscapes to secure a prime location that perfectly integrates with investors' long-term vision and strategic investment needs.", link: "/services/land-acquisition" },
  { id: 2, title: "Development", icon:"developers", description: "Synergizing with community needs and market trends, we leverage cutting-edge technology to optimize layouts and develop smart living integrations.", link: "/services/development" },
  { id: 3, title: "Plots Trading", icon:"plotTrading", description: "With the foresight of a seasoned strategist, we anticipate market shifts, connecting investors with opportunities perfectly poised for exceptional growth and shaping the future landscape.", link: "/services/plots-trading" },
  { id: 4, title: "Construction", icon:"constructors", description: "Beyond extraordinary construction lies a commitment to promising quality. Opting sustainable materials and advanced technology, developing infrastructures that are built to endure and stands the test of time.", link: "/services/construction" },
  { id: 5, title: "Finishing Materials", icon:"constructionMaterials", description: "By leveraging expert design insights and pre-cast technology for in-house finishing materials, we apt pragmatic approach that elevates the functionality, aesthetics, and sustainability in your way of living.", link: "/services/finishing-materials" },
  { id: 6, title: "Project Marketing", icon:"propertyMarketing", description: "Defining the potential and positioning of your project, we incorporate high-impact marketing tactics to creative a strong narrative and highlight project brilliance.", link: "/services/project-marketing" },
];

export default function HomeServices() {
  return (
    <Container>
      <h2 className='text-start text-md-end'>Our Signature <span>Offerings</span></h2>
      <Row className="gy-3 mb-5">
        {services.map((service, index) => (
          <Col xs={12} md={4} key={service.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <CardComponent
              serviceIcon={<Icons name={service.icon} />}
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
