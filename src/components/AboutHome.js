import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutehome from '../images/aboutehome.png'
export default function AboutHome() {
    return (
        <section>
            <Container className='aboutehome'>
                <Row>
                    <Col xs={12} md={6} data-aos="fade-right">
                        <Image src={aboutehome} alt='' />
                    </Col>
                    <Col xs={12} md={6} className='content' data-aos="fade-left">
                        <h1>We are an alternative <br/> asset manager,   investor & developer</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
