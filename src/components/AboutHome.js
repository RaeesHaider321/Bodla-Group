import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutehome from '../images/oneDestination1.jpg'
export default function AboutHome() {
    return (
        <section>
            <Container className='aboutehome'>
                <Row className='gy-3'>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <Image src={aboutehome} alt='' />
                    </Col>
                    <Col xs={12} md={6} className='content' >
                        <h2>Each façade unfolds the boundless story of Bodla Group. </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
