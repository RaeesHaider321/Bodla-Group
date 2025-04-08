import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import CardComponent from "./CardComponent";
import legacy from '../images/legacy.png'

const cardData = [
    {
        image: legacy,
        title: "Our Legacy",
        description: "We are a trusted real estate company, creating exquisite homes.",
        link: "/Legacy",
    },
    {
        image: legacy,
        title: "Our Services",
        description: "Shaping the future with innovative and sustainable designs.",
        link: "/Services",
    },
];

export default function HistoryTimeline() {
    return (
        <section className='pt-0'>
            <Container>
                <Row className="justify-content align-items-center">
                    <Col xs={12} md={5} data-aos="fade-right">
                        <h1 className='mb-4'>A History in Creating
                            Timeless <span>Facades</span> of Craftsmanship</h1>
                            <BodlaButton text="Sign Up" icon={<Icons name="rightArrow" />} variant="primary" link="/Register"  />
                    </Col>
                    <Col xs={12} md={7} data-aos="zoom-in">
                        <Row>
                            {cardData.map((card, index) => (
                                <Col key={index} xs={12} md={6}>
                                    <CardComponent
                                        image={card.image}
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
