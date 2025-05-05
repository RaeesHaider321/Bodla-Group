import React from 'react';
import { Container, Row, Col, Card, Carousel, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';

import service1 from '../images/businessHub.jpg';
import service2 from '../images/businessHub.jpg';
import service3 from '../images/businessHub.jpg';
import service4 from '../images/businessHub.jpg';


import landAcquisition from '../images/landAcquisition.jpg';
import landTrading from '../images/landPlotTrading.avif';
import construction from '../images/construction.jpg';
import development from '../images/construction.jpg';
import constructionMaterial from '../images/constructionMaterial.jpg';
import marketing from '../images/marketing.jpg';

const Services = () => {
  const navigate = useNavigate();

  // Sample services data
  const services = [
    {
      id: 1,
      icon: "landProvider",
      title: 'Land Acquisition',
      description: 'Precise identification and procurement of optimum location that ensures development potential and value appreciation.',
      image: service1,
    },
    {
      id: 2,
      icon: "developers",
      title: 'Development',
      description: 'Comprehensive planning and execution of residential & commercial projects, forming progressive & future-focused structures. ',
      image: service2,
    },
    {
      id: 3,
      icon: "plotTrading",
      title: 'Plots Trading',
      description: 'Facilitating transparent and efficient buying and selling of residential and commercial plots, catering to diverse investment needs.',
      image: service3,
    },
    {
      id: 4,
      icon: "constructors",
      title: 'Construction',
      description: 'Employing quality materials and skilled labor to build robust and aesthetically pleasing structures, adhering to timelines and standards.',
      image: service4,
    },
    {
      id: 5,
      icon: "constructionMaterials",
      title: 'Finishing Materials',
      description: 'Sourcing and supplying advanced, durable interior and exterior finishes that enhance thermal comfort for elegant and lasting spaces.',
      image: service4,
    },
    {
      id: 6,
      icon: "propertyMarketing",
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
      imageSrc: landAcquisition,
      altText: "Land Acquisition",
      title: "Land Acquisition",
      // caption: "Precise Location Procurement – Investor Centric Approach – Growth Driven Potential",
    },
    {
      id: 2,
      imageSrc: development,
      altText: "Development",
      title: "Development",
      // caption: "Aesthetically Inspired - Refined Material - Durability In-built",
    },
    {
      id: 3,
      imageSrc: landTrading,
      altText: "Plots Trading",
      title: "Plots Trading",
      // caption: "Smart Trading",
    },
    {
      id: 4,
      imageSrc: construction,
      altText: "Construction",
      title: "Construction Supplies",
      // caption: "Sustainable Construction ",
    },
    {
      id: 5,
      imageSrc: constructionMaterial,
      altText: "Finishing Materialst",
      title: "Finishing Materials",
      // caption: "Subtle Finishes",
    },
    {
      id: 6,
      imageSrc: marketing,
      altText: "Project Marketing",
      title: "Project Marketing",
      // caption: "Selling Stories - Making Brands Visible - Targeted Exposure",
    }
  ];

  const setsApart = [
    {
      icon: "shield",
      title: "Leading Legacy",
      description: "Rooted in over a decade of experience."
    },
    {
      icon: "quality",
      title: "Uncompromised Quality",
      description: "Setting the bar of highest standard"
    },
    {
      icon: "clock",
      title: "Customer-centric Excellence",
      description: "Prioritizing your satisfaction at the heart of every project."
    },
    {
      icon: "support",
      title: "Innovation Driven",
      description: "Redefining living with ideas ahead of their time."
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
                  {item.title} <br />
                  <span className="fs-3">{item.caption}</span>
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
                  <Card.Body>
                    <div className='service-icon mb-4'><Icons name={service.icon} /></div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                      {service.description.substring(0, 150)}...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Services Section */}
          <Row className="mt-5">

            <Col xs={12}>
              <h4 className="mb-4">What sets Bodla Group apart?</h4>
              <Row className="setsApart">
                {setsApart.map((part, index) => (
                  <Col key={index} xs={12} md={6} lg={3} className="mb-3 d-flex">
                    <Card className="w-100 d-flex flex-column">
                      <Card.Body className="d-flex align-items-start">
                        <div className="me-3">
                          <Icons name={part.icon} />
                        </div>
                        <div className="content">
                          <h6>{part.title}</h6>
                          <p className="small mb-0">{part.description}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;