import React, { useState } from 'react';
import './HomeProjects.css'; 
import Icons from "../components/Icon";
import BodlaButton from './Button'; // Ensure this path is correct
import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import businessHub from '../images/businessHub.jpg';
import golfViewRumanza from '../images/golfViewRumanza.jpg';
import bHomes from '../images/bHomes-logo.png'; // Import logos
import bHub from '../images/BHub-logo.png';
import oneD from '../images/OneD-logo.png';
import gvr from '../images/gvr-logo.png';
import { Container, Image, Row, Col } from 'react-bootstrap';

const HomeProjects = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Business Hub',
            content: {
                logo: bHub,
                link: '/business-hub', // Updated link
                // title: 'Welcome to Business Hub',
                // description: 'This is the content for Business Hub. Here you can add more details.',
                // details: 'Additional details for Business Hub.',
                amenities: [
                    { name: 'Mosque', icon: <Icons name="mosque" />, },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'Kids Play Area', icon: <Icons name="airConditioning" /> },
                    { name: 'High-speed Elevators & Escalators', icon: <Icons name="elevators" /> },
                    { name: 'Central Fire Protection System', icon: <Icons name="fireFighting" /> },
                    { name: 'Air Conditioned Corridors and Common Areas', icon: <Icons name="airConditioning" /> },
                    { name: 'Ample Parking', icon: <Icons name="elevators" /> },
                    { name: 'Double Entry', icon: <Icons name="elevators" /> },
                    { name: 'Bridge connecting with DHA Main Office', icon: <Icons name="elevators" /> },
                    { name: '24 Hour Security', icon: <Icons name="cctv" /> },
                    { name: 'First Aid', icon: <Icons name="firstAid" /> },
                    { name: '24 Hours Power backup', icon: <Icons name="powerBackup" /> },
                ], // Amenities for Business Hub
            },
            backgroundImage: businessHub, // Use the imported image
        },
        {
            label: 'One Destination',
            content: {
                logo: oneD,
                link: '/one-destination', // Updated link
                amenities: [
                    { name: 'Gymnasium', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Swimming Pool', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Roof-Top Restaurant', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Elevators', icon: <Icons name="elevators" /> }, 
                    { name: 'Wide Corridors', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Multiple Entrances', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Ample Car Parking', icon: <Icons name="airConditioning" /> }, 
                    { name: '24/7 Power Backup', icon: <Icons name="powerBackup" /> }, 
                    { name: '24/7 Security', icon: <Icons name="cctv" /> },
                ],
            },
            backgroundImage: oneDestination, // Use the imported image
        },
        {
            label: 'Golf View Rumanza',
            content: {
                logo: gvr,
                link: '/golf-view-rumanza', // Updated link
                amenities: [
                    { name: 'Gym',icon: <Icons name="airConditioning" /> },
                    { name: 'Swimming pool',icon: <Icons name="airConditioning" /> }, 
                    { name: 'Kids play area', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Landscaped gardens',icon: <Icons name="airConditioning" /> }, 
                    { name: 'Private lounges', icon: <Icons name="airConditioning" /> },
                    { name: 'Executive lift for penthouses',icon: <Icons name="elevators" /> }, 
                    { name: 'Cargo, passenger lifts',icon: <Icons name="elevators" /> }, 
                    { name: 'Garbage disposal',icon: <Icons name="airConditioning" /> },  
                    { name: 'Stunning views', icon: <Icons name="airConditioning" /> },
                    { name: 'Spacious parking',icon: <Icons name="airConditioning" /> },

                ], // Amenities for Golf View Rumanza
            },
            backgroundImage: golfViewRumanza, // Use the imported image
        },
        {
            label: 'Bodla Homes',
            content: {
                logo: bHomes,
                link: '/bodla-homes', // Updated link
                amenities: [
                    // 	5.2-Marla Bodla Homes
                //    { name: 'Covered Area 2220 Sq.Ft', icon: <Icons name="airConditioning" /> },
                   { name: 'Drawing Room', icon: <Icons name="airConditioning" /> },
                   { name: 'Family Lounge + Dinning', icon: <Icons name="airConditioning" /> },
                   { name: 'Kitchen', icon: <Icons name="airConditioning" /> },
                   { name: 'Backyard Service Space', icon: <Icons name="airConditioning" /> },
                   { name: 'Beds + Attached Baths', icon: <Icons name="airConditioning" /> },
                   { name: 'FF Kitchenette and Terrace Roof Top BBQ Terrace', icon: <Icons name="airConditioning" /> },
                   { name: 'Roof Top Solar Panel Area', icon: <Icons name="airConditioning" /> },
                   { name: 'Spacious Car Parking', icon: <Icons name="airConditioning" /> },
                // 	8-Marla Bodla Homes
                    // { name: 'Covered Area 2905 Sqft', icon: <Icons name="airConditioning" /> },
                    { name: 'Evaporative Air Cooler', icon: <Icons name="airConditioning" /> },
                    { name: 'Drawing Room', icon: <Icons name="airConditioning" /> },
                    { name: 'Family Lounge + Dinning', icon: <Icons name="airConditioning" /> },
                    // { name: 'Kitchen', icon: <Icons name="airConditioning" /> },
                    // { name: 'Backyard Service Space', icon: <Icons name="airConditioning" /> },
                    { name: 'Spacious Living Room', icon: <Icons name="airConditioning" /> },
                    { name: 'Store Room / Maid Room', icon: <Icons name="airConditioning" /> },
                    // { name: '5 Beds + Attached Baths', icon: <Icons name="airConditioning" /> },
                    // { name: 'FF Kitchenette andTerrace', icon: <Icons name="airConditioning" /> }, 
                    { name: 'Roof Top B BQ Terrace', icon: <Icons name="airConditioning" /> },
                    { name: 'Roof Top Solar Panel Area', icon: <Icons name="airConditioning" /> },
                    // { name: 'Spacious Car Parking (2 Cars)', icon: <Icons name="airConditioning" /> },

                ],// Amenities for Bodla Homes
            },
            backgroundImage: bodlaHomes8Marla, // Use the imported image
        },
    ];

    return (
        <section>
            <div className="tabs-container" data-aos="fade-up">
                {/* Tab Content */}
                <div className="tabs-content" style={{ backgroundImage: `url(${tabs[activeTab].backgroundImage})` }}>
                    <div className="tab-data-section">
                        <div className="logo">
                            <Image src={tabs[activeTab].content.logo} fluid />
                        </div>
                        <div className="amenities">
                            {/* <h2>{tabs[activeTab].content.title}</h2>
                            <p>{tabs[activeTab].content.description}</p>
                            <div className="additional-details">
                                <p>{tabs[activeTab].content.details}</p>
                            </div> */}
                            {/* Render Amenities with Icons */}
                            <Row>
                                {tabs[activeTab].content.amenities.map((amenity, index) => (
                                    <Col xs={12} sm={3} md={4} lg={2} key={index}>
                                        <span className="amenity-icon">{amenity.icon}</span>
                                        <span className="amenity-name">{amenity.name}</span>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} variant="primary" link={tabs[activeTab].content.link}  />
                    </div>
                </div>

                {/* Tab Buttons */}
                <div className="tabs">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col></Col>
                        </Row>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`tab-item ${index === activeTab ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;