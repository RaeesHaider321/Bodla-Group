import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel, Card, CardBody, Table, Button } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound';
import PageTitle from '../components/PageTitle';

// Project Images (import all projects' images here)
import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';

import businessHub from '../images/businessHub.jpg';
// Business Hub Slides
import businessHubslide1 from '../images/businessHub-slide1.jpg';
import businessHubslide2 from '../images/businessHub-slide2.jpg';
import businessHubslide3 from '../images/businessHub-slide3.jpg';
import businessHubslide4 from '../images/businessHub-slide4.jpg';

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
import ctaOneD from '../images/ctaOneD.png';


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
  nearbyPlaces: [],
  pricingPlans: [
    {
      category: '',
      floor: '',
      ratePerSft: '',
      booking: '',
      downPayment: '',
      installmentPlan: '',
      annualPayments: '',
      onPossession: ''
    }
  ],
};

// Project Details Data
const projectDetails = {
  'business-hub': {
    ...projectTemplate,
    id: 1,
    title: 'A Whole New Definition of Lifestyle',
    spantitle: 'Business Hub',
    introTitle: 'Experience the Future of Urban Living',
    logo: bHub,
    background: businessHub,
    description: 'With Business Hub, reimagine the urban living with a dynamic multi-feature first grandiose mall of DHA Multan, residing adjacent to DHA Head Office, on 300ft wide Main Boulevard, ensuring its visibility and accessibility. Business Hub, a modernist 7-storey edifice stretches over an area of 18-kanal, integrating a perfect blend of expansive commercial outlets, marvelous offices and posh 1, 2, 3 – Bedroom Apartments precisely designed to keep pace with the evolving preferences of modern market. The mesmerizing views diligently fuses with the nexus of business opportunities, Central Business Square, creating a lifestyle beyond imagination.',
    amenities: [
      { title: 'Mosque', icon:"mosque", },
      { title: 'Food Court', icon: "foodCourt" },
      { title: 'Kids Play Area', icon: "kidsPlayArea" },
      { title: 'High-speed Elevators & Escalators', icon: "elevators" },
      { title: 'Central Fire Protection System', icon:"fireFighting" },
      { title: 'Air Conditioned Corridors and Common Areas', icon: "airConditioning" },
      { title: 'Ample Parking', icon:"parkingArea" },
      { title: 'Double Entry', icon: "gate" },
      { title: 'Bridge connecting with DHA Main Office', icon: "elevators" },
      { title: '24 Hour Security', icon: "cctv"  },
      { title: 'First Aid', icon: "firstAid" },
      { title: '24 Hours Power backup', icon: "powerBackup"},
    ],
    nearbyPlaces: [
      {icon: 'airPlane', title: 'Airport',},
      {icon: 'mosque',  title: 'DHA Head Office',},
      {icon: 'mosque',  title: 'Central Square',},
      {icon: 'mosque',  title: 'Main Boulevard',},
      {icon: 'mosque',  title: 'Health Care',},
      {icon: 'mosque',  title: 'Cultural Centre',},
      {icon: 'mosque',  title: 'Kashmir Park',},
      {icon: 'mosque',  title: 'Sports Complex',},
      {icon: 'mosque',  title: 'Basket Ball Court',},
      {icon: 'mosque',  title: 'DHA Library',},
      {icon: 'mosque',  title: '360 Zoo',},
      {icon: 'mosque',  title: 'MPS road',},
    ],
    images: [businessHubslide1, businessHubslide2, businessHubslide3, businessHubslide4],
    floorPlans: [floor1, floor1, floor1, floor1], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9287473577783!2d71.55361441037263!3d30.296090006500197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cbd1167128b5%3A0x79d6c7b73dd41cef!2sBusiness%20Hub%2C%20DHA%20Multan!5e0!3m2!1sen!2s!4v1744012574158!5m2!1sen!2s',
    size: '5 Acres',
    status: 'Ongoing',
    pricingPlans: [
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Spacious Office',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Shops',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Restaurants',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: '1-3 Bed Luxury Apartments',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      }
    ],
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
      { title: 'Gymnasium', icon: 'gymnasium', }, 
      { title: 'Swimming Pool', icon: 'mosque', }, 
      { title: 'Roof-Top Restaurant', icon: 'restaurant', }, 
      { title: 'Elevators', icon: "elevators" }, 
      { title: 'Wide Corridors', icon: 'wideCorridors', }, 
      { title: 'Multiple Entrances', icon: 'gate', }, 
      { title: 'Ample Car Parking', icon: 'mosque', }, 
      { title: '24/7 Power Backup', icon: "powerBackup"}, 
      { title: '24/7 Security', icon: "cctv"},
    ],
    nearbyPlaces: [
      {
        icon: 'airPlane', // name of the icon from your Icons component
        title: 'International Airport',
      },
      {
        icon: 'university',
        title: 'University',
      },
      {
        icon: 'motorway',
        title: 'Motorway',
      },
      {
        icon: 'hospital',
        title: 'Hospital',
      },
      {
        icon: 'bypassRoad',
        title: 'Bypass Road',
      },
    ],
    pricingPlans: [
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Spacious Office',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Shops',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Restaurants',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: '1-3 Bed Luxury Apartments',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
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
      { name: 'Gym',icon: 'gym', },
      { name: 'Swimming pool',icon: 'mosque', }, 
      { name: 'Kids play area', icon: 'kidsPlayArea', }, 
      { name: 'Landscaped gardens',icon: 'mosque', }, 
      { name: 'Private lounges', icon: 'mosque', },
      { name: 'Executive lift for penthouses', icon: 'elevators', }, 
      { name: 'Cargo, passenger lifts', icon: 'elevators', }, 
      { name: 'Garbage disposal',icon: 'mosque', },  
      { name: 'Stunning views', icon: 'mosque', },
      { name: 'Spacious parking',icon: 'mosque', },
    ],
    nearbyPlaces: [
      {
        icon: 'airPlane', // name of the icon from your Icons component
        title: 'Airport',
      },
      {
        icon: 'university',
        title: 'University',
      },
      {
        icon: 'motorway',
        title: 'Motorway',
      },
      {
        icon: 'hospital',
        title: 'Hospital',
      },
      {
        icon: 'bypassRoad',
        title: 'Bypass Road',
      },
    ],
    pricingPlans: [
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Spacious Office',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Shops',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Restaurants',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: '1-3 Bed Luxury Apartments',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
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
        // 	5.2-Marla Bodla Homes
        { title: 'Drawing Room', icon: 'livingRoom',},
        { title: 'Family Lounge', icon: 'dining',},
        { title: 'Dinning Area', icon: 'dining',},
        { title: 'Kitchen', icon: 'kitchen',},
        { title: 'Backyard Service Space', icon: 'mosque',},
        { title: 'Beds + Attached Baths', icon: 'mosque',},
        { title: 'FF Kitchenette', icon: 'kitchen',},
        { title: 'Terrace', icon: 'terrace',},
        { title: 'BBQ Terrace', icon: 'barbecue',},
        { title: 'Roof Top Solar Panel Area', icon: 'solarPanel',},
        { title: 'Spacious Car Parking', icon: 'garage',},
          // 	8-Marla Bodla Homes
          { title: 'Evaporative Air Cooler', icon: 'mosque',},
          { title: 'Drawing Room', icon: 'livingRoom',},
          { title: 'Spacious Living Room', icon: 'livingRoom',},
          { title: 'Store Room', icon: 'storeRoom',},
          { title: 'Maid Room', icon: 'maid',},
    ],
    nearbyPlaces: [
      {
        icon: 'airPlane', // name of the icon from your Icons component
        title: 'Airport',
      },
      {
        icon: 'university',
        title: 'University',
      },
      {
        icon: 'motorway',
        title: 'Motorway',
      },
      {
        icon: 'hospital',
        title: 'Hospital',
      },
      {
        icon: 'bypassRoad',
        title: 'Bypass Road',
      },
    ],
    pricingPlans: [
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Commercial Outlet',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Spacious Office',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Shops',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: 'Food Court Restaurants',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
      },
      {
        category: '1-3 Bed Luxury Apartments',
        floor: 'GF',
        ratePerSft: '45,000',
        booking: '5%',
        downPayment: '25%',
        installmentPlan: '3 Years',
        annualPayments: '2 x 10%',
        onPossession: '10%'
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
            <Col xs={12} md={9} data-aos="fade-up" data-aos-delay="100">
              <h2>{project.title} <span>{project.spantitle}</span></h2>
            </Col>
          </Row>

          {/* Image Carousel */}
          <Carousel className='mt-3' fade indicators={false} controls={false} interval={3000} pause={true} data-aos="fade-up" data-aos-delay="200">
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Image src={image} alt={`${project.title} - ${index + 1}`} className="d-block w-100" style={{ maxHeight: '600px', objectFit: 'cover' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>

        {/* Project Intro */}
        <Container className='project-intro'>
          <Card data-aos="fade-up" data-aos-delay="300">
            <CardBody>
              <Row className="align-items-center">
                <Col xs={12} md={7} data-aos="fade-right" data-aos-delay="400">
                  <h3 className="mb-4">{project.introTitle || project.title}</h3>
                  <p className="lead text-justify">{project.description}</p>
                  <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} link="/Contact" />
                </Col>
                <Col xs={12} md={5} className="text-md-end">
                  <Row className='gy-4'>
                    <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="500">
                      <div className='project-dhaApproved'>
                        <Image src={project.dhaApproved} alt="DHA Approved" />
                      </div>
                    </Col>
                    <Col xs={12} md={6} data-aos="fade-left" data-aos-delay="600">
                      <div className='project-logo'>
                        <Image src={project.logo} alt={`${project.title} Logo`} />
                      </div>
                    </Col>
                    <Col xs={12} md={12} className='map' data-aos="fade-left" data-aos-delay="700">
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
        {/* <NearbyLocations locations={nearbyLocations} /> */}
        {/* Nearby Places Section */}
        <Container className='text-center mt-5'>
          <PageTitle title="Nearby Places" data-aos="fade-up" data-aos-delay="100" />
          <Row className='justify-content-center gy-4'>
            {project.nearbyPlaces.map((nearby, index) => (
              <Col xs={3} md={2} key={index} data-aos="fade-up" data-aos-delay={`${150 + (index * 50)}`}>
                <Card className="h-100 amenity-card">
                  <CardBody>
                    <Row className="d-flex align-items-center justify-content-center">
                      <Icons name={nearby.icon} />
                      <h6>{nearby.title}</h6>
                      <p>{nearby.distance}</p>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
{/* Amenities and Project Facts Section */}
<Container className='text-center mt-5'>
          <Row className="gy-4">
            <Col xs={12} lg={12}>
              <PageTitle title="Amenities and Features" data-aos="fade-up" data-aos-delay="100" />
              <Row className='justify-content-center gy-4'>
                {project.amenities.map((amenity, index) => (
                  <Col xs={3} md={2} key={index} data-aos="fade-up" data-aos-delay={`${150 + (index * 50)}`}>
                    <Card className="h-100 amenity-card">
                      <CardBody>
                        <Row className="d-flex align-items-center justify-content-center">
                          <Icons name={amenity.icon} />
                          <p>{amenity.title}</p>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        
        {/* Virtual Tour Section */}
        <div className='text-center mt-5'>
          <h2 className='mb-4' data-aos="fade-up" data-aos-delay="100">Virtual Tour</h2>
          <div className='virtualtour mt-4' data-aos="fade-up" data-aos-delay="200">
            <Image src={project.virtualTour} alt='Virtual Tour' fluid />
          </div>
        </div>

        {/* Floor Plans Section */}
        <Container className='text-center mt-5'>
          <PageTitle title="Floor Plans" data-aos="fade-up" data-aos-delay="100" />
          <Row className='gy-4'>
            {project.floorPlans.map((plan, index) => (
              <Col xs={12} sm={6} md={6} key={index} data-aos="fade-up" data-aos-delay={`${150 + (index * 100)}`} >
                <Image src={plan} alt={`Floor Plan ${index + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container className='mt-5'>
          <div className='projects-cta' data-aos="fade-up">
            <Row className='align-items-center'>
              <Col xs={12} lg={6} className='content' data-aos="fade-right" data-aos-delay="100">
                <h2>Start Your Business Today!</h2>
                <h5>Secure Your Ideal Shop in Just a Few Clicks</h5>
                <p>Find the perfect space for your business and take the first step toward success. Limited shops available—book yours now!</p>
                <div className='dflex'>
                  <BodlaButton
                    text="Book a Call"
                    icon={<Icons name="rightArrow" />}
                    link="/Contact"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
              </Col>
              <Col xs={12} lg={6} className='amblum' data-aos="fade-left" data-aos-delay="200">
                <Image src={ctaOneD} alt='' />
              </Col>
            </Row>
          </div>
        </Container>
        {/* Video Section */}
        <Container className='text-center mt-5'>
          <Row className='justify-content-center text-center mt-5'>
            <Col xs={12} lg={10}>
              <PageTitle title="Project Video" data-aos="fade-up" data-aos-delay="100" />
              <div data-aos="fade-up" data-aos-delay="200">
                <video width="100%" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='text-center mt-5'>
          <PageTitle title="Payment Plans" data-aos="fade-up" data-aos-delay="100" />
          <Row>
            <Col xs={12} data-aos="fade-up" data-aos-delay="200">
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Floor</th>
                    <th>Rate/Sft</th>
                    <th>Booking</th>
                    <th>DP</th>
                    <th>Instalment Plan</th>
                    <th>Annual Payments</th>
                    <th>On Possession</th>
                  </tr>
                </thead>
                <tbody>
                  {project.pricingPlans.map((plan, index) => (
                    <tr key={`pricing-${index}`}>
                      <td>{plan.category}</td>
                      <td>{plan.floor}</td>
                      <td>{plan.ratePerSft}</td>
                      <td>{plan.booking}</td>
                      <td>{plan.downPayment}</td>
                      <td>{plan.installmentPlan}</td>
                      <td>{plan.annualPayments}</td>
                      <td>{plan.onPossession}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;