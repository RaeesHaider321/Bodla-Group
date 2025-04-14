import React from 'react';
import { Container, Row, Col, Image, Carousel, Card, CardBody } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';

import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import businessHub from '../images/businessHub.jpg';
import golfViewRumanza from '../images/golfViewRumanza.jpg';


import bHomes from '../images/bHomes-logo.png';
import bHub from '../images/BHub-logo.png';
import oneD from '../images/OneD-logo.png';
import gvr from '../images/gvr-logo.png';

const Projects = () => {
  const navigate = useNavigate();

  // Sample project data
  const projects = [
    { id: 1, background: businessHub, logo: bHub, title: 'Business Hub', description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.' },
    { id: 2, background: oneDestination, logo: oneD, title: 'One Destination', description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.' },
    { id: 3, background: golfViewRumanza, logo: gvr, title: 'Golf View Rumanza', description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.' },
    { id: 4, background: bodlaHomes8Marla, logo: bHomes, title: 'Bodla Homes', description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.' },
  ];

  // Function to convert title into a slug
  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const handleProjectClick = (title) => {
    const projectSlug = slugify(title);
    navigate(`/projects/${projectSlug}`);
  };

  const carouselItems = [
    {
      id: 1,
      imageSrc: oneDestination,
      altText: "Second slide",
      titlePart1: "One Destination",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 2,
      imageSrc: bodlaHomes8Marla,
      altText: "Second slide",
      titlePart1: "Bodla Homes",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 3,
      imageSrc: businessHub,
      altText: "Third slide",
      titlePart1: "Business Hub",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 4,
      imageSrc: golfViewRumanza,
      altText: "Fourth slide",
      titlePart1: "Golf View Rumanza",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
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
              {item.simpleLayout ? (
                <>
                  <h3>{item.titlePart1}</h3>
                  <p>{item.description}</p>
                </>
              ) : (
                <Row className="justify-content-center align-items-center">
                  <h1 data-aos="fade-up" data-aos-delay="100">
                      {item.titlePart1} 
                    </h1>
                </Row>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <section>
        <Container>
          <Row className='align-items-center mb-5'>
            <Col xs={12} md={9}>
              <h3 data-aos="fade-right">Projects<br /><span data-aos="fade-right" data-aos-delay="200">Innovative Designs, Seamless Experiences</span></h3>
            </Col>
            <Col xs={12} md={3} className='text-end'>
              <div data-aos="fade-left" data-aos-delay="300">
                <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} variant="primary" link="/" />
              </div>
            </Col>
          </Row>

          <Row className='projects gy-4'>
            {projects.map((project, index) => (
              <Col xs={12} md={12} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div onClick={() => handleProjectClick(project.title)} style={{ cursor: 'pointer' }}>
                  <Row className='gy-4'>
                    {index % 2 === 0 ? (
                      <>
                        <Col xs={12} md={4} className="order-md-1">
                          <div className="project-thumb" data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
                            <div className='image-container' style={{ backgroundImage: `url(${project.background})` }}>
                              <Image src={project.logo} alt={project.title} />
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} md={8} className="order-md-2">
                          <div className="project-description h-100" data-aos="fade-left" data-aos-delay={index * 100 + 200}>
                            <div className='content'>
                              <h4>{project.title}</h4>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col xs={12} md={8} className="order-md-1">
                          <div className="project-description h-100" data-aos="fade-right" data-aos-delay={index * 100 + 200}>
                            <div className='content'>
                              <h4>{project.title}</h4>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} md={4} className="order-md-2">
                          <div className="project-thumb" data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
                            <div className='image-container' style={{ backgroundImage: `url(${project.background})` }}>
                              <Image src={project.logo} alt={project.title} />
                            </div>
                          </div>
                        </Col>
                      </>
                    )}
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {/* Projects Map */}
        <Container className='mt-4'>
          <Card>
            <CardBody>
              <h2>View Projects  On Map</h2>
              <p>Innovative Designs, Seamless Experiences</p>
              <Row>
                <Col md={12}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9287473577783!2d71.55361441037263!3d30.296090006500197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cbd1167128b5%3A0x79d6c7b73dd41cef!2sBusiness%20Hub%2C%20DHA%20Multan!5e0!3m2!1sen!2s!4v1744012574158!5m2!1sen!2s"
                    width="100%"
                    height="350px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps location of Bodla Bulders, Bodla Group Business Hub, DHA Multan"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Projects;