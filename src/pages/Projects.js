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
    { id: 1, 
      background: businessHub, 
      logo: bHub, 
      title: 'Business Hub', 
      description: 'With Business Hub, reimagine the urban living with a dynamic multi-feature first grandiose mall of DHA Multan, residing adjacent to DHA Head Office, on 300ft wide Main Boulevard, ensuring its visibility and accessibility. Business Hub, a modernist 7-storey edifice stretches over an area of 18-kanal, integrating a perfect blend of expansive commercial outlets, marvelous offices and posh 1, 2, 3 – Bedroom Apartments precisely designed to keep pace with the evolving preferences of modern market. The mesmerizing views diligently fuses with the nexus of business opportunities, Central Business Square, creating a lifestyle beyond imagination. ', 
    },
    { id: 2, 
      background: oneDestination, 
      logo: oneD, 
      title: 'One Destination',
      description: 'In One Destination, experience the essence of contemporary retail haven at the most strategic location of DHA Multan, positioned in vicinity to Arena, Food Court, DHA Villas, Askari Villas, and DHA Commercial Arcade on 300ft-wide Main Boulevard, ensuring unmatched accessibility.',
      secondDescription: 'One Destination goes beyond the ordinary, blending modern architectural brilliance with exquisite retreat. Our impeccable 4-storey project expands over an area of 2.78 acres, and is thoroughly designed to cover your multitude of choices.  One Destination features a fusion of Brand Outlets, A Digital Hub and Gold Souk. So, embrace your future with comfort at ONE DESTINATION.', 
    },  
    { id: 3, 
      background: bodlaHomes8Marla, 
      logo: bHomes, 
      title: 'Bodla Homes', 
      description: 'Bodla Builders proudly presents Bodla Homes in Sector "V" of DHA Multan, offering contemporary living in its 5.2-Marla and 8-Marla Villas. The 5.2 Marla villas (2220 sq.ft.) feature 4 bedrooms, spacious car parking, a rooftop BBQ, and solar panel space.The 8-Marla villas (2905 sq.ft.) are designed for luxury, featuring 5 bedrooms, 2-car parking, a backyard service area, a rooftop BBQ space, and solar panel provision.',
      secondDescription:'Both villa categories are ideally located near Parks, a Masjid, Community Facilities, a 150ft wide road, Health & Education City, and Shah Shams Tabraiz Gate, offering complete luxury and convenience. ', 
    },
    { id: 4, 
      background: golfViewRumanza, 
      logo: gvr, 
      title: 'Golf View Rumanza', 
      description: 'Golf View Rumanza - DHA Multan is a premier apartment and commercial complex offering breathtaking views of Pakistan’s first Championship Signature 18-hole golf course, ‘Rumanza.’ Situated in one of the country’s most prestigious communities, this project spans 7.5 kanal and rises across 12 storeys.',
      secondDescription:'With a mix of luxurious residential apartments and penthouses designed for an elite lifestyle, as well as commercial spaces that provide a prime location for businesses, Golf View Rumanza offers a unique opportunity for both residents and retailers to grow forward in a vibrant, upscale community.', 
    },
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
      logo: oneD,
      altText: "Second slide",
      titlePart1: "One Destination",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 2,
      imageSrc: bodlaHomes8Marla,
      logo: bHomes,
      altText: "Second slide",
      titlePart1: "Bodla Homes",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 3,
      imageSrc: businessHub,
      logo: bHub,
      altText: "Third slide",
      titlePart1: "Business Hub",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    },
    {
      id: 4,
      imageSrc: golfViewRumanza,
      logo: gvr,
      altText: "Fourth slide",
      titlePart1: "Golf View Rumanza",
      titlePart2: "Your Title Part 2",
      simpleLayout: false
    }
  ];

  return (
    <>
    <div className='project-hero'>
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
                  <Image src={item.logo} alt={item.title} />
                  <h1 data-aos="fade-up" data-aos-delay="100">
                      {item.titlePart1} 
                    </h1>
                </Row>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <section>
        <Container>
          <Row className='align-items-center mb-5'>
            <Col xs={12} md={9}>
              <h3 data-aos="fade-right">Projects<br /><span data-aos="fade-right" data-aos-delay="200">Our Portfolio of Eminent Projects</span></h3>
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
                              <p>{project.secondDescription}</p>
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
              <h2>Locate our Projects on Map</h2>
              <Row>
                <Col md={12}>
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1YNuh7UDSkSH5G9rC3CXM52j_uytYDgQ&ehbc=2E312F&noprof=1" width="100%" height="380"></iframe>
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