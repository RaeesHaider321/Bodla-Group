import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutehome from '../images/aboutehome.png'
export default function AboutHome() {
    return (
        <section>
            <Container className='aboutehome'>
                <Row className='gy-3'>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <Image src={aboutehome} alt='' />
                    </Col>
                    <Col xs={12} md={6} className='content' data-aos="fade-left">
                        <h2>Each façade unfolds the boundless story of Bodla Group. </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
