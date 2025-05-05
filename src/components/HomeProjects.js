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
                amenities: [
                    { name: 'Mosque', icon: <Icons name="mosque" />, },
                    { name: 'Food Court', icon: <Icons name="foodCourt" /> },
                    { name: 'Kids Play Area', icon: <Icons name="kidsPlayArea" /> },
                    { name: 'High-speed Elevators', icon: <Icons name="elevators" /> },
                    { name: 'Escalators', icon: <Icons name="Escalator" /> },
                    { name: 'Central Fire Protection System', icon: <Icons name="fireFighting" /> },
                    { name: 'Air Conditioned Corridors and Common Areas', icon: <Icons name="airConditioning" /> },
                    { name: 'Ample Parking', icon: <Icons name="parkingArea" /> },
                    { name: 'Double Entry', icon: <Icons name="gate" /> },
                    { name: 'Bridge connecting with DHA Main Office', icon: <Icons name="bridge" /> },
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
                amenities: [
                    { name: 'Gymnasium', icon: <Icons name="gymnasium" /> }, 
                    { name: 'Swimming Pool', icon: <Icons name="swimmingPool" /> }, 
                    { name: 'Roof-Top Restaurant', icon: <Icons name="restaurant" /> }, 
                    { name: 'Elevators', icon: <Icons name="elevators" /> }, 
                    { name: 'Escalators', icon: <Icons name="Escalator" /> }, 
                    { name: 'Wide Corridors', icon: <Icons name="wideCorridors" /> }, 
                    { name: 'Multiple Entrances', icon: <Icons name="gate" /> }, 
                    { name: 'Ample Car Parking', icon: <Icons name="parkingArea" /> }, 
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
                amenities: [
                    { name: 'Gym',icon: <Icons name="gym" /> },
                    { name: 'Swimming pool',icon: <Icons name="swimmingPool" /> }, 
                    { name: 'Kids play area', icon: <Icons name="kidsPlayArea" /> }, 
                    { name: 'Landscaped gardens',icon: <Icons name="airConditioning" /> }, 
                    { name: 'Private lounges', icon: <Icons name="airConditioning" /> },
                    { name: 'Executive lift for penthouses',icon: <Icons name="elevators" /> }, 
                    { name: 'Cargo, passenger lifts',icon: <Icons name="elevators" /> }, 
                    { name: 'Garbage disposal',icon: <Icons name="airConditioning" /> },  
                    { name: 'Stunning views', icon: <Icons name="airConditioning" /> },
                    { name: 'Spacious parking',icon: <Icons name="parkingArea" /> },

                ], // Amenities for Golf View Rumanza
            },
            backgroundImage: golfViewRumanza, // Use the imported image
        },
        {
            label: 'Bodla Homes',
            content: {
                logo: bHomes,
                amenities: [
                    // 	5.2-Marla Bodla Homes
                    //{ name: 'Covered Area 2220 Sq.Ft', icon: <Icons name="airConditioning" /> },
                   { name: 'Drawing Room', icon: <Icons name="livingRoom" /> },
                   { name: 'Family Lounge', icon: <Icons name="familyLange" /> },
                   { name: 'Dinning Area', icon: <Icons name="dining" /> },
                   { name: 'Kitchen', icon: <Icons name="kitchen" /> },
                   { name: 'Backyard Service Space', icon: <Icons name="airConditioning" /> },
                   { name: 'Beds + Attached Baths', icon: <Icons name="airConditioning" /> },
                   { name: 'FF Kitchenette', icon: <Icons name="kitchen" /> },
                   { name: 'BBQ Terrace', icon: <Icons name="barbecue" /> },
                   { name: 'Terrace', icon: <Icons name="terrace" /> },
                   { name: 'Roof Top Solar Panel Area', icon: <Icons name="solarPanel" /> },
                   { name: 'Spacious Car Parking', icon: <Icons name="garage" /> },
                    // 	8-Marla Bodla Homes
                    { name: 'Evaporative Air Cooler', icon: <Icons name="airConditioning" /> },
                    { name: 'Spacious Living Room', icon: <Icons name="livingRoom" /> },
                    { name: 'Store Room', icon: <Icons name="storeRoom" /> },
                    { name: 'Maid Room', icon: <Icons name="maid" /> },
                ],// Amenities for Bodla Homes
            },
            backgroundImage: bodlaHomes8Marla, // Use the imported image
        },
    ];

    return (
            <div className="tabs-container" data-aos="fade-up">
                {/* Tab Content */}
                <div className="tabs-content" style={{ backgroundImage: `url(${tabs[activeTab].backgroundImage})` }}>
                    <div className="tab-data-section">
                        <div className="logo">
                            <Image src={tabs[activeTab].content.logo} fluid />
                        </div>
                        <div className="amenities">
                             <Row className='justify-content-center gy-3'>
                                {tabs[activeTab].content.amenities.map((amenity, index) => (
                                    <Col xs={6} sm={3} md={4} lg={2} key={index}>
                                        <span className="amenity-icon">{amenity.icon}</span>
                                        <span className="amenity-name">{amenity.name}</span>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} variant="primary" link='/Contact'  />
                    </div>
                </div>

                {/* Tab Buttons */}
                <div className="tabs">
                    <Container>
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
        
    );
};

export default HomeProjects;