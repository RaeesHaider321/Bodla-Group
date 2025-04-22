import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel, Card, CardBody, Table, } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound';
import PageTitle from '../components/PageTitle';

// Project Images (import all projects' images here)

import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import bodlaHomes8Marla1 from '../images/bodlaHomes8-1.jpg';
import bodlaHomes8Marla2 from '../images/bodlaHomes8-2.jpg';
import bodlaHomes8Marla3 from '../images/bodlaHomes8-3.jpg';
import bodlaHomes8Marla4 from '../images/bodlaHomes8-4.jpg';
// Floor Maps
// Bodla Homes 8 Marla
import bh8MarlaHouseGF from '../images/floorMaps/8-Marla-House-GF.jpg';
import bh8MarlaHouseFF from '../images/floorMaps/8-Marla-House-FF.jpg';
import bh8MarlaHouseMF from '../images/floorMaps/8-Marla-House-MF.jpg';

// Bodla Homes 5.2 Marla
import bh5MarlaHouseGF from '../images/floorMaps/5.2-Marla-House-GF.jpg';
import bh5MarlaHouseFF from '../images/floorMaps/5.2-Marla-House-FF.jpg';
import bh5MarlaHouseMF from '../images/floorMaps/5.2-Marla-House-MF.jpg';

import bodlaHomes5Marla from '../images/bodlaHomes5.2Marla.jpg';
import bodlaHomes5Marla1 from '../images/bodlaHomes5-1.jpg';
import bodlaHomes5Marla2 from '../images/bodlaHomes5-2.jpg';
import bodlaHomes5Marla3 from '../images/bodlaHomes5-3.jpg';
import bodlaHomes5Marla4 from '../images/bodlaHomes5-4.jpg';

import businessHub from '../images/businessHub.jpg';
// Business Hub Slides
import businessHubslide1 from '../images/businessHub-slide1.jpg';
import businessHubslide2 from '../images/businessHub-slide2.jpg';
import businessHubslide3 from '../images/businessHub-slide3.jpg';
import businessHubslide4 from '../images/businessHub-slide4.jpg';

// Floor Maps
import business1 from '../images/floorMaps/BusinessHub-01.jpg';
import business2 from '../images/floorMaps/BusinessHub-02.jpg';
import business3 from '../images/floorMaps/BusinessHub-03.jpg';
import business4 from '../images/floorMaps/BusinessHub-04.jpg';
import business5 from '../images/floorMaps/BusinessHub-05.jpg';
import business6 from '../images/floorMaps/BusinessHub-06.jpg';
import business7 from '../images/floorMaps/BusinessHub-07.jpg';
import business8 from '../images/floorMaps/BusinessHub-08.jpg';
import business9 from '../images/floorMaps/BusinessHub-09.jpg';

import bHomes from '../images/bHomes-logo.png';
import bHub from '../images/BHub-logo.png';
import oneD from '../images/OneD-logo.png';
import approved from '../images/approved.png';
import gvr from '../images/gvr-logo.png';
import dhaApproved from '../images/dhaApproved.png';
import virtualtour from '../images/virtual-tour.jpg';

// Project Sliders
// One Destination
import oneDestination from '../images/oneDestination.jpg';
import oneDestination1 from '../images/oneDestination-1.jpg';
import oneDestination2 from '../images/oneDestination-2.jpg';
// Golf View Rumanza
import golfViewRumanza from '../images/golfViewRumanza.jpg';
import golfViewRumanza1 from '../images/golfViewRumanza-1.jpg';
import golfViewRumanza2 from '../images/golfViewRumanza-2.jpg';
// Floor Maps
// One Destination
import OneDestinationFG from '../images/floorMaps/OneDestination-01.jpg';
import OneDestination01 from '../images/floorMaps/OneDestination-02.jpg';
import OneDestination02 from '../images/floorMaps/OneDestination-03.jpg';
import OneDestination03 from '../images/floorMaps/OneDestination-04.jpg';
import OneDestination04 from '../images/floorMaps/OneDestination-05.jpg';

import floor3 from '../images/floor3.jpg';
import sectorV from '../videos/sector-v.mp4';
import ctaOneD from '../images/ctaOneD.png';


