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
                    { name: '24 Hour Security', icon: <Icons name="cctv" /> },
                    { name: 'High Speed Elevators', icon: <Icons name="elevators" /> },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'First Aid', icon: <Icons name="firstAid" /> },
                    { name: 'Fire Fighting System', icon: <Icons name="fireFighting" /> },
                    { name: '24 Hours Power backup', icon: <Icons name="powerBackup" /> },
                    { name: 'Air Conditioned Corridors', icon: <Icons name="airConditioning" /> },
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
                    { name: 'Mosque', icon: <Icons name="mosque" /> },
                    { name: '24 Hour Security', icon: <Icons name="cctv" /> },
                    { name: 'High Speed Elevators', icon: <Icons name="elevators" /> },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'First Aid', icon: <Icons name="firstAid" /> },
                    { name: 'Fire Fighting System', icon: <Icons name="fireFighting" /> },
                    { name: '24 Hours Power backup', icon: <Icons name="powerBackup" /> },
                    { name: 'Air Conditioned Corridors', icon: <Icons name="airConditioning" /> },
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
                    { name: 'Mosque', icon: <Icons name="mosque" /> },
                    { name: '24 Hour Security', icon: <Icons name="cctv" /> },
                    { name: 'High Speed Elevators', icon: <Icons name="elevators" /> },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'First Aid', icon: <Icons name="firstAid" /> },
                    { name: 'Fire Fighting System', icon: <Icons name="fireFighting" /> },
                    { name: '24 Hours Power backup', icon: <Icons name="powerBackup" /> },
                    { name: 'Air Conditioned Corridors', icon: <Icons name="airConditioning" /> },
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
                    { name: 'Mosque', icon: <Icons name="mosque" /> },
                    { name: '24 Hour Security', icon: <Icons name="cctv" /> },
                    { name: 'High Speed Elevators', icon: <Icons name="elevators" /> },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'First Aid', icon: <Icons name="firstAid" /> },
                    { name: 'Fire Fighting System', icon: <Icons name="fireFighting" /> },
                    { name: '24 Hours Power backup', icon: <Icons name="powerBackup" /> },
                    { name: 'Air Conditioned Corridors', icon: <Icons name="airConditioning" /> },
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
                            <div className="amenities-list">
                                <ul>
                                    {tabs[activeTab].content.amenities.map((amenity, index) => (
                                        <li key={index}>
                                            <span className="amenity-icon">{amenity.icon}</span>
                                            <span className="amenity-name">{amenity.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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