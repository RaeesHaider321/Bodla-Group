import React from 'react';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import './BodlaUpdates.css';
import update1 from '../images/update-1.jpg';
import update2 from '../images/update-2.jpg';

// Array of updates
const updates = [
    {
        id: 1,
        image: update1,
        title: "Bodla Homes 8-Marla Construction Update",
        text: "Bodla Homes 8-Marla: Developing your future home. ",
        buttonText: "Go somewhere",
        buttonLink: "#"
    },
    {
        id: 2,
        image: update2,
        title: "One Destination Construction Update ",
        text: "One Destination: The Stage of Rising Structures.",
        buttonText: "Learn more",
        buttonLink: "#"
    },
    {
        id: 3,
        image: update2,
        title: "Five projects of Bodla Group ",
        text: "Bodla Group - Only Developer with 5-developing projects in DHA Multan ",
        buttonText: "Learn more",
        buttonLink: "#"
    },
    {
        id: 4,
        image: update2,
        title: "5 Awards as Consistent Performers",
        text: "Bodla Group shinning with 5 Awards: Consistent Performers of DHA Multan",
        buttonText: "Learn more",
        buttonLink: "#"
    }
];

function CarouselFadeExample() {

    return (
        <Container data-aos="fade-up">
            <Row className="justify-content-center text-center mb-4">
            <Col xs={12} md={8} data-aos="fade-up" data-aos-delay="200">
            <h2>Bodla Group <span>Updates</span></h2>
            <p>Be the first to know what Bodla Group is bringing your way. </p>
            </Col>
        </Row>
            <Carousel fade className='bodlaUpdates' indicators={false} controls={false} interval={3000} pause={true} >
                {updates.map(update => (
                    <Carousel.Item key={update.id}>
                        <Card>
                            <Row className='justify-content-center align-items-center'>
                                <Col xs={12} md={6} data-aos="zoom-in">
                                    <Card.Body>
                                        <h4 data-aos="fade-right">{update.title}</h4>
                                        <p data-aos="fade-right">{update.text}</p>
                                    </Card.Body>
                                </Col>
                                <Col xs={12} md={6} data-aos="zoom-in" data-aos-delay="100">
                                    <Card.Img src={update.image} />
                                </Col>
                            </Row>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default CarouselFadeExample;