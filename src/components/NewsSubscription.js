import React from 'react'
import { Container, Form, Button, InputGroup } from 'react-bootstrap'

export default function NewsSubscription() {
  return (
    <Container className='newsSubscription-body justify-content-center text-center'>
        <h1>Subscribe to Our News Letter</h1>
        <div className="d-flex justify-content-center mt-4">
      <InputGroup className="newsSubscription w-50">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          aria-label="Email"
        />
        <Button variant="primary">Subscribe</Button>
      </InputGroup>
    </div>
    </Container>
  )
}
