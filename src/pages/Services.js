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
      title: 'Land Acquisition', 
      description: 'Precise identification and procurement of optimum location that ensures development potential and value appreciation.',
      image: service1,
   },
    { 
      id: 2, 
      title: 'Development ', 
      description: 'Comprehensive planning and execution of residential & commercial projects, forming progressive & future-focused structures. ',
      image: service2,
  },
    { 
      id: 3, 
      title: 'Plots Trading', 
      description: 'Facilitating transparent and efficient buying and selling of residential and commercial plots, catering to diverse investment needs.',
      image: service3,
   },
    { 
      id: 4, 
      title: 'Construction', 
      description: 'Employing quality materials and skilled labor to build robust and aesthetically pleasing structures, adhering to timelines and standards.',
      image: service4,
    },
    { 
      id: 5, 
      title: 'Finishing Materials', 
      description: 'Sourcing and supplying advanced, durable interior and exterior finishes that enhance thermal comfort for elegant and lasting spaces.',
      image: service4,
    },
    { 
      id: 6, 
      title: 'Project Marketing', 
      description: 'Implementing innovative strategies to showcase project features and benefits, reaching target audiences and driving sales effectively.',
      image: service4,
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
      titlePart2: "Strategic Acquisition",
    },
    {
      id: 2,
      imageSrc: service2,
      altText: "Construction Services",
      titlePart1: "Our Services",
      titlePart2: "Scalable Development",
    },
    {
      id: 3,
      imageSrc: service3,
      altText: "Interior Design",
      titlePart1: "Our Services",
      titlePart2: "Smart Trading",
    },
    {
      id: 4,
      imageSrc: service4,
      altText: "Property Management",
      titlePart1: "Our Services",
      titlePart2: "Sustainable Construction ",
    },
    {
      id: 4,
      imageSrc: service4,
      altText: "Property Management",
      titlePart1: "Our Services",
      titlePart2: "Subtle Finishes",
    },
    {
      id: 4,
      imageSrc: service4,
      altText: "Property Management",
      titlePart1: "Our Services",
      titlePart2: "Standout Savvy Marketing",
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
              <h3 data-aos="fade-right">Our Core Services <br /><span data-aos="fade-right" data-aos-delay="200">Precisely tailored around your needs</span></h3>
            </Col>
            <Col xs={12} md={3} className='text-end'>
              <div data-aos="fade-left" data-aos-delay="300">
                <BodlaButton text="Quick Contact!" icon={<Icons name="rightArrow" />} variant="primary" link="/contact" />
              </div>
            </Col>
          </Row>

          <Row className='gy-4'>
            {services.map((service, index) => (
              <Col xs={12} md={6} lg={4} key={service.id} data-aos="fade-up" data-aos-delay={index * 100}>
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
                    <Card.Text>
                      {service.description.substring(0, 100)}...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Services Section */}
          <Row className="mt-5">
            <Col xs={12}>
              <div className="p-4 rounded-3">
                <h4 className="mb-4">What sets Bodla Group apart?</h4>
                <Row>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="shield" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Leading Legacy </h6>
                        <p className="small">Rooted in over a decade of experience.</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="quality" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Uncompromised Quality</h6>
                        <p className="small">Setting the bar of highest standard</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="clock" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Customer-centric Excellence </h6>
                        <p className="small">Prioritizing your satisfaction at the heart of every project.</p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="support" className="me-2 mt-1 text-primary" size={24} />
                      <div>
                        <h6>Innovation Driven</h6>
                        <p className="small">Redefining living with ideas ahead of their time.</p>
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