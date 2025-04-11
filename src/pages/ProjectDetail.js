import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel, Card, CardBody } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound';

// Project Images (import all projects' images here)
import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import businessHub from '../images/businessHub.jpg';
import golfViewRumanza from '../images/golfViewRumanza.jpg';
import bHomes from '../images/bHomes-logo.png';
import bHub from '../images/BHub-logo.png';
import oneD from '../images/OneD-logo.png';
import gvr from '../images/gvr-logo.png';
import dhaApproved from '../images/dhaApproved.png';
import virtualtour from '../images/virtual-tour.jpg';
import floor1 from '../images/floor1.jpg';
import floor2 from '../images/floor2.jpg';
import floor3 from '../images/floor3.jpg';
import floor4 from '../images/floor4.jpg';
import sectorV from '../videos/sector-v.mp4';



// Project Data Template
const projectTemplate = {
  id: 0,
  title: 'Project Title',
  spantitle: 'Highlighted Title',
  introTitle: 'Introductory Title',
  logo: '', // project logo image
  dhaApproved: dhaApproved,
  background: '', // main background image
  description: 'Project description goes here...',
  amenities: [],
  images: [], // array of project images
  location: 'Project Location',
  mapEmbedUrl: '', // Google Maps embed URL
  size: 'Project Size',
  status: 'Project Status',
  video: sectorV, // default video
  floorPlans: [], // array of floor plan images
  virtualTour: virtualtour,
  nearbyPlaces: [
    'Place 1',
    'Place 2',
    'Place 3',
    // Add more nearby places
  ]
};

