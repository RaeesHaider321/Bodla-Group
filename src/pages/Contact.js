import React from 'react';
import PromotionalSlider from '../components/PromotionalSlider'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import PageTitle from '../components/PageTitle';
const Contact = () => {
  return (
    <>
      <PageTitle title="Feel free to " highlight="Get in Touch" caption="We’d Love to Hear from You!" />
      <section className='contact-us'>
        <Container>
          <Card className='contact-card'>
            <Card.Body>
              <Row className='justify-content-center align-items-center gy-3'>
                <Col xs={12} md={5}>
                  <ContactForm />
                </Col>
                <Col xs={12} md={7}>
                  <h1>Don’t hesitate to contact us!</h1>
                  <p>Whether you have questions, feedback, or need assistance, our team is here to help. You can contact us via email, phone, or through our website’s contact form. We value your input and look forward to connecting with you!</p>
                  <Row className='gy-4'>
                    <Col xs={12} md={12}>
                      <Card>
                        <Card.Body><Card.Title>Multan Head Office</Card.Title>
                          <p>Business Hub, Sector-k adjacent to DHA Main Head Office, DHA Multan</p></Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={12}>
                      <Row className='gy-4'>
                        <Col xs={12} md={6}>
                          <Card>
                            <Card.Body>
                              <Card.Title>Email</Card.Title>
                              <p>info@bodlagroup.com</p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xs={12} md={6}>
                          <Card>
                            <Card.Body>
                              <Card.Title>Phone</Card.Title>
                              <p>061-1111-26352</p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row className='contact-map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9287473577783!2d71.55361441037263!3d30.296090006500197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3924cbd1167128b5%3A0x79d6c7b73dd41cef!2sBusiness%20Hub%2C%20DHA%20Multan!5e0!3m2!1sen!2s!4v1744012574158!5m2!1sen!2s"
              width="100%"
              height="350px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location of Bodla Bulders, Bodla Group Business Hub, DHA Multan"
            />
          </Row>
        </Container>

      </section>
      <PromotionalSlider />
    </>
  );
};

export default Contact;