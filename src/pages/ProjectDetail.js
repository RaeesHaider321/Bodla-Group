import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel, Card } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound'
// Import all possible project images
import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import businessHub from '../images/businessHub.jpg';
import golfViewRumanza from '../images/golfViewRumanza.jpg';
import bHomes from '../images/bHomes-logo.png';
import bHub from '../images/BHub-logo.png';
import oneD from '../images/OneD-logo.png';
import gvr from '../images/gvr-logo.png';
import dhaApproved from '../images/dhaApproved.png';

// Sample project details data
const projectDetails = {
  'business-hub': {
    id: 1,
    title: 'The First Multi-Purpose Mega Mall of Multan',
    spantitle:  'Business Hub',
    introTitle: 'The First Multi-Purpose Mega Mall of Multan',
    logo: bHub,
    dhaApproved: dhaApproved,
    background: businessHub,
    description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.',
    details: [
      'Prime commercial location in DHA Multan',
      'State-of-the-art infrastructure',
      'Modern architectural design',
      '24/7 security and maintenance',
      'High-end finishes and amenities'
    ],
    images: [businessHub, oneDestination, bodlaHomes8Marla, golfViewRumanza],
    location: 'DHA Multan, Pakistan',
    size: '5 Acres',
    status: 'Ongoing'
  },
  'one-destination': {
    id: 2,
    title: 'One Destination',
    spantitle: '',
    introTitle:'',
    logo: oneD,
    dhaApproved: dhaApproved,
    background: oneDestination,
    description: 'One Destination is a revolutionary residential project that combines modern living with comfort and convenience. Our vision is to create a community that offers everything you need within reach, making it your one and only destination for premium living.',
    details: [
      'Luxurious residential apartments',
      'World-class amenities including gym and swimming pool',
      'Green spaces and community areas',
      'Smart home features',
      'Prime location with easy access to major highways'
    ],
    images: [oneDestination, businessHub, golfViewRumanza, bodlaHomes8Marla],
    location: 'DHA Multan, Pakistan',
    size: '10 Acres',
    status: 'Completed'
  },
  'golf-view-rumanza': {
    id: 3,
    title: 'Golf View Rumanza',
    spantitle: '',
    introTitle:'',
    logo: gvr,
    dhaApproved: dhaApproved,
    background: golfViewRumanza,
    description: 'Golf View Rumanza offers an exclusive lifestyle with breathtaking views of the golf course. This premium project is designed for those who appreciate luxury living with a touch of nature and sports elegance.',
    details: [
      'Adjacent to Rumanza Golf Course',
      'Luxury villas and apartments',
      'Panoramic golf course views',
      'Premium clubhouse facilities',
      'Landscaped gardens and walking trails'
    ],
    images: [golfViewRumanza, oneDestination, businessHub, bodlaHomes8Marla],
    location: 'DHA Multan, Pakistan',
    size: '15 Acres',
    status: 'Upcoming'
  },
  'bodla-homes': {
    id: 4,
    title: 'Bodla Homes',
    spantitle: '',
    introTitle:'',
    logo: bHomes,
    dhaApproved: dhaApproved,
    background: bodlaHomes8Marla,
    description: 'Bodla Homes brings you affordable yet luxurious housing solutions with modern designs and premium finishes. Our 8 Marla project is perfect for families looking for comfort and value.',
    details: [
      '8 Marla modern houses',
      'Quality construction materials',
      'Thoughtful neighborhood design',
      'Community parks and playgrounds',
      'Affordable payment plans'
    ],
    images: [bodlaHomes8Marla, golfViewRumanza, oneDestination, businessHub],
    location: 'DHA Multan, Pakistan',
    size: '8 Marla Plots',
    status: 'Ongoing'
  }
};

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  const project = projectDetails[projectSlug];

  if (!project) {
    return <Container><NotFound /></Container>;
  }

  return (
    <>
      <section className='project-detail'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col xs={12} md={8}>
              <h2>{project.title} <span>{project.spantitle}</span></h2>
            </Col>
          </Row>
        </Container>
        <Container>
          {/* Hero Section with Carousel */}
          <Carousel className='mt-3' fade indicators={false} controls={false} interval={3000} pause={true}>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Image src={image} alt={`${project.title} - ${index + 1}`}
                  className="d-block w-100"
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <Container className='project-intro mt-5'>
          <Row className="mb-5 align-items-center">
            <Col xs={12} md={7}>
              <h3 className="mb-4">{project.introTitle}</h3>
              <p className="lead">{project.description}</p>
              <BodlaButton text="Book a Call"
                icon={<Icons name="rightArrow" />}
                link="/Contact" />
            </Col>
            <Col xs={12} md={5} className="text-md-end">
              <Row className='gy-3'>
                <Col xs={12} md={6}>
                <div className='project-dhaApproved'>
                  <Image src={project.dhaApproved} alt={`${project.title} Logo`} fluid style={{ maxHeight: '100px' }} />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                <div className='project-logo'>
                  <Image src={project.logo} alt={`${project.title} Logo`} fluid style={{ maxHeight: '100px' }} />
                </div>
                </Col>
                <Col xs={12} md={12} className='map'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9287473577783!2d71.55361441037263!3d30.296090006500197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cbd1167128b5%3A0x79d6c7b73dd41cef!2sBusiness%20Hub%2C%20DHA%20Multan!5e0!3m2!1sen!2s!4v1744012574158!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps location of ${project.title}`}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>



      {/* Project Details Section */}
      <section className="py-5">
        <Container>


          <Row className="gy-4">
            <Col xs={12} lg={8}>
              <h3 className="mb-4">Project Highlights</h3>
              <Row>
                {project.details.map((detail, index) => (
                  <Col xs={12} md={6} key={index} className="mb-3">
                    <div className="d-flex align-items-start">
                      <Icons name="checkCircle" className="me-2 mt-1 text-primary" />
                      <span>{detail}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col xs={12} lg={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="mb-4">Project Facts</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <strong>Location:</strong> {project.location}
                    </li>
                    <li className="mb-3">
                      <strong>Size:</strong> {project.size}
                    </li>
                    <li className="mb-3">
                      <strong>Status:</strong> {project.status}
                    </li>
                    <li className="mb-3">
                      <strong>Developer:</strong> Bodla Group
                    </li>
                  </ul>
                  <div className="d-grid gap-2">
                    <BodlaButton
                      text="Book Now"
                      icon={<Icons name="rightArrow" />}
                      variant="primary"
                      link="/contact"
                    />
                    <BodlaButton
                      text="Download Brochure"
                      icon={<Icons name="download" />}
                      variant="outline-primary"
                      link="#"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Gallery Section */}
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className="mb-4">Gallery</h3>
              <Row className="g-3">
                {project.images.map((image, index) => (
                  <Col xs={6} md={3} key={index}>
                    <Image
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      fluid
                      className="rounded shadow-sm"
                      style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <h3>Interested in {project.title}?</h3>
              <p className="mb-md-0">Contact our sales team for more information and booking details.</p>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <BodlaButton
                text="Contact Sales"
                icon={<Icons name="phone" />}
                variant="primary"
                link="/contact"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;