// Project Data Template
const projectTemplate = {
  id: 0,
  title: 'Project Title',
  spantitle: 'Highlighted Title',
  introTitle: 'Introductory Title',
  logo: '', // project logo image
  thumb: '', // project thumb image
  dhaApproved: dhaApproved,
  approved: approved,
  background: '', // main background image
  description: 'Project description goes here...',
  secondDescription: '',
  whyproject: [],
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
    thumb: businessHub,
    background: businessHub,
    description: 'With Business Hub, reimagine the urban living with a dynamic multi-feature first grandiose mall of DHA Multan, residing adjacent to DHA Head Office, on 300ft wide Main Boulevard, ensuring its visibility and accessibility. Business Hub, a modernist 7-storey edifice stretches over an area of 18-kanal, integrating a perfect blend of expansive commercial outlets, marvelous offices and posh 1, 2, 3 – Bedroom Apartments precisely designed to keep pace with the evolving preferences of modern market. The mesmerizing views diligently fuses with the nexus of business opportunities, Central Business Square, creating a lifestyle beyond imagination.',
    whyproject: [
      { title: 'DHA Approved. ' },
      { title: 'Prime & Populous Location. ' },
      { title: 'Commercial Gateway. ' },
      { title: 'Ground Floor Possession in 1-year.' },
      { title: 'Modern Amenities.' },
      { title: 'Surrounded by DHA & Askari Villas. ' },
      { title: 'Fast Growing Community.' },
      { title: '2.78 Acres. ' },
    ],
    amenities: [
      { title: 'Mosque', icon: "mosque", },
      { title: 'Food Court', icon: "foodCourt" },
      { title: 'Kids Play Area', icon: "kidsPlayArea" },
      { title: 'High-speed Elevators & Escalators', icon: "elevators" },
      { title: 'Central Fire Protection System', icon: "fireFighting" },
      { title: 'Air Conditioned Corridors and Common Areas', icon: "airConditioning" },
      { title: 'Ample Parking', icon: "parkingArea" },
      { title: 'Double Entry', icon: "gate" },
      { title: 'Bridge connecting with DHA Main Office', icon: "elevators" },
      { title: '24 Hour Security', icon: "cctv" },
      { title: 'First Aid', icon: "firstAid" },
      { title: '24 Hours Power backup', icon: "powerBackup" },
    ],
    nearbyPlaces: [
      { icon: 'airPlane', title: 'Airport', },
      { icon: 'mosque', title: 'DHA Head Office', },
      { icon: 'mosque', title: 'Central Square', },
      { icon: 'mosque', title: 'Main Boulevard', },
      { icon: 'mosque', title: 'Health Care', },
      { icon: 'mosque', title: 'Cultural Centre', },
      { icon: 'mosque', title: 'Kashmir Park', },
      { icon: 'mosque', title: 'Sports Complex', },
      { icon: 'mosque', title: 'Basket Ball Court', },
      { icon: 'mosque', title: 'DHA Library', },
      { icon: 'mosque', title: '360 Zoo', },
      { icon: 'mosque', title: 'MPS road', },
    ],
    images: [businessHubslide1, businessHubslide2, businessHubslide3, businessHubslide4],
    floorPlans: [business1, business2, business3, business4, business5, business6, business7, business8, business9], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/d/u/2/embed?mid=1kvDuTgr7w6rKrJI9Rap2FZART3zDYts&ehbc=2E312F&noprof=1',
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
    ],
  },
  'one-destination': {
    ...projectTemplate,
    id: 2,
    title: 'One Destination',
    spantitle: 'Where businesses grow',
    introTitle: 'Project Description',
    description: 'In One Destination, experience the essence of contemporary retail haven at the most strategic location of DHA Multan, positioned in vicinity to Arena, Food Court, DHA Villas, Askari Villas, and DHA Commercial Arcade on 300ft-wide Main Boulevard, ensuring unmatched accessibility. One Destination goes beyond the ordinary, blending modern architectural brilliance with exquisite retreat. Our impeccable 4-storey project expands over an area of 2.78 acres, and is thoroughly designed to cover your multitude of choices.  One Destination features a fusion of Brand Outlets, A Digital Hub and Gold Souk. So, embrace your future with comfort at ONE DESTINATION.',
    whyproject: [
      { title: 'DHA Approved. ' },
      { title: 'Prime & Populous Location. ' },
      { title: 'Commercial Gateway. ' },
      { title: 'Ground Floor Possession in 1-year.' },
      { title: 'Modern Amenities.' },
      { title: 'Surrounded by DHA & Askari Villas. ' },
      { title: 'Fast Growing Community.' },
      { title: '2.78 Acres. ' },
    ],
    logo: oneD,
    thumb: oneDestination,
    background: oneDestination,
    amenities: [
      { title: 'Gymnasium', icon: 'gymnasium', },
      { title: 'Swimming Pool', icon: 'swimmingPool', },
      { title: 'Roof-Top Restaurant', icon: 'restaurant', },
      { title: 'Elevators', icon: "elevators" },
      { title: 'Wide Corridors', icon: 'wideCorridors', },
      { title: 'Multiple Entrances', icon: 'gate', },
      { title: 'Ample Car Parking', icon: 'parkingArea', },
      { title: '24/7 Power Backup', icon: "powerBackup" },
      { title: '24/7 Security', icon: "cctv" },
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
        floor: 'Ground Floor',
        mbFacing: '120,000 / per sq. ft.',
        askariFacing: '110,000 / per sq. ft.',
        centerShops: '110,000 / per sq. ft.',
      },
      {
        floor: 'First Floor',
        mbFacing: '90,000 / per sq. ft.',
        askariFacing: '80,000 / per sq. ft.',
        centerShops: '70,000 / per sq. ft.',
      },
      {
        floor: 'Second Floor',
        mbFacing: '85,000 / per sq. ft.',
        askariFacing: '75,000 / per sq. ft.',
        centerShops: '65,000 / per sq. ft.',
      },
      {
        floor: 'Third Floor',
        mbFacing: '60,000 / per sq. ft.',
        askariFacing: '60,000 / per sq. ft.',
        centerShops: '60,000 / per sq. ft.',
      },
      {
        floor: 'Fourth Floor',
        mbFacing: '55,000 / per sq. ft.',
        askariFacing: '55,000 / per sq. ft.',
        centerShops: '55,000 / per sq. ft.',
      },
    ],
    images: [oneDestination, oneDestination1, oneDestination2],
    floorPlans: [OneDestinationFG, OneDestination01, OneDestination02, OneDestination03, OneDestination04], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/d/u/2/embed?mid=18m1tND92llOVYgM4gh6Voj5nnofl5Vc&ehbc=2E312F&noprof=1',
    size: '10 Acres',
    status: 'Completed'
  },
  'golf-view-rumanza': {
    ...projectTemplate,
    id: 3,
    title: 'Golf View Rumanza',
    spantitle: 'A Whole New Definition of Lifestyle.',
    introTitle: 'Project Description',
    description:'Golf View Rumanza - DHA Multan is a premier apartment and commercial complex offering breathtaking views of Pakistan’s first Championship Signature 18-hole golf course, ‘Rumanza.’ Situated in one of the country’s most prestigious communities, this project spans 7.5 kanal and rises across 12 storeys.',
    secondDescription:'With a mix of luxurious residential apartments and penthouses designed for an elite lifestyle, as well as commercial spaces that provide a prime location for businesses, Golf View Rumanza offers a unique opportunity for both residents and retailers to grow forward in a vibrant, upscale community.',
    logo: gvr,
    thumb: golfViewRumanza,
    background: golfViewRumanza,
    whyproject: [
      { title: 'DHA Approved. ' },
      { title: 'Resided in flourishing community of Rumanza  ' },
      { title: 'Facing signature 18-hole Rumanza Golf Course. ' }, 
      { title: 'Top-notch Facilities.  ' },
      { title: 'Elevated Residents’ Perks. ' }, 
      { title: 'Only Commercial & Residential Project in Rumanza.  ' },
      { title: 'Only Developing Project in Rumanza.  ' },
      { title: '7.5 Kanal 12 Storey Building.  ' },
    ],
    amenities: [
      { title: 'Gymnasium', icon: 'gymnasium', },
      { title: 'Swimming Pool', icon: 'swimmingPool', },
      { title: 'Roof-Top Restaurant', icon: 'restaurant', },
      { title: 'Elevators', icon: "elevators" },
      { title: 'Wide Corridors', icon: 'wideCorridors', },
      { title: 'Multiple Entrances', icon: 'gate', },
      { title: 'Ample Car Parking', icon: 'parkingArea', },
      { title: 'Double-heighted Outlets', icon: 'elevators', },
      { title: '24/7 Power Backup', icon: "powerBackup" },
      { title: '24/7 Security', icon: "cctv" },
    ],
    nearbyPlaces: [
      {
        icon: 'airPlane', // name of the icon from your Icons component
        title: 'Parks',
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
    images: [golfViewRumanza, golfViewRumanza1, golfViewRumanza2],
    floorPlans: [floor3, floor3, floor3, floor3], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/d/u/2/embed?mid=1lOc0SjTIxoHIG82ZuZVZVM2QFchhH6Q&ehbc=2E312F&noprof=1',
    size: '15 Acres',
    status: 'Upcoming'
  },
  'bodla-homes': {
    ...projectTemplate,
    id: 4,
    title: 'Bodla Homes',
    spantitle: 'A Choice of Convenient Living',
    introTitle: 'Project Description',
    logo: bHomes,
    thumb: bodlaHomes8Marla,
    background: bodlaHomes8Marla,
    description: "Bodla Builders proudly presents Bodla Homes in Sector 'V' of DHA Multan, offering contemporary living in its 5.2-Marla and 8-Marla Villas. The 5.2 Marla villas (2220 sq.ft.) feature 4 bedrooms, spacious car parking, a rooftop BBQ, and solar panel space.The 8-Marla villas (2905 sq.ft.) are designed for luxury, featuring 5 bedrooms, 2-car parking, a backyard service area, a rooftop BBQ space, and solar panel provision.",
    secondDescription:"Both villa categories are ideally located near Parks, a Masjid, Community Facilities, a 150ft wide road, Health & Education City, and Shah Shams Tabraiz Gate, offering complete luxury and convenience.",
    whyproject: [
      { title: 'DHA Approved. ' },
      { title: 'Prime & Populous Location. ' },
      { title: 'Commercial Gateway. ' },
      { title: 'Ground Floor Possession in 1-year.' },
      { title: 'Modern Amenities.' },
      { title: 'Surrounded by DHA & Askari Villas. ' },
      { title: 'Fast Growing Community.' },
      { title: '2.78 Acres. ' },
    ],
    amenities: [
      // 	5.2-Marla Bodla Homes
      { title: 'Drawing Room', icon: 'livingRoom', },
      { title: 'Family Lounge', icon: 'familyLange', },
      { title: 'Dinning Area', icon: 'dining', },
      { title: 'Kitchen', icon: 'kitchen', },
      { title: 'Backyard Service Space', icon: 'mosque', },
      { title: 'Beds + Attached Baths', icon: 'mosque', },
      { title: 'FF Kitchenette', icon: 'kitchen', },
      { title: 'Terrace', icon: 'terrace', },
      { title: 'BBQ Terrace', icon: 'barbecue', },
      { title: 'Roof Top Solar Panel Area', icon: 'solarPanel', },
      { title: 'Spacious Car Parking', icon: 'garage', },
      // 	8-Marla Bodla Homes
      { title: 'Evaporative Air Cooler', icon: 'mosque', },
      { title: 'Drawing Room', icon: 'livingRoom', },
      { title: 'Spacious Living Room', icon: 'livingRoom', },
      { title: 'Store Room', icon: 'storeRoom', },
      { title: 'Maid Room', icon: 'maid', },
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
    images: [bodlaHomes8Marla, bodlaHomes8Marla1, bodlaHomes8Marla2, bodlaHomes8Marla3, bodlaHomes8Marla4, bodlaHomes5Marla, bodlaHomes5Marla1, bodlaHomes5Marla2, bodlaHomes5Marla3, bodlaHomes5Marla4,],
    floorPlans: [bh8MarlaHouseGF, bh8MarlaHouseFF, bh8MarlaHouseMF, bh5MarlaHouseGF, bh5MarlaHouseFF, bh5MarlaHouseMF], // array of floor plan images
    location: 'DHA Multan, Pakistan',
    mapEmbedUrl: 'https://www.google.com/maps/d/u/2/embed?mid=10f6JJXuqzggFLxcaf5xDGrrZ5ZOr538&ehbc=2E312F&noprof=1',
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
                  <p className="lead text-justify">{project.secondDescription}</p>
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
        <Container className='project-whythis py-4' data-aos="fade-up" data-aos-delay="100" >
          <Row>
            <Col xs={12} md={6}>
              <h3>Why {project.title} </h3>
              {project.whyproject.map((whythis, index) => (
                <ul className='p-0'>
                  <li key={index}><Icons name="check" /> {whythis.title}</li>
                </ul>
              ))}
            </Col>
            <Col xs={12} md={6} className='project-approved'>
              <div className='approved'><Image src={project.approved} alt="DHA Approved" /></div>
              <Image src={project.thumb} alt={project.title} />
            </Col>
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
          <Row className='justify-content-center gy-4'>
            {project.floorPlans.map((plan, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={`${150 + (index * 100)}`} >
                <Image className='flooMap' src={plan} alt={`Floor Plan ${index + 1}`} />
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
              {/* <PageTitle title="Delivering our promise" data-aos="fade-up" data-aos-delay="100" /> */}
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
          {/* <PageTitle title="Payment Plans" data-aos="fade-up" data-aos-delay="100" /> */}
          <Row>
            <Col xs={12} data-aos="fade-up" data-aos-delay="200">
            <Image src={project.pricing} alt=''/>
              {/* <Table responsive hover>
                <thead>
                  <tr>
                    <th>Floor</th>
                    <th>MB Facing Shops</th>
                    <th>Askari Facing Shops</th>
                    <th>Center Shops</th>
                  </tr>
                </thead>
                <tbody>
                  {project.pricingPlans.map((plan, index) => (
                    <tr key={`pricing-${index}`}>
                      <td>{plan.floor}</td>
                      <td>{plan.mbFacing}</td>
                      <td>{plan.askariFacing}</td>
                      <td>{plan.centerShops}</td>
                    </tr>
                  ))}
                </tbody>
              </Table> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;