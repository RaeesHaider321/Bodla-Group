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
        title: "An Evening of Enchantment – Where the Timeless Art of Qawwali Elevates the Grandeur of Our Visionary Creations! ",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere",
        buttonLink: "#"
    },
    {
        id: 2,
        image: update2,
        title: "Legendary Performance by Abu Muhammad & Fareed Ayaz on One Destination Launching Ceremony ",
        text: "Another example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Learn more",
        buttonLink: "#"
    }
];

function CarouselFadeExample() {

    return (
        <Container data-aos="fade-up">
            <Carousel fade className='bodlaUpdates' indicators={false} controls={false} interval={3000} pause={true} >
                {updates.map(update => (
                    <Carousel.Item key={update.id}>
                        <Card>
                            <Row className='justify-content-center align-items-center'>
                                <Col xs={6} md={6} data-aos="zoom-in">
                                    <Card.Body>
                                        <h1 data-aos="fade-right">{update.title}</h1>
                                    </Card.Body>
                                </Col>
                                <Col xs={6} md={6} data-aos="zoom-in" data-aos-delay="100">
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