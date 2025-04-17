import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Icons from "../components/Icon"; 
import BodlaButton from './Button';
import CardComponent from "./CardComponent";
import legacy from '../images/RevisedElevation.jpg'
import service from '../images/img148.jpg'

const cardData = [
    {
        image: legacy,
        title: "Our Legacy",
        description: "Rooted in trust, rising with pride — our journey defines real estate excellence across DHA Multan.",
        // link: "/Legacy",
    },
    {
        image: service,
        title: "Our Services",
        description: "Acquisition, Construction, Marketing, and beyond - We build possibilities with end-to-end real estate solutions.",
        // link: "/Services",
    },
];

export default function HistoryTimeline() {
    return (
        <section className='pt-0'>
            <Container>
                <Row className="justify-content align-items-center gy-3">
                    <Col xs={12} md={5} data-aos="fade-right">
                        <h2 className='mb-4'>Bodla Group as your one-stop shop, <span>overseeing every facet</span> of the real estate journey.</h2>
                        <BodlaButton text="Reach Us Here!" icon={<Icons name="rightArrow" />} variant="primary" link="/Contact"  />
                    </Col>
                    <Col xs={12} md={7} data-aos="zoom-in">
                        <Row className='gy-3'>
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
