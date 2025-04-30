import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel, Card, CardBody, Table, Button, } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound';
import PageTitle from '../components/PageTitle';

import PanoramicViewer from '../components/PanoramicViewer';
import { Helmet } from 'react-helmet';

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
import ctaOneD from '../images/ctaOneD.png';
import ctaBHomes from '../images/ctaBHomes.png';
import ctaGVR from '../images/ctaGVR.png';
import ctaBHub from '../images/ctaBHub.png';

// Virtual Tour
import virtualTourBHub from '../virtualTour/virtualTourBHub.jpg';
import virtualTourBHome from '../virtualTour/virtualTourBHome.jpg';
import virtualTour1D from '../images/oneDestination-2.jpg';
import virtualTourGVR from '../virtualTour/virtualTourGVR.jpg';


// Project Data Template
const projectTemplate = {
  id: 0,
  title: 'Project Title',
  spantitle: 'Highlighted Title',
  introTitle: 'Introductory Title',
  logo: '', // project logo image
  thumb: '', // project thumb image
  ctaThumb: '', // project thumb image
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
  videoLink: '', // default video
  floorPlans: [], // array of floor plan images
  virtualTour: '',
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
    ctaThumb: ctaBHub,
    background: businessHub,
    description: 'With Business Hub, reimagine the urban living with a dynamic multi-feature first grandiose mall of DHA Multan, residing adjacent to DHA Head Office, on 300ft wide Main Boulevard, ensuring its visibility and accessibility. Business Hub, a modernist 7-storey edifice stretches over an area of 18-kanal, integrating a perfect blend of expansive commercial outlets, marvelous offices and posh 1, 2, 3 – Bedroom Apartments precisely designed to keep pace with the evolving preferences of modern market. The mesmerizing views diligently fuses with the nexus of business opportunities, Central Business Square, creating a lifestyle beyond imagination.',
    whyproject: [
      { title: 'DHA Approved.' },
      { title: 'First Multi-purpose Mega Mall.'},
      { title: 'Offering Contemporary Living.'},
      { title: 'Resided on 300ft Wide Main Boulevard.'},
      { title: 'Phase-1 Completed.'},
      { title: 'Possession-able Shops on Ground Floor & Lower Ground Floor.'},
      { title: 'Connected with DHA Head Office through a bridge.'},
      { title: '18-Kanal 7-Storey Building.'},
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
{ icon: 'dhaHeadOffice', title: 'DHA Head Office',},
{ icon: 'businessSquare', title: 'Central Business Square',}, 
{ icon: 'mainBoulevard', title: 'Facing 300ft MB',}, 
{ icon: 'healthCare', title: 'In front of Health Care',}, 
{ icon: 'mosque', title: 'Grand Jamia Masjid',}, 
{ icon: 'culturalCentre', title: 'Cultural Centre',},
{ icon: 'sportsComplex', title: 'Indoor Sports Complex',},
{ icon: 'parks', title: 'Parks',}, 
{ icon: 'kashmirPark', title: 'Kashmir Park',},
{ icon: 'sportsComplex', title: 'Sports Complex',},
{ icon: 'road', title: 'DHA Club',},
// { icon: 'basketball', title: 'Basket Ball Court',},
{ icon: 'library', title: 'DHA Library',},
// { icon: 'zoo360', title: '360 Zoo',},
{ icon: 'road', title: 'MPS road access',},
{ icon: 'gate', title: 'All gates access',},
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
    videoLink: "https://www.youtube.com/embed/Ndr0vVfjrQs?si=VLGx-Yqg3ZFimX-w",
    virtualTour:virtualTourBHub,
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
    ctaThumb: ctaOneD,
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
      { title: "Shah Yousaf Gardez Gate (Bosan Road Main Gate)", icon: "dhaGate" },
  { title: "DHA Arena", icon: "arena" },
  { title: "DHA Food Court", icon: "foodCourt" },
  { title: "DHA Shopping Arcade", icon: "cart" },
  { title: "DHA Villas", icon: "villa" },
  { title: "Askari Villas", icon: "villa" },
  { title: "Defence Orchard Events Complex", icon: "eventsComplex" },
  { title: "Health Care", icon: "healthCare" },
  { title: "Villas Sports Complex", icon: "sportsComplex" },
  { title: "360 Zoo", icon: "zoo360" },
  { title: "Facing 300ft MB", icon: "mainBoulevard" },
  { title: "Bilal Mosque", icon: "mosque" },
  { title: "Parks", icon: "parks" },
  { title: "Schools", icon: "school" },
  { title: "DHA Degree College", icon: "university" },
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
    status: 'Completed',
    videoLink: "https://www.youtube.com/embed/Rz9MYwIQ_7c?si=PcdEq3beGri3f8C8",
    virtualTour:virtualTour1D,
  },
  'golf-view-rumanza': {
    ...projectTemplate,
    id: 3,
    title: 'Golf View Rumanza',
    spantitle: 'A Whole New Definition of Lifestyle.',
    introTitle: 'Project Description',
    description: 'Golf View Rumanza - DHA Multan is a premier apartment and commercial complex offering breathtaking views of Pakistan’s first Championship Signature 18-hole golf course, ‘Rumanza.’ Situated in one of the country’s most prestigious communities, this project spans 7.5 kanal and rises across 12 storeys.',
    secondDescription: 'With a mix of luxurious residential apartments and penthouses designed for an elite lifestyle, as well as commercial spaces that provide a prime location for businesses, Golf View Rumanza offers a unique opportunity for both residents and retailers to grow forward in a vibrant, upscale community.',
    logo: gvr,
    thumb: golfViewRumanza,
    ctaThumb: ctaGVR,
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
      { title: 'Double-heighted Outlets', icon: 'doubleHeight', },
      { title: '24/7 Power Backup', icon: "powerBackup" },
      { title: '24/7 Security', icon: "cctv" },
    ],
    nearbyPlaces: [
  { title: "Rumanza Commercial", icon: "commercial" },
  { title: "Facing Rumanza Golf Course", icon: "golfCourse" },
  { title: "Rumanza by Pearl Continental", icon: "hotel" },
  { title: "Lahore-Multan Motorway", icon: "motorway" },

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
    status: 'Upcoming',
    videoLink: "https://www.youtube.com/embed/w5QEV7t8kuA?si=trZzHw-WGeOkTSsj",
    virtualTour:virtualTourGVR,
  },
  'bodla-homes': {
    ...projectTemplate,
    id: 4,
    title: 'Bodla Homes',
    spantitle: 'A Choice of Convenient Living',
    introTitle: 'Project Description',
    logo: bHomes,
    thumb: bodlaHomes8Marla,
    ctaThumb: ctaBHomes,
    background: bodlaHomes8Marla,
    description: "Bodla Builders proudly presents Bodla Homes in Sector 'V' of DHA Multan, offering contemporary living in its 5.2-Marla and 8-Marla Villas. The 5.2 Marla villas (2220 sq.ft.) feature 4 bedrooms, spacious car parking, a rooftop BBQ, and solar panel space.The 8-Marla villas (2905 sq.ft.) are designed for luxury, featuring 5 bedrooms, 2-car parking, a backyard service area, a rooftop BBQ space, and solar panel provision.",
    secondDescription: "Both villa categories are ideally located near Parks, a Masjid, Community Facilities, a 150ft wide road, Health & Education City, and Shah Shams Tabraiz Gate, offering complete luxury and convenience.",
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
    status: 'Ongoing',
    videoLink: "https://www.youtube.com/embed/agUm10fzXDQ?si=8rh8psHk6XPFNdL8",
    virtualTour:virtualTourBHome,
  }
};

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  const project = projectDetails[projectSlug];

  if (!project) {
    return <Container><NotFound /></Container>;
  }
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "HousingDevelopment",
    "name": project.title,
    "description": project.description,
    "url": window.location.href,
    "image": project.images[0],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "DHA Multan",
      "addressRegion": "Punjab",
      "postalCode": "60000",
      "addressCountry": "PK"
    },
    "developer": {
      "@type": "Organization",
      "name": "Bodla Group"
    },
    "numberOfUnits": project.pricingPlans.length,
    "hasMap": project.mapEmbedUrl
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${project.title} Project Video`,
    "description": `Video tour of ${project.title} by Bodla Group`,
    "thumbnailUrl": project.images[0],
    "uploadDate": "2024-05-01", // Update with actual date
    "contentUrl": project.videoLink
  };
  
  // Add to your Helmet component:
  <script type="application/ld+json">
    {JSON.stringify(videoSchema)}
  </script>
  return (
    <>
    <Helmet>
        <title>{`${project.title} | Bodla Group - ${project.spantitle}`}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`Bodla Group, DHA Multan, ${project.title}, ${project.keywords?.join(', ') || ''}`} />
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={`${project.title} | Bodla Group`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.images[0]} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={`${project.title} | Bodla Group`} />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.images[0]} />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className='project-detail'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col xs={12} md={9} >
              <h2>{project.title} <span>{project.spantitle}</span></h2>
            </Col>
          </Row>

          {/* Image Carousel */}
          <Carousel className='mt-3' fade indicators={false} controls={false} interval={3000} pause={true} >
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <Image src={image} alt={`${project.title} - ${index + 1}`} loading="lazy" className="d-block w-100" style={{ maxHeight: '600px', objectFit: 'cover' }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        {/* Project Intro */}
        <Container className='project-intro'>
          <Card data-aos="fade-up" >
            <CardBody>
              <Row className="align-items-center g-3">
                <Col xs={12} md={7}>
                  <h3 className="mb-4">{project.introTitle || project.title}</h3>
                  <p className="lead text-justify">{project.description}</p>
                  <p className="lead text-justify">{project.secondDescription}</p>
                  <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} link="/Contact" />
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
        {/* <NearbyLocations locations={nearbyLocations} /> */}
        <Container className='project-whythis py-4'data-aos="fade-up">
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
        <Container className='text-center mt-5'data-aos="fade-up">
          <Row className="gy-4">
            <Col xs={12} lg={12}>
              <PageTitle title="Amenities and Features" />
              <Row className='justify-content-center gy-4'>
                {project.amenities.map((amenity, index) => (
                  <Col xs={6} md={2} key={index} data-aos="fade-up">
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
        <Container className='text-center mt-5'data-aos="fade-up">
          <PageTitle title="Nearby Places" />
          <Row className='justify-content-center gy-4'>
            {project.nearbyPlaces.map((nearby, index) => (
              <Col xs={6} md={2} key={index} data-aos="fade-up" >
                <Card className="h-100 amenity-card">
                  <CardBody>
                    <Row className="d-flex align-items-center justify-content-center">
                      <Icons name={nearby.icon} />
                      <p>{nearby.title}</p>
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
          <h2 className='mb-4' >Smart Tour</h2>
          <p>Drag to look around or let the auto-rotation guide you.</p>
          <div className='virtualtour mt-4'>
            <PanoramicViewer
              imageUrl={project.virtualTour}
              autoRotate={true}
              autoRotateSpeed={0.3}
            />
            <div className='cta' data-aos="fade-up">
              <Container>
                <Row className='text-start align-items-center justify-content-center g-2'>
                  <Col xs={12} md={8}>
                    <h3>Step Into Your Future — Come With Us!</h3>
                    <p>Visit our project — your dream land awaits! Experience the perfect blend of comfort, style, and opportunity.</p>
                  </Col>
                  <Col xs={6} md={4} className='btns'>
                    <BodlaButton text="Live Visit" icon={<Icons name="rightArrow" />} variant="primary" link="/Contact" />
                    <BodlaButton text="Download App" icon={<Icons name="rightArrow" />} variant="primary" link="/Contact" />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* Floor Plans Section */}
        <Container className='text-center mt-5'>
          <PageTitle title="Floor Plans" />
          <Row className='justify-content-center gy-4'>
            {project.floorPlans.map((plan, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={index} data-aos="fade-up">
                <Image className='flooMap' src={plan} alt={`Floor Plan ${index + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
        <Container className='mt-5'>
          <div className='projects-cta'>
            <Row className='align-items-center'>
              <Col xs={12} lg={6} className='content'>
                <h2>Start Your Business Today!</h2>
                <h5>Secure Your Ideal Shop in Just a Few Clicks</h5>
                <p>Find the perfect space for your business and take the first step toward success. Limited shops available—book yours now!</p>
                <div className='dflex'>
                  <BodlaButton
                    text="Book a Call"
                    icon={<Icons name="rightArrow" />}
                    link="/Contact"
                  />
                </div>
              </Col>
              <Col xs={12} lg={6} className='amblum' >
                <Image src={project.ctaThumb} alt='' />
              </Col>
            </Row>
          </div>
        </Container>
        {/* Video Section */}
        <Container className='text-center mt-5'>
          <Row className='justify-content-center text-center mt-5'>
            <Col xs={12} lg={10}>
              <div className="responsive-video">
                <iframe src={project.videoLink}
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='text-center mt-5'>
          {/* <PageTitle title="Payment Plans" data-aos="fade-up" data-aos-delay="100" /> */}
          <Row>
            <Col xs={12} >
              <Image src={project.pricing} alt='' />
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