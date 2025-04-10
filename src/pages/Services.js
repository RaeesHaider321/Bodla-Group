import React from 'react';
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';

import service1 from '../images/businessHub.jpg';
import service2 from '../images/businessHub.jpg';
import service3 from '../images/businessHub.jpg';
import service4 from '../images/businessHub.jpg';

const Services = () => {
  const navigate = useNavigate();

  // Sample services data
  const services = [
    { 
      id: 1, 
      title: 'Property Development', 
      description: 'Comprehensive property development services from concept to completion. We handle land acquisition, planning, design, and construction.',
      image: service1,
      highlights: [
        'Land acquisition and feasibility studies',
        'Architectural design and planning',
        'Construction management',
        'Quality assurance'
      ]
    },
    { 
      id: 2, 
      title: 'Construction Services', 
      description: 'High-quality construction services with a focus on durability, aesthetics, and timely delivery of projects.',
      image: service2,
      highlights: [
        'Residential and commercial construction',
        'Turnkey solutions',
        'Skilled workforce',
        'Modern construction techniques'
      ]
    },
    { 
      id: 3, 
      title: 'Interior Design', 
      description: 'Transform your spaces with our innovative interior design solutions that combine functionality with aesthetic appeal.',
      image: service3,
      highlights: [
        'Space planning',
        'Custom furniture design',
        'Material selection',
        'Lighting solutions'
      ]
    },
    { 
      id: 4, 
      title: 'Property Management', 
      description: 'Professional property management services to maintain and enhance the value of your real estate investments.',
      image: service4,
      highlights: [
        'Tenant management',
        'Maintenance coordination',
        'Financial reporting',
        'Legal compliance'
      ]
    }
  ];

  // Function to convert title into a slug
  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const handleServiceClick = (title) => {
    const serviceSlug = slugify(title);
    navigate(`/services/${serviceSlug}`);
  };

  const carouselItems = [
    {
      id: 1,
      imageSrc: service1,
      altText: "Property Development",
      titlePart1: "Our Services",
      titlePart2: "Building Excellence",
    },
    {
      id: 2,
      imageSrc: service2,
      altText: "Construction Services",
      titlePart1: "Our Services",
      titlePart2: "Quality Construction",
    },
    {
      id: 3,
      imageSrc: service3,
      altText: "Interior Design",
      titlePart1: "Our Services",
      titlePart2: "Creative Spaces",
    },
    {
      id: 4,
      imageSrc: service4,
      altText: "Property Management",
      titlePart1: "Our Services",
      titlePart2: "Professional Management",
    }
  ];

  return (
    <>
      <Carousel fade indicators={true} controls={false} interval={3000} pause={true}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <Image
              src={item.imageSrc}
              alt={item.altText}
              className="d-block w-100"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <Row className="justify-content-center align-items-center">
                <h1 data-aos="fade-up" data-aos-delay="100">
                  {item.titlePart1} <br />
                  <span className="fs-3">{item.titlePart2}</span>
                </h1>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <section className="py-5">
        <Container>
          <Row className='align-items-center mb-5'>
            <Col xs={12} md={9}>
              <h3 data-aos="fade-right">Our Services<br /><span data-aos="fade-right" data-aos-delay="200">Comprehensive Solutions for Your Needs</span></h3>
            </Col>
            <Col xs={12} md={3} className='text-end'>
              <div data-aos="fade-left" data-aos-delay="300">
                <BodlaButton text="Contact Us" icon={<Icons name="rightArrow" />} variant="primary" link="/contact" />
              </div>
            </Col>
          </Row>

          <Row className='gy-4'>
            {services.map((service, index) => (
              <Col xs={12} md={6} lg={3} key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card 
                  className="h-100 shadow-sm border-0 service-card" 
                  onClick={() => handleServiceClick(service.title)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Img 
                    variant="top" 
                    src={service.image} 
                    alt={service.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.description.substring(0, 100)}...
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <div className="d-flex align-items-center">
                      <span className="me-2">Learn more</span>
                      <Icons name="rightArrow" size={16} />
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Services Section */}
          <Row className="mt-5">
            <Col xs={12}>
              <div className="bg-light p-4 rounded-3">
                <h4 className="mb-4">Why Choose Our Services?</h4>
                <Row>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="shield" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Trusted Expertise</h6>
                        <p className="small text-muted">Years of experience in delivering quality services</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="quality" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Quality Assurance</h6>
                        <p className="small text-muted">Rigorous quality checks at every stage</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="clock" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Timely Delivery</h6>
                        <p className="small text-muted">We respect deadlines and deliver on time</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="support" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Customer Support</h6>
                        <p className="small text-muted">Dedicated support throughout your project</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;