// Project Details Data
const projectDetails = {
  'business-hub': {
    ...projectTemplate,
    id: 1,
    title: 'The First Multi-Purpose Mega Mall of Multan',
    spantitle: 'Business Hub',
    introTitle: 'The First Multi-Purpose Mega Mall of Multan',
    logo: bHub,
    background: businessHub,
    description: 'While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning...',
    amenities: [
      {
        icon: 'mosque', // name of the icon from your Icons component
        title: 'Mosque',
      },
      {
        icon: 'mosque',
        title: '24 Hour Security',
      },
      {
        icon: 'mosque',
        title: '24 Hours Power Backup',
      },
      {
        icon: 'mosque',
        title: 'High Speed Elevators',
      },
      {
        icon: 'mosque',
        title: 'Fire Fighting System',
      },
      {
        icon: 'mosque',
        title: 'First Aid Facility',
      },
      {
        icon: 'mosque',
        title: 'Food Court',
      },
      {
        icon: 'mosque',
        title: 'Air Conditioned Common Areas',
      },
      {
        icon: 'mosque',
        title: 'Area Unit Converter',
      }
    ],
    images: [businessHub, oneDestination, bodlaHomes8Marla, golfViewRumanza],
    floorPlans: [floor1, floor1, floor1, floor1], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9287473577783!2d71.55361441037263!3d30.296090006500197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cbd1167128b5%3A0x79d6c7b73dd41cef!2sBusiness%20Hub%2C%20DHA%20Multan!5e0!3m2!1sen!2s!4v1744012574158!5m2!1sen!2s',
    size: '5 Acres',
    status: 'Ongoing'
  },
  'one-destination': {
    ...projectTemplate,
    id: 2,
    title: 'One Destination',
    spantitle: 'One Destination',
    introTitle: 'One Destination',
    logo: oneD,
    background: oneDestination,
    amenities: [
      {
        icon: 'mosque', // name of the icon from your Icons component
        title: 'Mosque',
      },
      {
        icon: 'mosque',
        title: '24 Hour Security',
      },
      {
        icon: 'mosque',
        title: '24 Hours Power Backup',
      },
      {
        icon: 'mosque',
        title: 'High Speed Elevators',
      },
      {
        icon: 'mosque',
        title: 'Fire Fighting System',
      },
      {
        icon: 'mosque',
        title: 'First Aid Facility',
      },
      {
        icon: 'mosque',
        title: 'Food Court',
      },
      {
        icon: 'mosque',
        title: 'Air Conditioned Common Areas',
      },
      {
        icon: 'mosque',
        title: 'Area Unit Converter',
      }
    ],
    images: [oneDestination, businessHub, golfViewRumanza, bodlaHomes8Marla],
    floorPlans: [floor2, floor2, floor2, floor2], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0517764215074!2d71.50832761037252!3d30.292587606667322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cb007db59bfd%3A0x6314d83414defd9f!2sOne%20Destination!5e0!3m2!1sen!2s!4v1744365518177!5m2!1sen!2s',
    size: '10 Acres',
    status: 'Completed'
  },
  'golf-view-rumanza': {
    ...projectTemplate,
    id: 3,
    title: 'Golf View Rumanza',
    logo: gvr,
    background: golfViewRumanza,
    amenities: [
      {
        icon: 'mosque', // name of the icon from your Icons component
        title: 'Mosque',
      },
      {
        icon: 'mosque',
        title: '24 Hour Security',
      },
      {
        icon: 'mosque',
        title: '24 Hours Power Backup',
      },
      {
        icon: 'mosque',
        title: 'High Speed Elevators',
      },
      {
        icon: 'mosque',
        title: 'Fire Fighting System',
      },
      {
        icon: 'mosque',
        title: 'First Aid Facility',
      },
      {
        icon: 'mosque',
        title: 'Food Court',
      },
      {
        icon: 'mosque',
        title: 'Air Conditioned Common Areas',
      },
      {
        icon: 'mosque',
        title: 'Area Unit Converter',
      }
    ],
    images: [golfViewRumanza, oneDestination, businessHub, bodlaHomes8Marla],
    floorPlans: [floor3, floor3, floor3, floor3], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9093273726107!2d71.53041514290199!3d30.32509684042012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cb1fe0e87887%3A0x461b3cbc40c9938!2sRumanza%20Golf%20%26%20Country%20Club!5e0!3m2!1sen!2s!4v1744365762722!5m2!1sen!2s',
    size: '15 Acres',
    status: 'Upcoming'
  },
  'bodla-homes': {
    ...projectTemplate,
    id: 4,
    title: 'Bodla Homes',
    logo: bHomes,
    background: bodlaHomes8Marla,
    description: 'Bodla Homes brings you affordable yet luxurious housing solutions with modern designs and premium finishes...',
    amenities: [
      {
        icon: 'mosque', // name of the icon from your Icons component
        title: 'Mosque',
      },
      {
        icon: 'mosque',
        title: '24 Hour Security',
      },
      {
        icon: 'mosque',
        title: '24 Hours Power Backup',
      },
      {
        icon: 'mosque',
        title: 'High Speed Elevators',
      },
      {
        icon: 'mosque',
        title: 'Fire Fighting System',
      },
      {
        icon: 'mosque',
        title: 'First Aid Facility',
      },
      {
        icon: 'mosque',
        title: 'Food Court',
      },
      {
        icon: 'mosque',
        title: 'Air Conditioned Common Areas',
      },
      {
        icon: 'mosque',
        title: 'Area Unit Converter',
      }
    ],
    images: [bodlaHomes8Marla, golfViewRumanza, oneDestination, businessHub],
    floorPlans: [floor4, floor4, floor4, floor4], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3445.544725969402!2d71.5803871103719!3d30.278550607337092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbodla%20homes%20dha%20multan!5e0!3m2!1sen!2s!4v1744365637919!5m2!1sen!2s',
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
      {/* Hero Section */}
      <section className='project-detail'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col xs={12} md={8}>
              <h2>{project.title} <span>{project.spantitle}</span></h2>
            </Col>
          </Row>
        </Container>

        {/* Image Carousel */}
        <Container>
          <Carousel className='mt-3' fade indicators={false} controls={false} interval={3000} pause={true}>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="d-block w-100"
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

        {/* Project Intro */}
        <Container className='project-intro'>
          <Card>
            <CardBody>
              <Row className="align-items-center">
                <Col xs={12} md={7}>
                  <h3 className="mb-4">{project.introTitle || project.title}</h3>
                  <p className="lead">{project.description}</p>
                  <BodlaButton
                    text="Book a Call"
                    icon={<Icons name="rightArrow" />}
                    link="/Contact"
                  />
                </Col>
                <Col xs={12} md={5} className="text-md-end">
                  <Row className='gy-4'>
                    <Col xs={12} md={6}>
                      <div className='project-dhaApproved'>
                        <Image src={project.dhaApproved} alt="DHA Approved" />
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className='project-logo'>
                        <Image src={project.logo} alt={`${project.title} Logo`} />
                      </div>
                    </Col>
                    <Col xs={12} md={12} className='map'>
                      <iframe
                        src={project.mapEmbedUrl}
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
            </CardBody>
          </Card>
        </Container>
      </section>

      {/* Nearby Places Section */}
      <section>
        <Container className='text-center'>
          <h2 className='mb-4'>Nearby Places</h2>
          <Row className='gy-3'>
            {project.nearbyPlaces.map((place, index) => (
              <Col xs={6} md={3} key={index}>
                <Card className='h-100'>
                  <CardBody>
                    <Icons name="location" className='mb-2' />
                    <p>{place}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Virtual Tour Section */}
      <section className='text-center'>
        <h2 className='mb-4'>Virtual Tour</h2>
        <div className='virtualtour mt-4'>
          <Image src={project.virtualTour} alt='Virtual Tour' fluid />
        </div>
      </section>

      {/* Floor Plans Section */}
      <section>
        <Container className='text-center'>
          <h2 className='mb-4'>Floor Plans</h2>
          <Row className='gy-4'>
            {project.floorPlans.map((plan, index) => (
              <Col xs={12} md={6} key={index}>
                <Image src={plan} alt={`Floor Plan ${index + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Video Section */}
      <section>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} lg={10}>
              <h2 className='text-center mb-4'>Project Video</h2>
              <video width="100%" controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Amenities and Project Facts Section */}
      <section className="text-center">
        <Container>
          <Row className="gy-4">
            <Col xs={12} lg={12}>
              <h2 className="mb-4">Amenities and Features</h2>
              <Row className='justify-content-center gy-4'>
              {project.amenities.map((amenity, index) => (
                  <Col xs={12} md={2} key={index}>
                    <Card className="h-100 amenity-card">
                      <CardBody>
                        <Row className="d-flex align-items-center">
                        <Icons name={amenity.icon}/>
                        <p>{amenity.title}</p>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* <Col xs={12} lg={4}>
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
            </Col> */}
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
      <section className="py-5 bg-primary text-white">
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
                variant="light"
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