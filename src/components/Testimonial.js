import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TestimonialList from '../components/TestimonialList';

export default function Testimonial() {
  return (
    <Container className='mb-5'>
        <Row className='align-items-center'>
        <Col xs={12} md={7}>
        <TestimonialList/>
        </Col>
        <Col xs={6} md={5}>
          <h1>Hear from Our <span>Satisfied</span> Clients</h1>
          <button>Testimonial</button>
        </Col>
      </Row>
    </Container>
  )
}
